const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_URI;
//  const MONGO_URI="mongodb+srv://alibenhenia1:3TkEK63GFAfL8ZZf@cluster0.l3xb1ca.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongo_url);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    // Throw error instead of exiting process, so server.js can handle it
    throw error;
  }
};

module.exports = connectDB; 