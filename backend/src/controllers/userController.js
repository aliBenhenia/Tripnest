const userService = require('../services/userService');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

exports.updateProfile = catchAsync(async (req, res, next) => {
  const allowedFields = ['username', 'bio', 'avatar'];
  const updateData = {};

  Object.keys(req.body).forEach(key => {
    if (allowedFields.includes(key)) {
      updateData[key] = req.body[key];
    }
  });

  if (Object.keys(updateData).length === 0) {
    return next(new AppError('No valid fields to update', 400));
  }

  const user = await userService.updateUser(req.user.id, updateData);

  res.status(200).json({
    status: 'success',
    data: { user }
  });
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