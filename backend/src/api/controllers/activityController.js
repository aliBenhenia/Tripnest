const Activity = require('../../models/Activity');

/**
 * @desc    Get all activities
 * @route   GET /api/activities
 * @access  Public
 */
const getActivities = async (req, res) => {
  try {
    // Filter by city if provided
    const filter = {};
    if (req.query.cityId) {
      filter.cityId = req.query.cityId;
    }
    
    // Filter by type/category if provided
    if (req.query.type) {
      filter.type = req.query.type;
    }
    
    const activities = await Activity.find(filter)
      .populate('cityId', 'name slug')
      .sort({ createdAt: -1 });
    
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Get activity by ID
 * @route   GET /api/activities/:id
 * @access  Public
 */
const getActivityById = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id)
      .populate('cityId', 'name slug');
    
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    
    res.json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Create new activity
 * @route   POST /api/activities
 * @access  Private/Admin
 */
const createActivity = async (req, res) => {
  try {
    const activity = new Activity(req.body);
    const createdActivity = await activity.save();
    
    res.status(201).json(createdActivity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * @desc    Update activity
 * @route   PUT /api/activities/:id
 * @access  Private/Admin
 */
const updateActivity = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    
    Object.assign(activity, req.body);
    const updatedActivity = await activity.save();
    
    res.json(updatedActivity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * @desc    Delete activity
 * @route   DELETE /api/activities/:id
 * @access  Private/Admin
 */
const deleteActivity = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    
    await activity.deleteOne();
    res.json({ message: 'Activity removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getActivities,
  getActivityById,
  createActivity,
  updateActivity,
  deleteActivity
}; 