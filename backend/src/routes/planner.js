// planner.js
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { protect, restrictTo, rateLimiter } = require('../middleware/authMiddleware');


// Trip Schema
const tripSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dates: { type: String, required: true },
  destinations: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { 
    type: String, 
    enum: ['planning', 'confirmed', 'in-progress'], 
    default: 'planning' 
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Packing Item Schema
const packingItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  packed: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true }
});

// Expense Schema
const expenseSchema = new mongoose.Schema({
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true }
});

// Companion Schema
const companionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  sharedExpenses: { type: Number, default: 0 },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true }
});

// Document Schema
const documentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  date: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true }
});

// Activity Schema
const activitySchema = new mongoose.Schema({
  time: { type: String, required: true },
  activity: { type: String, required: true },
  notes: { type: String, default: '' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  day: { type: Number, required: true },
  tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true }
});

// Model definitions
const Trip = mongoose.model('Trip', tripSchema);
const PackingItem = mongoose.model('PackingItem', packingItemSchema);
const Expense = mongoose.model('Expense', expenseSchema);
const Companion = mongoose.model('Companion', companionSchema);
const Document = mongoose.model('Document', documentSchema);
const Activity = mongoose.model('Activity', activitySchema);


// Middleware to protect routes
router.use(protect);

// Trip Controllers
router.get('/trips', async (req, res) => {
  try {
    const trips = await Trip.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/trips', async (req, res) => {
  try {
    const trip = new Trip({
      ...req.body,
      userId: req.user.id
    });
    const savedTrip = await trip.save();
    res.status(201).json(savedTrip);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/trips/:id', async (req, res) => {
  try {
    const updatedTrip = await Trip.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );
    if (!updatedTrip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.json(updatedTrip);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/trips/:id', async (req, res) => {
  try {
    const deletedTrip = await Trip.findByIdAndDelete(req.params.id);
    if (!deletedTrip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.json({ message: 'Trip deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Packing Items Controllers
router.get('/trips/:tripId/packing-items', async (req, res) => {
  try {
    const items = await PackingItem.find({ tripId: req.params.tripId });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/trips/:tripId/packing-items', async (req, res) => {
  try {
    const item = new PackingItem({
      ...req.body,
      tripId: req.params.tripId
    });
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/packing-items/:id', async (req, res) => {
  try {
    const updatedItem = await PackingItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: 'Packing item not found' });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/packing-items/:id', async (req, res) => {
  try {
    const deletedItem = await PackingItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Packing item not found' });
    }
    res.json({ message: 'Packing item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Expenses Controllers
router.get('/trips/:tripId/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find({ tripId: req.params.tripId });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/trips/:tripId/expenses', async (req, res) => {
  try {
    const expense = new Expense({
      ...req.body,
      tripId: req.params.tripId
    });
    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/expenses/:id', async (req, res) => {
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.json(updatedExpense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/expenses/:id', async (req, res) => {
  try {
    const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
    if (!deletedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Companions Controllers
router.get('/trips/:tripId/companions', async (req, res) => {
  try {
    const companions = await Companion.find({ tripId: req.params.tripId });
    res.json(companions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/trips/:tripId/companions', async (req, res) => {
  try {
    const companion = new Companion({
      ...req.body,
      tripId: req.params.tripId
    });
    const savedCompanion = await companion.save();
    res.status(201).json(savedCompanion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/companions/:id', async (req, res) => {
  try {
    const updatedCompanion = await Companion.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCompanion) {
      return res.status(404).json({ message: 'Companion not found' });
    }
    res.json(updatedCompanion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/companions/:id', async (req, res) => {
  try {
    const deletedCompanion = await Companion.findByIdAndDelete(req.params.id);
    if (!deletedCompanion) {
      return res.status(404).json({ message: 'Companion not found' });
    }
    res.json({ message: 'Companion deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Documents Controllers
router.get('/trips/:tripId/documents', async (req, res) => {
  try {
    const documents = await Document.find({ tripId: req.params.tripId });
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/trips/:tripId/documents', async (req, res) => {
  try {
    const document = new Document({
      ...req.body,
      tripId: req.params.tripId,
      date: req.body.date || new Date()
    });
    const savedDocument = await document.save();
    res.status(201).json(savedDocument);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/documents/:id', async (req, res) => {
  try {
    const deletedDocument = await Document.findByIdAndDelete(req.params.id);
    if (!deletedDocument) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Activities Controllers
router.get('/trips/:tripId/activities', async (req, res) => {
  try {
    const activities = await Activity.find({ tripId: req.params.tripId }).sort({ day: 1 });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/trips/:tripId/activities', async (req, res) => {
  try {
    const activity = new Activity({
      ...req.body,
      tripId: req.params.tripId
    });
    const savedActivity = await activity.save();
    res.status(201).json(savedActivity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/activities/:id', async (req, res) => {
  try {
    const updatedActivity = await Activity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedActivity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.json(updatedActivity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/activities/:id', async (req, res) => {
  try {
    const deletedActivity = await Activity.findByIdAndDelete(req.params.id);
    if (!deletedActivity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.json({ message: 'Activity deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;