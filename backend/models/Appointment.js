import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';
import Doctor from './Doctor.js';

const Appointment = sequelize.define('Appointment', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  patientId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  doctorId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Doctor,
      key: 'id',
    },
  },
  appointmentDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  appointmentTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'completed', 'cancelled'),
    defaultValue: 'pending',
  },
  reason: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  consultationFee: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    comment: 'Consultation fee charged',
  },
  doctorShare: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    comment: 'Doctor share (70% of fee)',
  },
  companyShare: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    comment: 'Company share (30% of fee)',
  },
  feePaid: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    comment: 'Whether the fee has been paid',
  },
  paymentId: {
    type: DataTypes.UUID,
    allowNull: true,
    comment: 'Reference to payment record',
  },
}, {
  tableName: 'appointments',
  timestamps: true,
});

Appointment.belongsTo(User, { foreignKey: 'patientId', as: 'patient' });
Appointment.belongsTo(Doctor, { foreignKey: 'doctorId', as: 'doctor' });

export default Appointment;

