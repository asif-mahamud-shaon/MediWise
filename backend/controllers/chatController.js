import { Op, Sequelize } from 'sequelize';
import Message from '../models/Message.js';
import User from '../models/User.js';
import Doctor from '../models/Doctor.js';
import Appointment from '../models/Appointment.js';

// Get all users that can be chatted with (patients for doctors, doctors/admins for patients)
export const getChatUsers = async (req, res) => {
  try {
    const userId = req.user.id;
    const { role } = req.user;

    let users = [];
    
    if (role === 'doctor') {
      // Doctors can chat only with their own patients (patients who have appointments with this doctor)
      const doctor = await Doctor.findOne({ where: { userId } });
      if (!doctor) {
        return res.json({ success: true, users: [] });
      }

      // Get all distinct patient IDs who have appointments with this doctor
      const appointments = await Appointment.findAll({
        where: {
          doctorId: doctor.id,
        },
        attributes: ['patientId'],
        group: ['patientId'],
        raw: true,
      });

      const patientIds = [...new Set(appointments.map((apt) => apt.patientId).filter(Boolean))];

      if (patientIds.length === 0) {
        return res.json({ success: true, users: [] });
      }

      // Get all patients who have appointments with this doctor
      const patients = await User.findAll({
        where: {
          id: { [Op.in]: patientIds },
          role: 'patient',
        },
        attributes: ['id', 'name', 'email', 'role', 'phone'],
        order: [['name', 'ASC']],
      });
      
      // Also get all admins - doctors can always chat with admins
      const admins = await User.findAll({
        where: {
          role: 'admin',
        },
        attributes: ['id', 'name', 'email', 'role', 'phone'],
        order: [['name', 'ASC']],
      });
      
      // Combine patients and admins
      users = [...patients, ...admins];
    } else if (role === 'patient') {
      // Patients can chat only with doctors whose appointments status is "completed"
      // and admins
      
      // Get all appointments for this patient that are completed
      const appointments = await Appointment.findAll({
        where: {
          patientId: userId,
          status: 'completed',
        },
        include: [
          {
            model: Doctor,
            as: 'doctor',
            include: [
              {
                model: User,
                as: 'user',
                attributes: ['id', 'name', 'email', 'role', 'phone'],
              },
            ],
          },
        ],
      });

      // Extract doctor user IDs from appointments
      const doctorUserIds = appointments
        .map((apt) => apt.doctor?.user?.id)
        .filter(Boolean);

      // Get all doctors who have completed appointments with this patient
      const doctors = await User.findAll({
        where: {
          id: { [Op.in]: doctorUserIds },
          role: 'doctor',
        },
        attributes: ['id', 'name', 'email', 'role', 'phone'],
        order: [['name', 'ASC']],
      });
      
      // Also get all admins - patients can always chat with admins
      const admins = await User.findAll({
        where: {
          role: 'admin',
        },
        attributes: ['id', 'name', 'email', 'role', 'phone'],
        order: [['name', 'ASC']],
      });
      
      // Combine doctors and admins
      users = [...doctors, ...admins];
    } else if (role === 'admin') {
      // Admins can chat with all users (patients and doctors) - full access
      users = await User.findAll({
        where: {
          role: { [Op.in]: ['patient', 'doctor'] },
        },
        attributes: ['id', 'name', 'email', 'role', 'phone'],
        order: [['name', 'ASC']],
      });
    }

    // Get unread counts for each user
    const unreadCounts = await Message.findAll({
      where: {
        receiverId: userId,
        isRead: false,
      },
      attributes: ['senderId', [Message.sequelize.fn('COUNT', Message.sequelize.col('id')), 'count']],
      group: ['senderId'],
      raw: true,
    });

    const unreadMap = {};
    unreadCounts.forEach((item) => {
      unreadMap[item.senderId] = parseInt(item.count);
    });

    // Get last message for each user
    const lastMessages = await Message.findAll({
      where: {
        [Op.or]: [
          { senderId: userId },
          { receiverId: userId },
        ],
      },
      include: [
        { model: User, as: 'sender', attributes: ['id'] },
        { model: User, as: 'receiver', attributes: ['id'] },
      ],
      order: [['createdAt', 'DESC']],
    });

    const lastMessageMap = {};
    lastMessages.forEach((msg) => {
      const partnerId = msg.senderId === userId ? msg.receiverId : msg.senderId;
      if (!lastMessageMap[partnerId]) {
        lastMessageMap[partnerId] = {
          content: msg.content,
          time: msg.createdAt,
        };
      }
    });

    // Combine users with unread counts and last messages
    const usersWithDetails = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      phone: user.phone,
      unreadCount: unreadMap[user.id] || 0,
      lastMessage: lastMessageMap[user.id]?.content || 'No messages yet',
      lastMessageTime: lastMessageMap[user.id]?.time || new Date(),
    }));

    res.json({
      success: true,
      users: usersWithDetails,
    });
  } catch (error) {
    console.error('Error fetching chat users:', error);
    res.status(500).json({ message: error.message });
  }
};

// Get all conversations for a user
export const getConversations = async (req, res) => {
  try {
    const userId = req.user.id;
    const { role } = req.user;

    // Get all unique users that have sent or received messages from this user
    // Order by createdAt DESC to get newest messages first
    const messages = await Message.findAll({
      where: {
        [Op.or]: [
          { senderId: userId },
          { receiverId: userId },
        ],
      },
      include: [
        { model: User, as: 'sender', attributes: ['id', 'name', 'email', 'role', 'phone'] },
        { model: User, as: 'receiver', attributes: ['id', 'name', 'email', 'role', 'phone'] },
      ],
      order: [['createdAt', 'DESC']], // Newest messages first
    });
    
    console.log('📨 Total messages fetched:', messages.length);
    if (messages.length > 0) {
      console.log('📨 First message (newest):', {
        content: messages[0].content?.substring(0, 30),
        createdAt: messages[0].createdAt,
        senderId: messages[0].senderId,
        receiverId: messages[0].receiverId
      });
      console.log('📨 Last message (oldest):', {
        content: messages[messages.length - 1].content?.substring(0, 30),
        createdAt: messages[messages.length - 1].createdAt,
        senderId: messages[messages.length - 1].senderId,
        receiverId: messages[messages.length - 1].receiverId
      });
    }

    // If patient, get list of doctors with completed appointments OR doctors who have sent messages
    let allowedDoctorUserIds = [];
    if (role === 'patient') {
      // Get doctors with completed appointments
      const appointments = await Appointment.findAll({
        where: {
          patientId: userId,
          status: 'completed',
        },
        include: [
          {
            model: Doctor,
            as: 'doctor',
            include: [
              {
                model: User,
                as: 'user',
                attributes: ['id'],
              },
            ],
          },
        ],
      });
      allowedDoctorUserIds = appointments
        .map((apt) => apt.doctor?.user?.id)
        .filter(Boolean);
      
      // ALSO include doctors who have sent messages to this patient (even without completed appointment)
      // This allows patients to see conversations with doctors who initiated contact
      try {
        const doctorMessages = await Message.findAll({
          where: {
            receiverId: userId,
          },
          include: [
            {
              model: User,
              as: 'sender',
              attributes: ['id', 'role'],
              required: true,
            },
          ],
        });
        
        // Filter to get only doctors and extract unique sender IDs
        const doctorIdsFromMessages = doctorMessages
          .filter((msg) => msg.sender && msg.sender.role === 'doctor')
          .map((msg) => msg.senderId || msg.sender?.id)
          .filter(Boolean);
        
        // Combine both lists
        allowedDoctorUserIds = [...new Set([...allowedDoctorUserIds, ...doctorIdsFromMessages])];
      } catch (error) {
        console.error('Error fetching doctors who messaged:', error);
        // Continue with just appointments-based doctors if this fails
      }
      
      console.log('Patient allowed doctor IDs:', allowedDoctorUserIds);
    }

    // Group by conversation partner
    const conversationsMap = new Map();
    
    messages.forEach((msg) => {
      const partnerId = msg.senderId === userId ? msg.receiverId : msg.senderId;
      const partner = msg.senderId === userId ? msg.receiver : msg.sender;
      
      if (!partner) {
        console.warn('Message has no partner:', msg.id);
        return;
      }
      
      // For admins: Show all conversations (patients and doctors) - full access
      if (role === 'admin') {
        // Allow all conversations - no restrictions
      }
      
      // For patients: Include admins (always allowed) and doctors who have sent messages OR have completed appointments
      if (role === 'patient') {
        if (partner.role === 'doctor') {
          if (!allowedDoctorUserIds.includes(partnerId)) {
            console.log(`Skipping conversation with doctor ${partnerId} - not in allowed list`);
            return; // Skip this conversation
          }
        } else if (partner.role === 'admin') {
          // Allow admin conversations - no restrictions
          // Continue to add admin to conversations
        } else if (partner.role === 'patient') {
          // Patient cannot chat with other patients
          return;
        }
      }
      
      // For doctors: Include admins (always allowed) and patients
      if (role === 'doctor') {
        if (partner.role === 'admin') {
          // Allow admin conversations - no restrictions
          // Continue to add admin to conversations
        } else if (partner.role === 'patient') {
          // Doctors can chat with patients - implicit allow
        } else if (partner.role === 'doctor') {
          // Doctors cannot chat with other doctors
          return;
        }
      }
      
      if (!conversationsMap.has(partnerId)) {
        // Get unread count for this conversation
        const unreadCount = messages.filter(
          (m) => 
            ((m.senderId === partnerId && m.receiverId === userId) || 
             (m.senderId === userId && m.receiverId === partnerId)) &&
            !m.isRead && m.receiverId === userId
        ).length;

        // Get the most recent message for this conversation
        // Since messages are already sorted DESC, first matching message is the latest
        const latestMessage = messages.find(
          (m) => 
            (m.senderId === partnerId && m.receiverId === userId) || 
            (m.senderId === userId && m.receiverId === partnerId)
        );

        conversationsMap.set(partnerId, {
          id: partnerId,
          name: partner.name,
          email: partner.email,
          role: partner.role,
          phone: partner.phone || null,
          lastMessage: latestMessage?.content || msg.content,
          lastMessageTime: latestMessage?.createdAt || msg.createdAt,
          unreadCount,
          avatar: partner.role === 'doctor' ? null : null, // Can be extended
        });
      } else {
        // Update existing conversation - find the latest message for this conversation
        const existing = conversationsMap.get(partnerId);
        const latestMessageForConv = messages.find(
          (m) => 
            (m.senderId === partnerId && m.receiverId === userId) || 
            (m.senderId === userId && m.receiverId === partnerId)
        );
        
        if (latestMessageForConv) {
          const latestTime = new Date(latestMessageForConv.createdAt).getTime();
          const existingTime = existing.lastMessageTime ? new Date(existing.lastMessageTime).getTime() : 0;
          
          // Update if this message is newer
          if (latestTime > existingTime) {
            existing.lastMessage = latestMessageForConv.content;
            existing.lastMessageTime = latestMessageForConv.createdAt;
            // Update unread count
            const unreadCount = messages.filter(
              (m) => 
                ((m.senderId === partnerId && m.receiverId === userId) || 
                 (m.senderId === userId && m.receiverId === partnerId)) &&
                !m.isRead && m.receiverId === userId
            ).length;
            existing.unreadCount = unreadCount;
          }
        }
      }
    });

    const conversations = Array.from(conversationsMap.values());
    
    // Sort by last message time (newest first) - handle null/undefined properly
    conversations.sort((a, b) => {
      try {
        const timeA = a.lastMessageTime ? new Date(a.lastMessageTime).getTime() : 0;
        const timeB = b.lastMessageTime ? new Date(b.lastMessageTime).getTime() : 0;
        return timeB - timeA; // Newest first (larger timestamp = more recent)
      } catch (err) {
        console.error('Error sorting conversations:', err, { a: a.name, b: b.name });
        return 0; // Keep original order on error
      }
    });
    
    console.log('📊 Backend sorted conversations:', conversations.map(c => ({
      name: c.name,
      lastMessageTime: c.lastMessageTime,
      timestamp: c.lastMessageTime ? new Date(c.lastMessageTime).getTime() : 0
    })));

    res.json({
      success: true,
      conversations,
    });
  } catch (error) {
    console.error('❌ Error fetching conversations:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({ 
      success: false,
      message: error.message || 'Failed to fetch conversations',
      conversations: [] 
    });
  }
};

// Get messages between two users
export const getMessages = async (req, res) => {
  try {
    const { userId } = req.params;
    const currentUserId = req.user.id;
    const { role } = req.user;

    // If patient is trying to view messages, verify access
    if (role === 'patient') {
      const receiver = await User.findByPk(userId);
      if (receiver && receiver.role === 'doctor') {
        // Check if patient has a completed appointment with this doctor
        const doctor = await Doctor.findOne({ where: { userId } });
        if (doctor) {
          const appointment = await Appointment.findOne({
            where: {
              patientId: currentUserId,
              doctorId: doctor.id,
              status: 'completed',
            },
          });

          if (!appointment) {
            return res.status(403).json({ 
              message: 'You can only view messages with doctors with whom you have completed appointments.' 
            });
          }
        }
      } else if (receiver && receiver.role === 'admin') {
        // Patients can always view messages with admins - no restrictions
        // Allow the request to proceed
      }
    }

    const messages = await Message.findAll({
      where: {
        [Op.or]: [
          { senderId: currentUserId, receiverId: userId },
          { senderId: userId, receiverId: currentUserId },
        ],
      },
      include: [
        { model: User, as: 'sender', attributes: ['id', 'name', 'email', 'role', 'phone'] },
        { model: User, as: 'receiver', attributes: ['id', 'name', 'email', 'role', 'phone'] },
      ],
      order: [['createdAt', 'ASC']],
    });

    // Mark messages as read
    await Message.update(
      { isRead: true, readAt: new Date() },
      {
        where: {
          senderId: userId,
          receiverId: currentUserId,
          isRead: false,
        },
      }
    );

    res.json({
      success: true,
      messages,
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: error.message });
  }
};

// Send a message
export const sendMessage = async (req, res) => {
  try {
    const { receiverId, content } = req.body;
    const senderId = req.user.id;
    const { role } = req.user;

    if (!receiverId || !content) {
      return res.status(400).json({ message: 'Receiver ID and content are required' });
    }

      // If patient is sending message to a doctor, check if they have a completed appointment
      // But allow patients to always message admins
      if (role === 'patient') {
        const receiver = await User.findByPk(receiverId);
        if (receiver && receiver.role === 'doctor') {
          // Check if patient has a completed appointment with this doctor
          const doctor = await Doctor.findOne({ where: { userId: receiverId } });
          if (doctor) {
            const appointment = await Appointment.findOne({
              where: {
                patientId: senderId,
                doctorId: doctor.id,
                status: 'completed',
              },
            });

            if (!appointment) {
              return res.status(403).json({ 
                message: 'You can only message doctors with whom you have completed appointments. Please complete your appointment first.' 
              });
            }
          }
        } else if (receiver && receiver.role === 'admin') {
          // Patients can always message admins - no restrictions
          // Allow the message to proceed
        }
      }

    const message = await Message.create({
      senderId,
      receiverId,
      content,
      isRead: false,
    });

    const messageWithDetails = await Message.findByPk(message.id, {
      include: [
        { model: User, as: 'sender', attributes: ['id', 'name', 'email', 'role'] },
        { model: User, as: 'receiver', attributes: ['id', 'name', 'email', 'role'] },
      ],
    });

    res.status(201).json({
      success: true,
      message: messageWithDetails,
    });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ message: error.message });
  }
};

// Get unread message count
export const getUnreadCount = async (req, res) => {
  try {
    const userId = req.user.id;

    const count = await Message.count({
      where: {
        receiverId: userId,
        isRead: false,
      },
    });

    res.json({
      success: true,
      count,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



