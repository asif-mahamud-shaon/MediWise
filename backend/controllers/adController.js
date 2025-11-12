import { Op } from 'sequelize';
import Ad from '../models/Ad.js';
import Department from '../models/Department.js';

export const getAds = async (req, res) => {
  try {
    const { cursor, limit = 10, targetAudience, departmentId, isNewMedicine, includeInactive } = req.query;
    
    // Check if user is admin and wants to see all ads (including inactive)
    const isAdmin = req.user && req.user.role === 'admin';
    const showAll = includeInactive === 'true' || isAdmin;

    // Build where conditions properly
    const whereConditions = {
      [Op.and]: [],
    };

    // Only filter by targetAudience if not admin or if targetAudience is specified
    if (!isAdmin && targetAudience) {
      whereConditions[Op.and].push({
        [Op.or]: [
          { targetAudience: 'all' },
          { targetAudience: targetAudience },
        ],
      });
    } else if (!isAdmin) {
      // For non-admin, default to all target audiences
      whereConditions[Op.and].push({
        [Op.or]: [
          { targetAudience: 'all' },
          { targetAudience: 'doctor' },
          { targetAudience: 'patient' },
        ],
      });
    }

    // Only filter by isActive if not showing all ads
    if (!showAll) {
      whereConditions[Op.and].push({
        isActive: true,
      });
    }

    // Filter by department if provided
    if (departmentId) {
      whereConditions[Op.and].push({
        [Op.or]: [
          { departmentId: departmentId },
          { departmentId: null }, // Include ads with no specific department
        ],
      });
    }

    // Filter by medicine type (new or old)
    if (isNewMedicine !== undefined) {
      whereConditions[Op.and].push({
        isNewMedicine: isNewMedicine === 'true',
      });
    }

    // Add cursor filter if provided
    if (cursor) {
      whereConditions[Op.and].push({
        id: {
          [Op.lt]: cursor,
        },
      });
    }

    const queryOptions = {
      include: [
        { model: Department, as: 'department', attributes: ['id', 'name'], required: false },
      ],
      limit: Math.min((parseInt(limit) || 1000) + 1, 10001), // Cap at 10000
      order: [['createdAt', 'DESC']],
    };

    // Only add where clause if there are conditions
    if (whereConditions[Op.and].length > 0) {
      queryOptions.where = whereConditions;
    }

    console.log('Query options:', JSON.stringify(queryOptions, null, 2));
    console.log('Is Admin:', isAdmin);
    console.log('Show All:', showAll);
    
    const ads = await Ad.findAll(queryOptions);

    console.log(`Found ${ads.length} ads matching criteria`);

    const limitNum = parseInt(limit) || 1000;
    const hasMore = ads.length > limitNum;
    const resultAds = hasMore ? ads.slice(0, limitNum) : ads;
    const nextCursor = hasMore ? resultAds[resultAds.length - 1].id : null;

    console.log(`Returning ${resultAds.length} ads`);

    res.json({
      success: true,
      ads: resultAds,
      pagination: {
        hasMore,
        nextCursor,
      },
    });
  } catch (error) {
    console.error('Error fetching ads:', error);
    res.status(500).json({ 
      success: false,
      message: error.message || 'Failed to fetch ads',
      ads: [] 
    });
  }
};

export const createAd = async (req, res) => {
  try {
    console.log('Creating ad with data:', req.body);
    const ad = await Ad.create(req.body);

    const adWithDepartment = await Ad.findByPk(ad.id, {
      include: [
        { model: Department, as: 'department', attributes: ['id', 'name'], required: false },
      ],
    });

    res.status(201).json({
      success: true,
      ad: adWithDepartment,
    });
  } catch (error) {
    console.error('Error creating ad:', error);
    res.status(500).json({ message: error.message });
  }
};

export const updateAd = async (req, res) => {
  try {
    const { id } = req.params;
    const ad = await Ad.findByPk(id);

    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }

    await ad.update(req.body);

    res.json({
      success: true,
      ad,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteAd = async (req, res) => {
  try {
    const { id } = req.params;
    const ad = await Ad.findByPk(id);

    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }

    await ad.destroy();

    res.json({
      success: true,
      message: 'Ad deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const incrementAdClick = async (req, res) => {
  try {
    const { id } = req.params;
    const ad = await Ad.findByPk(id);

    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }

    await ad.increment('clickCount');

    res.json({
      success: true,
      message: 'Click counted',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

