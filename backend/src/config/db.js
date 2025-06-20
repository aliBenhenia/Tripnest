const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://admin:adminpassword@mongodb:27017/GoMorocco?authSource=admin');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    // Throw error instead of exiting process, so server.js can handle it
    throw error;
  }
};

module.exports = connectDB; 