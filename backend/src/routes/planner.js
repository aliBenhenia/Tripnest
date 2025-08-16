// server.js
const express = require('express');
const mongoose = require('mongoose');
const { protect } = require('../middleware/authMiddleware');

// Trip Schema
const tripSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dates: { type: String, required: true },
  destinations: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
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
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
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
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true }
});

// Document Schema
const documentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  date: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true }
});

// Activity Schema
const activitySchema = new mongoose.Schema({
  time: { type: String, required: true },
  activity: { type: String, required: true },
  notes: { type: String, default: '' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  day: { type: Number, required: true },
  tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true }
});

// Models
const Trip = mongoose.model('Trip', tripSchema);
const PackingItem = mongoose.model('PackingItem', packingItemSchema);
const Expense = mongoose.model('Expense', expenseSchema);
const Companion = mongoose.model('Companion', companionSchema);
const Document = mongoose.model('Document', documentSchema);
const Activity = mongoose.model('Activity', activitySchema);

// Middleware to extract userId from request (assuming you have authentication middleware)
const getUserId = (req) => {
  // This should be replaced with your actual authentication logic
  // For example, if you're using JWT tokens:
  // return req.user.id;
  return req.user.id
  // return req.body.userId || req.query.userId || (req.headers.authorization ? req.headers.authorization.split(' ')[1] : null);
};

// API Routes
const router = express.Router();

// Protect all routes
router.use(protect);

// Trip Routes
router.get('/trips', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      console.log('User ID is required');
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    const trips = await Trip.find({ userId: userId }).sort({ createdAt: -1 });
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/trips', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    const trip = new Trip({
      ...req.body,
      userId: userId
    });
    const savedTrip = await trip.save();
    res.status(201).json(savedTrip);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/trips/:id', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    const updatedTrip = await Trip.findOneAndUpdate(
      { _id: req.params.id, userId: userId },
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );
    
    if (!updatedTrip) {
      return res.status(404).json({ message: 'Trip not found or unauthorized' });
    }
    res.json(updatedTrip);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/trips/:id', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    const deletedTrip = await Trip.findOneAndDelete({
      _id: req.params.id,
      userId: userId
    });
    
    if (!deletedTrip) {
      return res.status(404).json({ message: 'Trip not found or unauthorized' });
    }
    
    // Delete related data
    await Promise.all([
      PackingItem.deleteMany({ tripId: req.params.id, userId: userId }),
      Expense.deleteMany({ tripId: req.params.id, userId: userId }),
      Companion.deleteMany({ tripId: req.params.id, userId: userId }),
      Document.deleteMany({ tripId: req.params.id, userId: userId }),
      Activity.deleteMany({ tripId: req.params.id, userId: userId })
    ]);
    
    res.json({ message: 'Trip deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Packing Items Routes
router.get('/trips/:tripId/packing-items', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    // Verify trip belongs to user
    const trip = await Trip.findOne({ _id: req.params.tripId, userId: userId });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found or unauthorized' });
    }
    
    const items = await PackingItem.find({ 
      tripId: req.params.tripId, 
      userId: userId 
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/trips/:tripId/packing-items', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    // Verify trip belongs to user
    const trip = await Trip.findOne({ _id: req.params.tripId, userId: userId });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found or unauthorized' });
    }
    
    const item = new PackingItem({
      ...req.body,
      tripId: req.params.tripId,
      userId: userId
    });
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/packing-items/:id', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    const updatedItem = await PackingItem.findOneAndUpdate(
      { _id: req.params.id, userId: userId },
      req.body,
      { new: true }
    );
    
    if (!updatedItem) {
      return res.status(404).json({ message: 'Packing item not found or unauthorized' });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/packing-items/:id', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    const deletedItem = await PackingItem.findOneAndDelete({
      _id: req.params.id,
      userId: userId
    });
    
    if (!deletedItem) {
      return res.status(404).json({ message: 'Packing item not found or unauthorized' });
    }
    res.json({ message: 'Packing item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Expenses Routes
router.get('/trips/:tripId/expenses', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    // Verify trip belongs to user
    const trip = await Trip.findOne({ _id: req.params.tripId, userId: userId });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found or unauthorized' });
    }
    
    const expenses = await Expense.find({ 
      tripId: req.params.tripId, 
      userId: userId 
    });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/trips/:tripId/expenses', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    // Verify trip belongs to user
    const trip = await Trip.findOne({ _id: req.params.tripId, userId: userId });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found or unauthorized' });
    }
    
    const expense = new Expense({
      ...req.body,
      tripId: req.params.tripId,
      userId: userId
    });
    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/expenses/:id', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    const updatedExpense = await Expense.findOneAndUpdate(
      { _id: req.params.id, userId: userId },
      req.body,
      { new: true }
    );
    
    if (!updatedExpense) {
      return res.status(404).json({ message: 'Expense not found or unauthorized' });
    }
    res.json(updatedExpense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/expenses/:id', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    const deletedExpense = await Expense.findOneAndDelete({
      _id: req.params.id,
      userId: userId
    });
    
    if (!deletedExpense) {
      return res.status(404).json({ message: 'Expense not found or unauthorized' });
    }
    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Companions Routes
router.get('/trips/:tripId/companions', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    // Verify trip belongs to user
    const trip = await Trip.findOne({ _id: req.params.tripId, userId: userId });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found or unauthorized' });
    }
    
    const companions = await Companion.find({ 
      tripId: req.params.tripId, 
      userId: userId 
    });
    res.json(companions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/trips/:tripId/companions', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    // Verify trip belongs to user
    const trip = await Trip.findOne({ _id: req.params.tripId, userId: userId });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found or unauthorized' });
    }
    
    const companion = new Companion({
      ...req.body,
      tripId: req.params.tripId,
      userId: userId
    });
    const savedCompanion = await companion.save();
    res.status(201).json(savedCompanion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/companions/:id', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    const updatedCompanion = await Companion.findOneAndUpdate(
      { _id: req.params.id, userId: userId },
      req.body,
      { new: true }
    );
    
    if (!updatedCompanion) {
      return res.status(404).json({ message: 'Companion not found or unauthorized' });
    }
    res.json(updatedCompanion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/companions/:id', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    const deletedCompanion = await Companion.findOneAndDelete({
      _id: req.params.id,
      userId: userId
    });
    
    if (!deletedCompanion) {
      return res.status(404).json({ message: 'Companion not found or unauthorized' });
    }
    res.json({ message: 'Companion deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Documents Routes
router.get('/trips/:tripId/documents', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    // Verify trip belongs to user
    const trip = await Trip.findOne({ _id: req.params.tripId, userId: userId });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found or unauthorized' });
    }
    
    const documents = await Document.find({ 
      tripId: req.params.tripId, 
      userId: userId 
    });
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/trips/:tripId/documents', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    // Verify trip belongs to user
    const trip = await Trip.findOne({ _id: req.params.tripId, userId: userId });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found or unauthorized' });
    }
    
    const document = new Document({
      ...req.body,
      tripId: req.params.tripId,
      userId: userId,
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
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    const deletedDocument = await Document.findOneAndDelete({
      _id: req.params.id,
      userId: userId
    });
    
    if (!deletedDocument) {
      return res.status(404).json({ message: 'Document not found or unauthorized' });
    }
    res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Activities Routes
router.get('/trips/:tripId/activities', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    // Verify trip belongs to user
    const trip = await Trip.findOne({ _id: req.params.tripId, userId: userId });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found or unauthorized' });
    }
    
    const activities = await Activity.find({ 
      tripId: req.params.tripId, 
      userId: userId 
    }).sort({ day: 1 });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/trips/:tripId/activities', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    // Verify trip belongs to user
    const trip = await Trip.findOne({ _id: req.params.tripId, userId: userId });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found or unauthorized' });
    }
    
    const activity = new Activity({
      ...req.body,
      tripId: req.params.tripId,
      userId: userId
    });
    const savedActivity = await activity.save();
    res.status(201).json(savedActivity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/activities/:id', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    const updatedActivity = await Activity.findOneAndUpdate(
      { _id: req.params.id, userId: userId },
      req.body,
      { new: true }
    );
    
    if (!updatedActivity) {
      return res.status(404).json({ message: 'Activity not found or unauthorized' });
    }
    res.json(updatedActivity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/activities/:id', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ message: 'User ID is required' });
    }
    
    const deletedActivity = await Activity.findOneAndDelete({
      _id: req.params.id,
      userId: userId
    });
    
    if (!deletedActivity) {
      return res.status(404).json({ message: 'Activity not found or unauthorized' });
    }
    res.json({ message: 'Activity deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// export the router
module.exports = router;