import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';
import Doctor from './Doctor.js';
import Appointment from './Appointment.js';

const Prescription = sequelize.define('Prescription', {
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
  appointmentId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: Appointment,
      key: 'id',
    },
  },
  diagnosis: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  medicines: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: [],
  },
  instructions: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  prescriptionFile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  prescriptionDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'prescriptions',
  timestamps: true,
});

Prescription.belongsTo(User, { foreignKey: 'patientId', as: 'patient' });
Prescription.belongsTo(Doctor, { foreignKey: 'doctorId', as: 'doctor' });
Prescription.belongsTo(Appointment, { foreignKey: 'appointmentId', as: 'appointment' });

export default Prescription;

