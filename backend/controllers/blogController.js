import Blog from '../models/Blog.js';
import User from '../models/User.js';
import { Op } from 'sequelize';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads/blogs';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'blog-' + uniqueSuffix + path.extname(file.originalname));
  },
});

export const uploadBlogImage = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  },
}).single('image');

// Get all blogs (public - only approved)
export const getBlogs = async (req, res) => {
  try {
    const { category, search, limit, offset } = req.query;
    const where = { status: 'approved' };
    
    if (category && category !== 'all') {
      where.category = category;
    }
    
    if (search) {
      where[Op.or] = [
        { title: { [Op.iLike]: `%${search}%` } },
        { excerpt: { [Op.iLike]: `%${search}%` } },
        { content: { [Op.iLike]: `%${search}%` } },
      ];
    }
    
    const queryOptions = {
      where,
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'name', 'email'],
        },
      ],
      order: [['createdAt', 'DESC']],
    };
    
    if (limit) {
      queryOptions.limit = parseInt(limit);
    }
    if (offset) {
      queryOptions.offset = parseInt(offset);
    }
    
    const blogs = await Blog.findAndCountAll(queryOptions);
    
    res.json({
      success: true,
      blogs: blogs.rows,
      total: blogs.count,
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch blogs',
      error: error.message,
    });
  }
};

// Get single blog by ID
export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const blog = await Blog.findByPk(id, {
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found',
      });
    }
    
    // Increment views
    await blog.increment('views');
    
    res.json({
      success: true,
      blog,
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch blog',
      error: error.message,
    });
  }
};

// Create new blog (doctor only)
export const createBlog = async (req, res) => {
  try {
    const { title, excerpt, content, category, tags } = req.body;
    
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: 'Title and content are required',
      });
    }
    
    let imageUrl = null;
    if (req.file) {
      imageUrl = `/uploads/blogs/${req.file.filename}`;
    }
    
    const tagsArray = tags ? (Array.isArray(tags) ? tags : JSON.parse(tags)) : [];
    
    const blog = await Blog.create({
      title,
      excerpt: excerpt || content.substring(0, 200) + '...',
      content,
      category: category || 'Health Tips',
      image: imageUrl,
      tags: tagsArray,
      authorId: req.user.id,
      status: 'pending',
    });
    
    const blogWithAuthor = await Blog.findByPk(blog.id, {
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });
    
    res.status(201).json({
      success: true,
      message: 'Blog submitted successfully. Waiting for admin approval.',
      blog: blogWithAuthor,
    });
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create blog',
      error: error.message,
    });
  }
};

// Update blog (author or admin)
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, excerpt, content, category, tags } = req.body;
    
    const blog = await Blog.findByPk(id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found',
      });
    }
    
    // Check if user is author or admin
    if (blog.authorId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Access denied',
      });
    }
    
    let imageUrl = blog.image;
    if (req.file) {
      // Delete old image if exists
      if (blog.image && fs.existsSync(blog.image.replace('/uploads/', 'uploads/'))) {
        fs.unlinkSync(blog.image.replace('/uploads/', 'uploads/'));
      }
      imageUrl = `/uploads/blogs/${req.file.filename}`;
    }
    
    const tagsArray = tags ? (Array.isArray(tags) ? tags : JSON.parse(tags)) : blog.tags;
    
    await blog.update({
      title: title || blog.title,
      excerpt: excerpt || blog.excerpt,
      content: content || blog.content,
      category: category || blog.category,
      image: imageUrl,
      tags: tagsArray,
      status: req.user.role === 'admin' ? blog.status : 'pending', // Reset to pending if updated by author
    });
    
    const updatedBlog = await Blog.findByPk(id, {
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });
    
    res.json({
      success: true,
      message: 'Blog updated successfully',
      blog: updatedBlog,
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update blog',
      error: error.message,
    });
  }
};

// Delete blog (author or admin)
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    
    const blog = await Blog.findByPk(id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found',
      });
    }
    
    // Check if user is author or admin
    if (blog.authorId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Access denied',
      });
    }
    
    // Delete image if exists
    if (blog.image && fs.existsSync(blog.image.replace('/uploads/', 'uploads/'))) {
      fs.unlinkSync(blog.image.replace('/uploads/', 'uploads/'));
    }
    
    await blog.destroy();
    
    res.json({
      success: true,
      message: 'Blog deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete blog',
      error: error.message,
    });
  }
};

// Get pending blogs (admin only)
export const getPendingBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      where: { status: 'pending' },
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'name', 'email'],
        },
      ],
      order: [['createdAt', 'DESC']],
    });
    
    res.json({
      success: true,
      blogs,
    });
  } catch (error) {
    console.error('Error fetching pending blogs:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch pending blogs',
      error: error.message,
    });
  }
};

// Approve blog (admin only)
export const approveBlog = async (req, res) => {
  try {
    const { id } = req.params;
    
    const blog = await Blog.findByPk(id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found',
      });
    }
    
    await blog.update({
      status: 'approved',
      approvedBy: req.user.id,
      approvedAt: new Date(),
    });
    
    const updatedBlog = await Blog.findByPk(id, {
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });
    
    res.json({
      success: true,
      message: 'Blog approved successfully',
      blog: updatedBlog,
    });
  } catch (error) {
    console.error('Error approving blog:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to approve blog',
      error: error.message,
    });
  }
};

// Reject blog (admin only)
export const rejectBlog = async (req, res) => {
  try {
    const { id } = req.params;
    
    const blog = await Blog.findByPk(id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found',
      });
    }
    
    await blog.update({
      status: 'rejected',
      approvedBy: req.user.id,
      approvedAt: new Date(),
    });
    
    res.json({
      success: true,
      message: 'Blog rejected successfully',
    });
  } catch (error) {
    console.error('Error rejecting blog:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to reject blog',
      error: error.message,
    });
  }
};

// Get my blogs (doctor)
export const getMyBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      where: { authorId: req.user.id },
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'name', 'email'],
        },
      ],
      order: [['createdAt', 'DESC']],
    });
    
    res.json({
      success: true,
      blogs,
    });
  } catch (error) {
    console.error('Error fetching my blogs:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch blogs',
      error: error.message,
    });
  }
};

