# Morocco Travel Backend API

This is the backend API for the Morocco Travel application built with Express.js and MongoDB.

## Features

- RESTful API architecture
- MongoDB database with Mongoose ODM
- CRUD operations for cities, activities, and categories
- Filtering activities by city and type

## Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd Travila/backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the backend directory with the following variables:

```
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/morocco-travel
JWT_SECRET=your_jwt_secret
```

Replace `MONGO_URI` with your MongoDB connection string if you're using MongoDB Atlas.

### 4. Seed the database

Run the following command to populate the database with sample data:

```bash
npm run seed
```

This will add sample cities, activities, and categories to the database.

### 5. Start the server

#### Development mode (with hot reload)

```bash
npm run dev
```

#### Production mode

```bash
npm start
```

The server will start running at `http://localhost:5000`.

## API Endpoints

### Cities

- `GET /api/cities` - Get all cities
- `GET /api/cities/:slug` - Get city by slug
- `POST /api/cities` - Create a new city
- `PUT /api/cities/:id` - Update a city
- `DELETE /api/cities/:id` - Delete a city

### Activities

- `GET /api/activities` - Get all activities
- `GET /api/activities?cityId=:cityId` - Get activities by city
- `GET /api/activities?type=:type` - Get activities by type
- `GET /api/activities/:id` - Get activity by ID
- `POST /api/activities` - Create a new activity
- `PUT /api/activities/:id` - Update an activity
- `DELETE /api/activities/:id` - Delete an activity

### Categories

- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get category by ID
- `POST /api/categories` - Create a new category
- `PUT /api/categories/:id` - Update a category
- `DELETE /api/categories/:id` - Delete a category

## Data Models

### City

```javascript
{
  name: String,
  slug: String,
  description: String,
  imageUrl: String,
  imageUrl2: String,
  properties: Number
}
```

### Activity

```javascript
{
  name: String,
  type: String,
  description: String,
  imageUrl: String,
  location: String,
  cityId: ObjectId,
  price: Number,
  rating: Number,
  reviews: Number
}
```

### Category

```javascript
{
  name: String,
  icon: String,
  description: String
}
```

## License

This project is licensed under the ISC License. 