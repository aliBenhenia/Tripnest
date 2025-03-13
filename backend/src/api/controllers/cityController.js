const City = require('../../models/City');

/**
 * @desc    Get all cities
 * @route   GET /api/cities
 * @access  Public
 */
const getCities = async (req, res) => {
  try {
    const cities = await City.find().sort({ name: 1 });
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Get city by slug
 * @route   GET /api/cities/:slug
 * @access  Public
 */
const getCityBySlug = async (req, res) => {
  try {
    const city = await City.findOne({ slug: req.params.slug });
    
    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }
    
    res.json(city);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Create new city
 * @route   POST /api/cities
 * @access  Private/Admin
 */
const createCity = async (req, res) => {
  try {
    const city = new City(req.body);
    const createdCity = await city.save();
    res.status(201).json(createdCity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * @desc    Update city
 * @route   PUT /api/cities/:id
 * @access  Private/Admin
 */
const updateCity = async (req, res) => {
  try {
    const city = await City.findById(req.params.id);
    
    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }
    
    Object.assign(city, req.body);
    const updatedCity = await city.save();
    res.json(updatedCity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * @desc    Delete city
 * @route   DELETE /api/cities/:id
 * @access  Private/Admin
 */
const deleteCity = async (req, res) => {
  try {
    const city = await City.findById(req.params.id);
    
    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }
    
    await city.deleteOne();
    res.json({ message: 'City removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCities,
  getCityBySlug,
  createCity,
  updateCity,
  deleteCity
}; 