const userService = require('../services/userService');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

exports.updateProfile = catchAsync(async (req, res) => {
  const allowedFields = ['username', 'bio'];
  const updateData = {};

  // req.body is now populated correctly by multer
  Object.keys(req.body).forEach(key => {
    if (allowedFields.includes(key)) {
      updateData[key] = req.body[key];
    }
  });

  // Handle file (optional)
  if (req.file) {
    updateData.avatar = `/uploads/${req.file.filename}`; // or save filename if stored on disk
    // You can also do something like `req.file.originalname`, `mimetype`, etc.
  }
  try {
    const user = await userService.updateUser(req.user.id, updateData);
    res.status(200).json({
      status: 'success',
      data: { user }
    });
  } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err.message
    });
  }
  
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    return next(new AppError('Please provide current and new password', 400));
  }

  const user = await userService.updatePassword(
    req.user.id,
    currentPassword,
    newPassword
  );

  res.status(200).json({
    status: 'success',
    message: 'Password updated successfully'
  });
});

exports.getProfile = catchAsync(async (req, res) => {
  console.log(req.body);
  const user = await userService.findUserById(req.user.id);

  res.status(200).json({
    status: 'success',
    data: { user }
  });
});

exports.deleteAccount = catchAsync(async (req, res) => {
  await userService.deleteUser(req.user.id);

  res.status(204).json({
    status: 'success',
    data: null
  });
});