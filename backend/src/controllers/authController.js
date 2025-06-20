const jwt = require('jsonwebtoken');
const User = require('../models/User');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

// Generate tokens
const generateTokens = (userId) => {
  // Fetch JWT secret from environment variables
  const jwtSecret = process.env.JWT_SECRET;
  console.log("=====> ",jwtSecret);
  const jwtExpiresIn = process.env.JWT_EXPIRES_IN || '1d';  // Default expiration to 1 day if not provided

  // Generate access token using the JWT secret
  const accessToken = jwt.sign({ id: userId }, jwtSecret, {
    expiresIn: jwtExpiresIn  // Expiration from env variable
  });

  // Generate refresh token using a different secret for security (can also be in the environment variables)
  const refreshToken = jwt.sign({ id: userId }, process.env.JWT_REFRESH_SECRET || 'yourDefaultRefreshTokenSecret', {
    expiresIn: '7d'  // 7 days expiration for refresh token
  });

  return { accessToken, refreshToken };
};

// Register new user
exports.register = catchAsync(async (req, res, next) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  

  // Check if user already exists
  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  console.log("user,ddddd");
  if (existingUser) {
    return next(new AppError('Email or username already exists', 400));
  }

  // Create new user
  const user = await User.create({
    username,
    email,
    password
  });

  // Generate tokens
  const { accessToken, refreshToken } = generateTokens(user._id);

  // Update user's refresh token
  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  // Remove password from output
  user.password = undefined;

  res.status(201).json({
    status: 'success',
    data: {
      user,
      accessToken,
      refreshToken
    }
  });
});

// Login user
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  // Check if user exists & password is correct
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // Generate tokens
  const { accessToken, refreshToken } = generateTokens(user._id);

  // Update user's refresh token
  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  // Remove password from output
  user.password = undefined;

  res.status(200).json({
    status: 'success',
    data: {
      user,
      accessToken,
      refreshToken
    }
  });
});

// Refresh token
exports.refreshToken = catchAsync(async (req, res, next) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return next(new AppError('Please provide refresh token', 400));
  }

  // Verify refresh token
  const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

  // Check if user still exists
  const user = await User.findById(decoded.id);
  if (!user || user.refreshToken !== refreshToken) {
    return next(new AppError('Invalid refresh token', 401));
  }

  // Generate new tokens
  const tokens = generateTokens(user._id);

  // Update user's refresh token
  user.refreshToken = tokens.refreshToken;
  await user.save({ validateBeforeSave: false });

  res.status(200).json({
    status: 'success',
    data: tokens
  });
});

// Logout user
exports.logout = catchAsync(async (req, res) => {
  const user = await User.findById(req.user.id);
  user.refreshToken = undefined;
  await user.save({ validateBeforeSave: false });

  res.status(200).json({
    status: 'success',
    message: 'Logged out successfully'
  });
});

// Get current user
exports.getCurrentUser = catchAsync(async (req, res) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    status: 'success',
    data: { user }
  });
});