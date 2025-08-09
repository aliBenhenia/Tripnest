const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// Trip Stop Schema
const tripStopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: String, required: true },
  images: [{ type: String }],
  category: { type: String, enum: ['Sightseeing', 'Historical', 'Relaxation'], required: true },
  rating: { type: Number, default: 4.5 },
  duration: { type: String, default: '2 hours' },
  location: { type: String, default: 'Unknown Location' }
}, { timestamps: true });

const TripStop = mongoose.model('TripStop', tripStopSchema);

// Middleware: only authenticated users
router.use(protect);

// Controller
const tripController = {
  // ✅ Only get trips for the logged-in user
  getAllStops: async (req, res) => {
    try {
      const stops = await TripStop.find({ userId: req.user.id })
        .populate('userId', 'name email');
      res.json(stops);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // ✅ Get single stop but ensure it belongs to user
  getStopById: async (req, res) => {
    try {
      const stop = await TripStop.findOne({ _id: req.params.id, userId: req.user.id })
        .populate('userId', 'name email');
      if (!stop) return res.status(404).json({ message: 'Stop not found' });
      res.json(stop);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createStop: async (req, res) => {
    try {
      const stop = new TripStop({
        name: req.body.name,
        userId: req.user.id, // ✅ Always from token
        description: req.body.description,
        images: req.body.images || [],
        category: req.body.category,
        rating: req.body.rating || 4.5,
        duration: req.body.duration || '2 hours',
        location: req.body.location || 'Unknown Location'
      });

      const newStop = await stop.save();
      res.status(201).json(newStop);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateStop: async (req, res) => {
    try {
      const stop = await TripStop.findOne({ _id: req.params.id, userId: req.user.id });
      if (!stop) return res.status(404).json({ message: 'Stop not found or not yours' });

      stop.name = req.body.name ?? stop.name;
      stop.description = req.body.description ?? stop.description;
      stop.images = req.body.images ?? stop.images;
      stop.category = req.body.category ?? stop.category;
      stop.rating = req.body.rating ?? stop.rating;
      stop.duration = req.body.duration ?? stop.duration;
      stop.location = req.body.location ?? stop.location;

      const updatedStop = await stop.save();
      res.json(updatedStop);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteStop: async (req, res) => {
    try {
      const stop = await TripStop.findOne({ _id: req.params.id, userId: req.user.id });
      if (!stop) return res.status(404).json({ message: 'Stop not found or not yours' });

      await stop.deleteOne();
      res.json({ message: 'Stop deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

// Routes
router.get('/', tripController.getAllStops);
router.get('/:id', tripController.getStopById);
router.post('/', tripController.createStop);
router.put('/:id', tripController.updateStop);
router.delete('/:id', tripController.deleteStop);

module.exports = router;
