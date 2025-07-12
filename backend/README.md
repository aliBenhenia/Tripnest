# Tripnest Backend API

Backend API for Tripnest application with authentication system.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory with:
   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/Tripnest
   JWT_SECRET=your-secret-key
   JWT_EXPIRES_IN=30d
   ```

3. Make sure MongoDB is running locally or update the MONGO_URI with your MongoDB connection string.

4. Start the server:
   ```
   npm run dev
   ```

## Authentication Endpoints

### With MongoDB Connection

#### Sign Up
- **URL**: `/api/auth/signup`
- **Method**: POST
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response**: Returns JWT token and user data

#### Sign In
- **URL**: `/api/auth/signin`
- **Method**: POST
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response**: Returns JWT token and user data

### Without MongoDB Connection (In-Memory)

If MongoDB is not available, the server will automatically fall back to in-memory storage. The following endpoints will be available:

#### Sign Up (In-Memory)
- **URL**: `/api/local-auth/signup`
- **Method**: POST
- **Body**: Same as above

#### Sign In (In-Memory)
- **URL**: `/api/local-auth/signin`
- **Method**: POST
- **Body**: Same as above

**Note**: With in-memory storage, all data will be lost when the server restarts.

## Protected Routes

For any protected routes, you need to include the JWT token in the Authorization header:

```
Authorization: Bearer your_jwt_token
```

## Error Handling

All responses follow the structure:

- Success:
  ```json
  {
    "status": "success",
    "data": { ... }
  }
  ```

- Error:
  ```json
  {
    "status": "fail",
    "message": "Error message"
  }
  ```
  
## MongoDB Connection

The server will automatically detect whether MongoDB is connected and use the appropriate authentication endpoints:

1. Visit the root URL (`/`) to see the connection status and available endpoints
2. If MongoDB fails to connect, the server will still run with in-memory storage
3. To use MongoDB, ensure it's installed and running, or use a cloud MongoDB service by updating the MONGO_URI in .env 