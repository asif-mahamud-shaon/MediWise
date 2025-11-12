import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';
import Department from './Department.js';

const Doctor = sequelize.define('Doctor', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
    unique: true,
  },
  departmentId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Department,
      key: 'id',
    },
  },
  specialization: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  experience: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  qualification: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  consultationFee: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    defaultValue: 0,
  },
  availableFrom: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  availableTo: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  availableDays: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: [],
    comment: 'Array of available days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]',
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  dailyAppointmentLimit: {
    type: DataTypes.INTEGER,
    defaultValue: 18,
    allowNull: false,
  },
  appointmentDuration: {
    type: DataTypes.INTEGER,
    defaultValue: 30,
    comment: 'Appointment duration in minutes',
  },
  status: {
    type: DataTypes.ENUM('pending', 'approved', 'rejected'),
    defaultValue: 'pending',
    allowNull: false,
  },
  cvResume: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Base64 encoded CV/Resume file content',
  },
  cvResumeFileName: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Original filename of CV/Resume',
  },
  cvResumeMimeType: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'MIME type of CV/Resume file (e.g., application/pdf)',
  },
  profileImage: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Base64 encoded profile image',
  },
  profileImageMimeType: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'MIME type of profile image (e.g., image/jpeg, image/png)',
  },
  previousJobs: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: [],
    comment: 'Array of previous job positions',
  },
  education: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: [],
    comment: 'Array of educational qualifications',
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Admin notes for approval/rejection',
  },
}, {
  tableName: 'doctors',
  timestamps: true,
});

Doctor.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Doctor.belongsTo(Department, { foreignKey: 'departmentId', as: 'department' });

export default Doctor;
