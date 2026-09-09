const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const planner = require('./routes/planner');
const stops = require('./routes/stops');
const saves = require('./routes/saves');
const path = require('path');
const errHandler = require('./middleware/errHandler');
const { protect } = require('./middleware/authMiddleware');
const { getCache, setCache } = require('./utils/cache');

// Load env
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const PORT = 3001;
const app = express();

console.log(`Using port: ${PORT}`);

// ==============================
// Middleware
// ==============================
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// HTTP cache headers for GET requests
app.use((req, res, next) => {
  if (req.method === 'GET') {
    res.set('Cache-Control', 'public, max-age=300');
  }
  next();
});

// ==============================
// Static files
// ==============================
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// ==============================
// Redis cache middleware (GET only + user scoped)
// ==============================
const cacheMiddleware = (keyBuilder, ttlSeconds = 300) => {
  return async (req, res, next) => {
    if (req.method !== 'GET' || !req.user) return next();

    const key = keyBuilder(req);
    const cached = await getCache(key);

    if (cached) {
      return res.json(cached);
    }

    const originalJson = res.json.bind(res);
    res.json = (body) => {
      setCache(key, body, ttlSeconds);
      return originalJson(body);
    };

    next();
  };
};

// ==============================
// Routes
// ==============================
app.use('/api/auth', authRoutes);

// userRoutes is self-contained: public /check-email route first,
// then protect() before every protected route (no caching here).
app.use('/api/users', userRoutes);

// Authenticate BEFORE caching so cache keys are user scoped
app.use(
  '/api/planner',
  protect,
  cacheMiddleware(req => `planner:${req.user.id}:${req.originalUrl}`, 300),
  planner
);

app.use(
  '/api/stops',
  protect,
  cacheMiddleware(req => `stops:${req.user.id}:${req.originalUrl}`, 600),
  stops
);

app.use(
  '/api/saves',
  protect,
  cacheMiddleware(req => `saves:${req.user.id}:${req.originalUrl}`, 300),
  saves
);

// ==============================
// 404 + error handling (AFTER all routes)
// ==============================
app.use((req, res) => {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` });
});

app.use(errHandler);

// ==============================
// MongoDB Connection
// ==============================
const startServer = async () => {
  try {
    await connectDB();
    console.log('MongoDB connected');
  } catch (err) {
    console.log('MongoDB connection failed');
  }

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};

startServer();

// Graceful shutdown
process.on('SIGTERM', async () => {
  const { redisClient } = require('./utils/cache');
  await redisClient.quit();
  process.exit(0);
});