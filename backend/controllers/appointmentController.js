import { Op } from 'sequelize';
import Appointment from '../models/Appointment.js';
import Doctor from '../models/Doctor.js';
import User from '../models/User.js';
import { processFeeSplit } from './paymentController.js';

export const createAppointment = async (req, res) => {
  try {
    const { doctorId, appointmentDate, appointmentTime, reason } = req.body;
    const patientId = req.user.id;

    const appointment = await Appointment.create({
      patientId,
      doctorId,
      appointmentDate,
      appointmentTime,
      reason,
      status: 'pending',
    });

    const appointmentWithDetails = await Appointment.findByPk(appointment.id, {
      include: [
        { model: User, as: 'patient', attributes: ['id', 'name', 'email', 'phone'] },
        {
          model: Doctor,
          as: 'doctor',
          include: [{ model: User, as: 'user', attributes: ['id', 'name'] }],
        },
      ],
    });

    res.status(201).json({
      success: true,
      appointment: appointmentWithDetails,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAppointments = async (req, res) => {
  try {
    const { cursor, limit = 10, status } = req.query;
    
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { role } = req.user;

    const queryOptions = {
      include: [
        { model: User, as: 'patient', attributes: ['id', 'name', 'email', 'phone'], required: false },
        {
          model: Doctor,
          as: 'doctor',
          include: [{ model: User, as: 'user', attributes: ['id', 'name'], required: false }],
          required: false,
        },
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
        return res.json({ success: true, appointments: [], pagination: { hasMore: false } });
      }
    }

    if (status) {
      queryOptions.where.status = status;
    }

    if (cursor) {
      queryOptions.where.id = {
        [Op.lt]: cursor,
      };
    }

    const appointments = await Appointment.findAll(queryOptions);

    const hasMore = appointments.length > parseInt(limit);
    if (hasMore) {
      appointments.pop();
    }

    const nextCursor = hasMore ? appointments[appointments.length - 1]?.id : null;

    res.json({
      success: true,
      appointments,
      pagination: {
        hasMore,
        nextCursor,
      },
    });
  } catch (error) {
    console.error('Error in getAppointments:', error);
    res.status(500).json({ message: error.message || 'Internal server error' });
  }
};

export const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const appointment = await Appointment.findByPk(id);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    const { role } = req.user;
    if (role === 'doctor') {
      const doctor = await Doctor.findOne({ where: { userId: req.user.id } });
      if (doctor && appointment.doctorId !== doctor.id) {
        return res.status(403).json({ message: 'Access denied' });
      }
    } else if (role === 'patient' && appointment.patientId !== req.user.id) {
      return res.status(403).json({ message: 'Access denied' });
    }

    // If status is being changed to 'completed', process fee split
    if (status === 'completed' && appointment.status !== 'completed') {
      const doctor = await Doctor.findByPk(appointment.doctorId);
      if (doctor && doctor.consultationFee) {
        try {
          await processFeeSplit(appointment.id, doctor.consultationFee);
        } catch (feeError) {
          console.error('Error processing fee split:', feeError);
          // Continue with status update even if fee split fails
        }
      }
    }

    await appointment.update({ status });

    const updatedAppointment = await Appointment.findByPk(id, {
      include: [
        { model: User, as: 'patient', attributes: ['id', 'name', 'email', 'phone'] },
        {
          model: Doctor,
          as: 'doctor',
          include: [{ model: User, as: 'user', attributes: ['id', 'name'] }],
        },
      ],
    });

    res.json({
      success: true,
      appointment: updatedAppointment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAvailableTimeSlots = async (req, res) => {
  try {
    const { doctorId, date } = req.query;

    if (!doctorId || !date) {
      return res.status(400).json({ message: 'Doctor ID and date are required' });
    }

    // Get doctor information
    const doctor = await Doctor.findByPk(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    // Check if doctor is available
    if (!doctor.isAvailable) {
      return res.json({
        success: true,
        availableSlots: [],
        isLimitReached: false,
        message: 'Doctor is not available',
      });
    }

    // Parse available days
    let availableDays = [];
    if (doctor.availableDays) {
      if (typeof doctor.availableDays === 'string') {
        availableDays = JSON.parse(doctor.availableDays);
      } else {
        availableDays = doctor.availableDays;
      }
    }

    // Check if the requested date is in available days
    const requestedDate = new Date(date);
    const dayName = requestedDate.toLocaleDateString('en-US', { weekday: 'long' });
    
    if (!availableDays.includes(dayName)) {
      return res.json({
        success: true,
        availableSlots: [],
        isLimitReached: false,
        message: `Doctor is not available on ${dayName}`,
      });
    }

    // Get doctor's working hours
    const availableFrom = doctor.availableFrom || '09:00:00';
    const availableTo = doctor.availableTo || '17:00:00';
    const appointmentDuration = doctor.appointmentDuration || 30;
    const dailyLimit = doctor.dailyAppointmentLimit || 18;

    // Parse time strings (HH:MM:SS format)
    const parseTime = (timeString) => {
      const [hours, minutes] = timeString.split(':').map(Number);
      return hours * 60 + minutes; // Convert to minutes
    };

    const formatTime = (minutes) => {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
    };

    const startMinutes = parseTime(availableFrom);
    const endMinutes = parseTime(availableTo);

    // Generate all possible time slots
    const allSlots = [];
    for (let current = startMinutes; current < endMinutes; current += appointmentDuration) {
      allSlots.push(formatTime(current));
    }

    // Get existing appointments for this doctor on this date
    const existingAppointments = await Appointment.findAll({
      where: {
        doctorId,
        appointmentDate: date,
        status: {
          [Op.in]: ['pending', 'confirmed', 'completed'],
        },
      },
      attributes: ['appointmentTime', 'status'],
    });

    // Check if daily limit is reached
    if (existingAppointments.length >= dailyLimit) {
      return res.json({
        success: true,
        availableSlots: [],
        isLimitReached: true,
        message: 'Daily appointment limit reached',
      });
    }

    // Extract booked time slots
    const bookedSlots = new Set(existingAppointments.map(apt => apt.appointmentTime));

    // Filter out booked slots
    const availableSlots = allSlots.filter(slot => !bookedSlots.has(slot));

    res.json({
      success: true,
      availableSlots,
      isLimitReached: false,
      totalBooked: existingAppointments.length,
      dailyLimit,
    });
  } catch (error) {
    console.error('Error fetching available slots:', error);
    res.status(500).json({ message: error.message });
  }
};
