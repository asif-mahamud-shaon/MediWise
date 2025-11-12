import { Op } from 'sequelize';
import Prescription from '../models/Prescription.js';
import User from '../models/User.js';
import Doctor from '../models/Doctor.js';
import Appointment from '../models/Appointment.js';
import MedicalAIChatbot from '../utils/aiChatbot.js';

export const createPrescription = async (req, res) => {
  try {
    const { patientEmail, appointmentId, diagnosis, medicines, instructions, prescriptionFile } = req.body;

    const doctor = await Doctor.findOne({ where: { userId: req.user.id } });
    if (!doctor) {
      return res.status(403).json({ message: 'Only doctors can create prescriptions' });
    }

    let patientId;
    if (patientEmail) {
      const patient = await User.findOne({ where: { email: patientEmail } });
      if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
      }
      patientId = patient.id;
    } else {
      return res.status(400).json({ message: 'Patient email is required' });
    }

    const prescription = await Prescription.create({
      patientId,
      doctorId: doctor.id,
      appointmentId,
      diagnosis,
      medicines: medicines || [],
      instructions,
      prescriptionFile,
    });

    const prescriptionWithDetails = await Prescription.findByPk(prescription.id, {
      include: [
        { model: User, as: 'patient', attributes: ['id', 'name', 'email'] },
        {
          model: Doctor,
          as: 'doctor',
          include: [{ model: User, as: 'user', attributes: ['id', 'name'] }],
        },
        { model: Appointment, as: 'appointment' },
      ],
    });

    res.status(201).json({
      success: true,
      prescription: prescriptionWithDetails,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPrescriptions = async (req, res) => {
  try {
    const { cursor, limit = 10 } = req.query;
    
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { role } = req.user;

    const queryOptions = {
      include: [
        { model: User, as: 'patient', attributes: ['id', 'name', 'email'], required: false },
        {
          model: Doctor,
          as: 'doctor',
          include: [{ model: User, as: 'user', attributes: ['id', 'name'], required: false }],
          required: false,
        },
        { model: Appointment, as: 'appointment', required: false },
      ],
      limit: parseInt(limit) + 1,
      order: [['createdAt', 'DESC']],
    };

    // Initialize where clause
    queryOptions.where = {};

    if (role === 'patient') {
      queryOptions.where.patientId = req.user.id;
    } else if (role === 'doctor') {
      const doctor = await Doctor.findOne({ where: { userId: req.user.id } });
      if (doctor) {
        queryOptions.where.doctorId = doctor.id;
      } else {
        return res.json({ success: true, prescriptions: [], pagination: { hasMore: false } });
      }
    }

    if (cursor) {
      queryOptions.where.id = {
        [Op.lt]: cursor,
      };
    }

    const prescriptions = await Prescription.findAll(queryOptions);

    const hasMore = prescriptions.length > parseInt(limit);
    if (hasMore) {
      prescriptions.pop();
    }

    const nextCursor = hasMore ? prescriptions[prescriptions.length - 1]?.id : null;

    res.json({
      success: true,
      prescriptions,
      pagination: {
        hasMore,
        nextCursor,
      },
    });
  } catch (error) {
    console.error('Error in getPrescriptions:', error);
    res.status(500).json({ message: error.message || 'Internal server error' });
  }
};

export const getAISuggestions = async (req, res) => {
  try {
    const { problem, patientAge, patientWeight, department } = req.body;

    if (!problem) {
      return res.status(400).json({ message: 'Problem description is required' });
    }

    // If department is provided, prepend it to the problem for better detection
    let problemDescription = problem;
    if (department) {
      problemDescription = `${department} - ${problem}`;
    }

    const chatbot = new MedicalAIChatbot();
    const suggestions = chatbot.generatePrescription(problemDescription);

    res.json({
      success: true,
      suggestions: {
        ...suggestions,
        department: department || suggestions.department || null,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

