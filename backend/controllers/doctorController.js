import { Op } from 'sequelize';
import multer from 'multer';
import Doctor from '../models/Doctor.js';
import User from '../models/User.js';
import Department from '../models/Department.js';
import Review from '../models/Review.js';
import { enrichDoctorWithBengali } from '../utils/translation.js';

export const getDoctors = async (req, res) => {
  try {
    const { departmentId, cursor, limit = 10, status } = req.query;
    
    // Build where clause properly
    const whereClause = { isAvailable: true };
    
    // Filter by status if provided (for public view, only show approved doctors)
    if (status) {
      whereClause.status = status;
    }

    // Filter by department if provided
    if (departmentId) {
      whereClause.departmentId = departmentId;
      console.log('Filtering by departmentId:', departmentId);
    }

    // Add cursor filter if provided (for pagination)
    if (cursor) {
      whereClause.id = {
        [Op.lt]: cursor,
      };
    }

    console.log('Where clause:', JSON.stringify(whereClause, null, 2));

    const queryOptions = {
      where: whereClause,
      include: [
        { model: User, as: 'user', attributes: ['id', 'name', 'email', 'phone'] },
        { model: Department, as: 'department' },
      ],
      limit: parseInt(limit) + 1,
      order: [['createdAt', 'DESC']],
    };

    const doctors = await Doctor.findAll(queryOptions);
    console.log(`Found ${doctors.length} doctors with departmentId filter`);

    const hasMore = doctors.length > limit;
    if (hasMore) {
      doctors.pop();
    }

    const nextCursor = hasMore ? doctors[doctors.length - 1].id : null;

    res.json({
      success: true,
      doctors,
      pagination: {
        hasMore,
        nextCursor,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;

    const doctor = await Doctor.findByPk(id, {
      include: [
        { model: User, as: 'user', attributes: ['id', 'name', 'email', 'phone', 'dateOfBirth'] },
        { model: Department, as: 'department' },
      ],
    });

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    const reviews = await Review.findAll({
      where: { doctorId: id },
      include: [{ model: User, as: 'patient', attributes: ['id', 'name'] }],
      order: [['createdAt', 'DESC']],
    });

    const avgRating = await Review.findAll({
      where: { doctorId: id },
      attributes: [
        [Review.sequelize.fn('AVG', Review.sequelize.col('rating')), 'avgRating'],
        [Review.sequelize.fn('COUNT', Review.sequelize.col('id')), 'totalReviews'],
      ],
      raw: true,
    });

    res.json({
      success: true,
      doctor,
      reviews,
      rating: avgRating[0] || { avgRating: 0, totalReviews: 0 },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createDoctor = async (req, res) => {
  try {
    const {
      userId,
      departmentId,
      specialization,
      experience,
      qualification,
      bio,
      consultationFee,
      availableFrom,
      availableTo,
    } = req.body;

    const doctor = await Doctor.create({
      userId,
      departmentId,
      specialization,
      experience,
      qualification,
      bio,
      consultationFee,
      availableFrom,
      availableTo,
    });

    const doctorWithDetails = await Doctor.findByPk(doctor.id, {
      include: [
        { model: User, as: 'user' },
        { model: Department, as: 'department' },
      ],
    });

    res.status(201).json({
      success: true,
      doctor: doctorWithDetails,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const { removeProfileImage } = req.body;
    const doctor = await Doctor.findByPk(id);

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    const updateData = { ...req.body };

    // Parse availableDays if it's a JSON string
    if (updateData.availableDays && typeof updateData.availableDays === 'string') {
      try {
        updateData.availableDays = JSON.parse(updateData.availableDays);
      } catch (e) {
        console.error('Error parsing availableDays:', e);
        // If parsing fails, try to set it as an array
        updateData.availableDays = [];
      }
    }

    // Handle profile image upload if present
    if (req.file && req.file.fieldname === 'profileImage') {
      const base64Image = req.file.buffer.toString('base64');
      updateData.profileImage = base64Image;
      updateData.profileImageMimeType = req.file.mimetype;
    }

    // Handle profile image removal
    if (removeProfileImage === 'true' || removeProfileImage === true) {
      updateData.profileImage = null;
      updateData.profileImageMimeType = null;
    }

    // Remove removeProfileImage from updateData to avoid storing it
    delete updateData.removeProfileImage;

    await doctor.update(updateData);

    // Auto-enrich with Bengali if needed
    const updatedDoctor = await Doctor.findByPk(id, {
      include: [
        { model: User, as: 'user' },
        { model: Department, as: 'department' },
      ],
    });

    const enrichedDoctor = await enrichDoctorWithBengali(updatedDoctor);
    await enrichedDoctor.save();

    res.json({
      success: true,
      doctor: enrichedDoctor,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Multer middleware for CV upload
const storage = multer.memoryStorage();

export const uploadCV = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /pdf|doc|docx/;
    const extname = allowedTypes.test(file.originalname.toLowerCase().split('.').pop());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed'));
    }
  },
}).single('cvResume');

// Multer middleware for profile image upload
export const uploadProfileImage = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(file.originalname.toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only JPEG, JPG, PNG, and GIF images are allowed'));
    }
  },
}).single('profileImage');

// Search doctors
export const searchDoctors = async (req, res) => {
  try {
    const { q, departmentId, specialization } = req.query;
    const queryOptions = {
      where: { isAvailable: true, status: 'approved' },
      include: [
        { model: User, as: 'user', attributes: ['id', 'name', 'email', 'phone'] },
        { model: Department, as: 'department' },
      ],
    };

    if (departmentId) {
      queryOptions.where.departmentId = departmentId;
    }

    if (specialization) {
      queryOptions.where.specialization = {
        [Op.iLike]: `%${specialization}%`,
      };
    }

    if (q) {
      queryOptions.include[0].where = {
        [Op.or]: [
          { name: { [Op.iLike]: `%${q}%` } },
          { email: { [Op.iLike]: `%${q}%` } },
        ],
      };
    }

    const doctors = await Doctor.findAll(queryOptions);

    res.json({
      success: true,
      doctors,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Complete doctor profile
export const completeDoctorProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const {
      departmentId,
      specialization,
      experience,
      qualification,
      bio,
      consultationFee,
      availableFrom,
      availableTo,
      availableDays,
      previousJobs,
      education,
      qualificationBn,
      specializationBn,
      previousJobsBn,
    } = req.body;

    // Check if doctor profile already exists
    let doctor = await Doctor.findOne({ where: { userId } });

    const doctorData = {
      departmentId,
      specialization,
      experience: parseInt(experience) || 0,
      qualification,
      bio,
      consultationFee: parseFloat(consultationFee) || 0,
      availableFrom,
      availableTo,
      availableDays: availableDays || [],
      previousJobs: previousJobs || [],
      education: education || [],
      qualificationBn,
      specializationBn,
      previousJobsBn,
    };

    // Handle CV upload if present
    if (req.file && req.file.fieldname === 'cvResume') {
      const base64CV = req.file.buffer.toString('base64');
      doctorData.cvResume = base64CV;
      doctorData.cvResumeFileName = req.file.originalname;
      doctorData.cvResumeMimeType = req.file.mimetype;
    }

    if (doctor) {
      await doctor.update(doctorData);
    } else {
      doctorData.userId = userId;
      doctor = await Doctor.create(doctorData);
    }

    // Auto-enrich with Bengali if needed
    const updatedDoctor = await Doctor.findByPk(doctor.id, {
      include: [
        { model: User, as: 'user' },
        { model: Department, as: 'department' },
      ],
    });

    const enrichedDoctor = await enrichDoctorWithBengali(updatedDoctor);
    await enrichedDoctor.save();

    res.json({
      success: true,
      doctor: enrichedDoctor,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get doctor profile
export const getDoctorProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const doctor = await Doctor.findOne({
      where: { userId },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Department, as: 'department' },
      ],
    });

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor profile not found' });
    }

    // Auto-enrich with Bengali if needed
    const enrichedDoctor = await enrichDoctorWithBengali(doctor);

    res.json({
      success: true,
      doctor: enrichedDoctor,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get pending doctors (admin only)
export const getPendingDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.findAll({
      where: { status: 'pending' },
      include: [
        { model: User, as: 'user', attributes: ['id', 'name', 'email', 'phone'] },
        { model: Department, as: 'department' },
      ],
      order: [['createdAt', 'DESC']],
    });

    res.json({
      success: true,
      doctors,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get approved doctors (admin only)
export const getApprovedDoctors = async (req, res) => {
  try {
    const { limit = 100 } = req.query;
    const doctors = await Doctor.findAll({
      where: { status: 'approved' },
      include: [
        { model: User, as: 'user', attributes: ['id', 'name', 'email', 'phone'] },
        { model: Department, as: 'department' },
      ],
      order: [['createdAt', 'DESC']],
      limit: parseInt(limit),
    });

    res.json({
      success: true,
      doctors,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Approve doctor (admin only)
export const approveDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const { notes } = req.body;

    const doctor = await Doctor.findByPk(id, {
      include: [
        { model: User, as: 'user' },
        { model: Department, as: 'department' },
      ],
    });

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    await doctor.update({
      status: 'approved',
      notes: notes || null,
    });

    res.json({
      success: true,
      message: 'Doctor approved successfully',
      doctor,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Reject doctor (admin only)
export const rejectDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const { notes } = req.body;

    if (!notes || !notes.trim()) {
      return res.status(400).json({ message: 'Rejection reason is required' });
    }

    const doctor = await Doctor.findByPk(id, {
      include: [
        { model: User, as: 'user' },
        { model: Department, as: 'department' },
      ],
    });

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    await doctor.update({
      status: 'rejected',
      notes: notes,
    });

    res.json({
      success: true,
      message: 'Doctor application rejected',
      doctor,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get doctor CV
export const getDoctorCV = async (req, res) => {
  try {
    const { id } = req.params;

    const doctor = await Doctor.findByPk(id, {
      attributes: ['id', 'cvResume', 'cvResumeFileName', 'cvResumeMimeType'],
    });

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    if (!doctor.cvResume) {
      return res.status(404).json({ message: 'CV not found' });
    }

    const buffer = Buffer.from(doctor.cvResume, 'base64');

    res.setHeader('Content-Type', doctor.cvResumeMimeType || 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${doctor.cvResumeFileName || 'cv.pdf'}"`);
    res.send(buffer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
