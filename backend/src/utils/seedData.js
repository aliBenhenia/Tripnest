const mongoose = require('mongoose');
const dotenv = require('dotenv');
const City = require('../models/City');
const Activity = require('../models/Activity');
const Category = require('../models/Category');

// Load environment variables
dotenv.config();

// Categories data
const categories = [
  {
    name: 'Beach',
    icon: '/icons/beach.svg',
    description: 'Beautiful beaches and coastlines'
  },
  {
    name: 'Mountain',
    icon: '/icons/mountain.svg',
    description: 'Stunning mountain landscapes and hiking trails'
  },
  {
    name: 'Desert',
    icon: '/icons/desert.svg',
    description: 'Explore the majestic Sahara desert'
  },
  {
    name: 'History',
    icon: '/icons/history.svg',
    description: 'Historical sites and ancient ruins'
  },
  {
    name: 'Culture',
    icon: '/icons/culture.svg',
    description: 'Cultural experiences and local traditions'
  },
  {
    name: 'Food',
    icon: '/icons/food.svg',
    description: 'Culinary experiences and local cuisine'
  }
];

// Cities data
const cities = [
  {
    name: 'Marrakech',
    slug: 'marrakech',
    description: 'Explore the vibrant city of Marrakech with its bustling souks, beautiful palaces, and incredible food.',
    imageUrl: 'https://images.unsplash.com/photo-1597212618440-806262de4f9c',
    imageUrl2: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e69',
    properties: 128
  },
  {
    name: 'Casablanca',
    slug: 'casablanca',
    description: 'Discover the economic capital of Morocco featuring a perfect blend of modern and traditional architecture.',
    imageUrl: 'https://images.unsplash.com/photo-1579017331263-ef82f3993017',
    imageUrl2: 'https://images.unsplash.com/photo-1577147443647-81856d5151af',
    properties: 97
  },
  {
    name: 'Chefchaouen',
    slug: 'chefchaouen',
    description: 'Known as the Blue City, Chefchaouen is famous for its distinctive blue-washed buildings and relaxed atmosphere.',
    imageUrl: 'https://images.unsplash.com/photo-1548019840-e30d7c565ba6',
    imageUrl2: 'https://images.unsplash.com/photo-1561642769-1bca6e717d74',
    properties: 56
  },
  {
    name: 'Fes',
    slug: 'fes',
    description: 'Step back in time in Fes, home to the oldest university in the world and the most complete medieval city.',
    imageUrl: 'https://images.unsplash.com/photo-1591671515924-4c01bea08678',
    imageUrl2: 'https://images.unsplash.com/photo-1586991359975-54500b7d8a86',
    properties: 72
  },
  {
    name: 'Essaouira',
    slug: 'essaouira',
    description: 'A coastal gem with a stunning medina, beautiful beaches, and a vibrant cultural scene.',
    imageUrl: 'https://images.unsplash.com/photo-1572206912757-5a78ff4d79a2',
    imageUrl2: 'https://images.unsplash.com/photo-1543856873-1cdf9c62e11c',
    properties: 63
  }
];

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/morocco-travel');
    console.log('MongoDB connected...');

    // Clear existing data
    await City.deleteMany();
    await Activity.deleteMany();
    await Category.deleteMany();
    console.log('Data cleared...');

    // Insert categories
    const createdCategories = await Category.insertMany(categories);
    console.log(`${createdCategories.length} categories inserted`);

    // Insert cities
    const createdCities = await City.insertMany(cities);
    console.log(`${createdCities.length} cities inserted`);

    // Create activities
    const activities = [];

    for (const city of createdCities) {
      // Add beach activities for coastal cities
      if (['essaouira', 'casablanca'].includes(city.slug)) {
        activities.push({
          name: `${city.name} Beach Day`,
          type: 'Beach',
          description: `Enjoy a relaxing day at the beautiful beaches of ${city.name}.`,
          imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
          location: city.name,
          cityId: city._id,
          price: Math.floor(Math.random() * 50) + 10,
          rating: (Math.random() * 2) + 3,
          reviews: Math.floor(Math.random() * 100) + 10
        });
      }

      // Add historical activities for all cities
      activities.push({
        name: `${city.name} Historical Tour`,
        type: 'History',
        description: `Discover the rich history of ${city.name} with a guided tour of its historical sites.`,
        imageUrl: 'https://images.unsplash.com/photo-1563897539633-7374c276c212',
        location: city.name,
        cityId: city._id,
        price: Math.floor(Math.random() * 40) + 20,
        rating: (Math.random() * 2) + 3,
        reviews: Math.floor(Math.random() * 100) + 10
      });

      // Add cultural activities for all cities
      activities.push({
        name: `${city.name} Cultural Experience`,
        type: 'Culture',
        description: `Immerse yourself in the local culture of ${city.name} with this authentic experience.`,
        imageUrl: 'https://images.unsplash.com/photo-1551878931-9de7f1a939b1',
        location: city.name,
        cityId: city._id,
        price: Math.floor(Math.random() * 35) + 15,
        rating: (Math.random() * 2) + 3,
        reviews: Math.floor(Math.random() * 100) + 10
      });

      // Add food activities for all cities
      activities.push({
        name: `${city.name} Food Tour`,
        type: 'Food',
        description: `Taste the delicious cuisine of ${city.name} with a guided food tour.`,
        imageUrl: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b',
        location: city.name,
        cityId: city._id,
        price: Math.floor(Math.random() * 45) + 25,
        rating: (Math.random() * 2) + 3,
        reviews: Math.floor(Math.random() * 100) + 10
      });

      // Add desert activities for specific cities
      if (['marrakech'].includes(city.slug)) {
        activities.push({
          name: `Sahara Desert Tour from ${city.name}`,
          type: 'Desert',
          description: `Experience the magic of the Sahara Desert on this unforgettable tour from ${city.name}.`,
          imageUrl: 'https://images.unsplash.com/photo-1509234365345-2b2be5238677',
          location: `${city.name} to Sahara`,
          cityId: city._id,
          price: Math.floor(Math.random() * 100) + 50,
          rating: (Math.random() * 2) + 3,
          reviews: Math.floor(Math.random() * 100) + 10
        });
      }

      // Add mountain activities for specific cities
      if (['marrakech', 'chefchaouen'].includes(city.slug)) {
        activities.push({
          name: `${city.name} Mountain Excursion`,
          type: 'Mountain',
          description: `Explore the beautiful mountains around ${city.name} on this guided excursion.`,
          imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
          location: city.name,
          cityId: city._id,
          price: Math.floor(Math.random() * 60) + 30,
          rating: (Math.random() * 2) + 3,
          reviews: Math.floor(Math.random() * 100) + 10
        });
      }
    }

    // Insert activities
    const createdActivities = await Activity.insertMany(activities);
    console.log(`${createdActivities.length} activities inserted`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB(); 