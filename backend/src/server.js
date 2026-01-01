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
const multer = require('multer');
const fs = require('fs');
const errHandler = require('./middleware/errHandler');
const redis = require('redis'); // ADDED

// Load env
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const PORT = 3001;
const app = express();

console.log(`Using port: ${PORT}`);

// ==============================
// 🔥 REDIS CACHE (REPLACED Map)
// ==============================
const redisClient = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

// Connect Redis
(async () => {
  await redisClient.connect();
  console.log('Redis connected');
})();

// Updated cache functions
const getCache = async (key) => {
  try {
    const data = await redisClient.get(key);
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error('Redis get error:', err);
    return null;
  }
};

const setCache = async (key, value, ttl = 300) => { // ttl in seconds now
  try {
    await redisClient.setEx(key, ttl, JSON.stringify(value));
  } catch (err) {
    console.error('Redis set error:', err);
  }
};

const clearCacheByPrefix = async (prefix) => {
  try {
    const keys = await redisClient.keys(`${prefix}*`);
    if (keys.length > 0) {
      await redisClient.del(keys);
    }
  } catch (err) {
    console.error('Redis delete error:', err);
  }
};

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

app.use(errHandler);

// ==============================
// Multer config
// ==============================
const storage = multer.diskStorage({
  destination(req, file, cb) {
    const uploadDir = path.join(__dirname, '..', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename(req, file, cb) {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `avatar-${unique}${path.extname(file.originalname)}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter(req, file, cb) {
    if (file.mimetype.startsWith('image')) cb(null, true);
    else cb(new Error('Only images allowed'), false);
  }
});

// ==============================
// Static files
// ==============================
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// ==============================
// 🔥 UPDATED Cache Middleware
// ==============================
const cacheMiddleware = (keyBuilder, ttlSeconds = 300) => {
  return async (req, res, next) => {
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

// Cache user profile GET
app.use(
  '/api/users',
  cacheMiddleware(req => `users:${req.user?.id || 'public'}:${req.originalUrl}`, 300),
  userRoutes
);

// Cache planner GET
app.use(
  '/api/planner',
  cacheMiddleware(req => `planner:${req.user?.id || 'public'}:${req.originalUrl}`, 300),
  planner
);

// Cache stops
app.use(
  '/api/stops',
  cacheMiddleware(() => 'stops:all', 600),
  stops
);

// Cache saved trips
app.use(
  '/api/saves',
  cacheMiddleware(req => `saves:${req.user?.id}:${req.originalUrl}`, 300),
  saves
);

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
  await redisClient.quit();
  process.exit(0);
});