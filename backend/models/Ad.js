import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Department from './Department.js';

const Ad = sequelize.define('Ad', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  imageUrl: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  link: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  targetAudience: {
    type: DataTypes.ENUM('all', 'patient', 'doctor'),
    defaultValue: 'all',
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  clickCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  departmentId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: 'departments',
      key: 'id',
    },
  },
  medicineName: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  indications: {
    type: DataTypes.STRING(500),
    allowNull: true,
    comment: 'Diseases/conditions this medicine helps with (e.g., Hypertension, Heart Disease, Angina)',
  },
  isNewMedicine: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  tableName: 'ads',
  timestamps: true,
});

// Associations
Ad.belongsTo(Department, { foreignKey: 'departmentId', as: 'department' });

export default Ad;

