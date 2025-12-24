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

// Load env
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const PORT = 3001;
const app = express();

console.log(`Using port: ${PORT}`);


// ==============================
// 🔥 SIMPLE IN-MEMORY CACHE
// ==============================
const memoryCache = new Map();

const getCache = (key) => {
  const data = memoryCache.get(key);
  if (!data) return null;

  if (data.expire < Date.now()) {
    memoryCache.delete(key);
    return null;
  }
  return data.value;
};

const setCache = (key, value, ttl = 300000) => {
  memoryCache.set(key, {
    value,
    expire: Date.now() + ttl
  });
};

const clearCacheByPrefix = (prefix) => {
  for (const key of memoryCache.keys()) {
    if (key.startsWith(prefix)) {
      memoryCache.delete(key);
    }
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
// 🔥 Cached Routes Wrapper
// ==============================
const cacheMiddleware = (keyBuilder, ttl) => {
  return (req, res, next) => {
    const key = keyBuilder(req);
    const cached = getCache(key);

    if (cached) {
      return res.json(cached);
    }

    const originalJson = res.json.bind(res);
    res.json = (body) => {
      setCache(key, body, ttl);
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
  cacheMiddleware(req => `users:${req.originalUrl}`, 300000),
  userRoutes
);

// Cache planner GET
app.use(
  '/api/planner',
  cacheMiddleware(req => `planner:${req.originalUrl}`, 300000),
  planner
);

// Cache stops (very static)
app.use(
  '/api/stops',
  cacheMiddleware(() => 'stops:all', 600000),
  stops
);

// Cache saved trips
app.use(
  '/api/saves',
  cacheMiddleware(req => `saves:${req.originalUrl}`, 300000),
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
