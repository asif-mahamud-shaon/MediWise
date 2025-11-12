import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import models from './models/index.js';

import authRoutes from './routes/authRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import prescriptionRoutes from './routes/prescriptionRoutes.js';
import adRoutes from './routes/adRoutes.js';
import departmentRoutes from './routes/departmentRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import userRoutes from './routes/userRoutes.js';
import templateRoutes from './routes/templateRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import jobApplicationRoutes from './routes/jobApplicationRoutes.js';
import staffRoutes from './routes/staffRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';

dotenv.config();

// Verify critical environment variables
if (!process.env.JWT_SECRET) {
  console.warn('⚠️  WARNING: JWT_SECRET is not set in .env file!');
  console.warn('⚠️  Using default JWT_SECRET for development. Please set JWT_SECRET in .env for production!');
  process.env.JWT_SECRET = 'mediwise_dev_secret_key_change_in_production_2024';
}

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/prescriptions', prescriptionRoutes);
app.use('/api/ads', adRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/users', userRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/job-applications', jobApplicationRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/payments', paymentRoutes);

// Serve uploaded files
app.use('/uploads', express.static('uploads'));

app.get('/api/health', (req, res) => {
  res.json({ message: 'MediWise API is running' });
});

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');

    // Sync all models - this will create/update tables to match models
    // Using alter: true to modify existing tables, but first we'll drop and recreate if needed
    const forceSync = process.env.FORCE_SYNC === 'true';
    
    if (forceSync) {
      console.log('Force syncing database (dropping and recreating tables)...');
      await sequelize.sync({ force: true });
    } else {
      await sequelize.sync({ alter: true });
    }
    console.log('✅ Database models synchronized.');

    // Create default admin user
    const adminUser = await models.User.findOne({ where: { email: 'admin@mediwise.com' } });
    if (!adminUser) {
      await models.User.create({
        name: 'Admin User',
        email: 'admin@mediwise.com',
        password: 'admin123',
        role: 'admin',
        phone: '+1234567890',
      });
      console.log('✅ Default admin user created: admin@mediwise.com / admin123');
    } else {
      console.log('ℹ️  Admin user already exists: admin@mediwise.com');
    }

    // Create default departments
    const departments = await models.Department.findAll();
    if (departments.length === 0) {
      await models.Department.bulkCreate([
        { name: 'Cardiology', description: 'Heart and cardiovascular system', icon: '❤️' },
        { name: 'Neurology', description: 'Brain and nervous system', icon: '🧠' },
        { name: 'Orthopedics', description: 'Bones and joints', icon: '🦴' },
        { name: 'Pediatrics', description: 'Children health care', icon: '👶' },
        { name: 'Dermatology', description: 'Skin conditions', icon: '🧴' },
        { name: 'General Medicine', description: 'General health care', icon: '🩺' },
      ]);
      console.log('✅ Default departments created.');
    }
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error.message);
    if (error.original) {
      console.error('❌ Original error:', error.original.message);
    }
    console.error('⚠️  Server will continue running, but database features may not work.');
    console.error('⚠️  Please check:');
    console.error('   1. PostgreSQL is installed and running');
    console.error('   2. Database credentials in .env file are correct');
    console.error('   3. Database "mediwise" exists (or create it)');
    // Don't exit - let the server run even without database
  }
};

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  syncDatabase();
});

export default app;

