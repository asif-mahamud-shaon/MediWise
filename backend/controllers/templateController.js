import PrescriptionTemplate from '../models/PrescriptionTemplate.js';
import Doctor from '../models/Doctor.js';

// Save template
export const saveTemplate = async (req, res) => {
  try {
    const { name, diagnosis, medicines, tests, rules, instructions, advice, followUp } = req.body;

    const doctor = await Doctor.findOne({ where: { userId: req.user.id } });
    if (!doctor) {
      return res.status(403).json({ message: 'Only doctors can save templates' });
    }

    const template = await PrescriptionTemplate.create({
      doctorId: doctor.id,
      name: name || 'Untitled Template',
      diagnosis,
      medicines,
      tests,
      rules,
      instructions,
      advice,
      followUp,
    });

    res.status(201).json({
      success: true,
      template,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all templates for doctor
export const getTemplates = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ where: { userId: req.user.id } });
    if (!doctor) {
      return res.status(403).json({ message: 'Only doctors can view templates' });
    }

    const templates = await PrescriptionTemplate.findAll({
      where: { doctorId: doctor.id },
      order: [['updatedAt', 'DESC']],
    });

    res.json({
      success: true,
      templates,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single template
export const getTemplate = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findOne({ where: { userId: req.user.id } });
    if (!doctor) {
      return res.status(403).json({ message: 'Only doctors can view templates' });
    }

    const template = await PrescriptionTemplate.findOne({
      where: { id, doctorId: doctor.id },
    });

    if (!template) {
      return res.status(404).json({ message: 'Template not found' });
    }

    res.json({
      success: true,
      template,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update template
export const updateTemplate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, diagnosis, medicines, tests, rules, instructions, advice, followUp } = req.body;

    const doctor = await Doctor.findOne({ where: { userId: req.user.id } });
    if (!doctor) {
      return res.status(403).json({ message: 'Only doctors can update templates' });
    }

    const template = await PrescriptionTemplate.findOne({
      where: { id, doctorId: doctor.id },
    });

    if (!template) {
      return res.status(404).json({ message: 'Template not found' });
    }

    await template.update({
      name: name || template.name,
      diagnosis,
      medicines,
      tests,
      rules,
      instructions,
      advice,
      followUp,
    });

    res.json({
      success: true,
      template,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete template
export const deleteTemplate = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findOne({ where: { userId: req.user.id } });
    if (!doctor) {
      return res.status(403).json({ message: 'Only doctors can delete templates' });
    }

    const template = await PrescriptionTemplate.findOne({
      where: { id, doctorId: doctor.id },
    });

    if (!template) {
      return res.status(404).json({ message: 'Template not found' });
    }

    await template.destroy();

    res.json({
      success: true,
      message: 'Template deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};









