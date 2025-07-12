# Authentication Integration

This document explains how the authentication system is integrated between the frontend and backend of the Tripnest application.

## Overview

The authentication system uses JWT (JSON Web Tokens) for stateless authentication. The backend provides endpoints for user registration (signup) and login (signin), while the frontend handles the authentication state and user interface.

## Backend Features

- **User Registration**: `/api/auth/signup` endpoint for creating new user accounts
- **User Login**: `/api/auth/signin` endpoint for authenticating users
- **Token-based Authentication**: JWT tokens are used for maintaining authentication state
- **Secure Password Storage**: Passwords are hashed using bcrypt
- **Fallback In-Memory Storage**: When MongoDB is not available, the system uses in-memory storage

## Frontend Integration

- **Authentication Context**: Global authentication state managed via React Context
- **Protected Routes**: Components/pages can be wrapped with `<ProtectedRoute>` to require authentication
- **Login/Signup Forms**: User-friendly forms for authentication actions
- **Profile Management**: User profile page showing account information
- **Auth-Aware Navigation**: Navigation UI adapts based on authentication status

## How to Use

### 1. Start the Backend

```bash
cd backend
npm run dev
```

The backend will run on port 3001 by default.

### 2. Start the Frontend

```bash
cd front-end
npm run dev
```

The frontend will run on port 3000 by default.

### 3. Using Authentication in Components

To access authentication state in any component:

```jsx
import { useAuth } from '@/hooks/useAuth';

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();
  
  // Now you can use authentication state and functions
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please log in to continue</p>
      )}
    </div>
  );
}
```

### 4. Protecting Routes

To create protected routes that require authentication:

```jsx
import ProtectedRoute from '@/components/ProtectedRoute';

function SecurePage() {
  return (
    <ProtectedRoute>
      <div>This content is only visible to authenticated users</div>
    </ProtectedRoute>
  );
}
```

## API Endpoints

### Registration

- **URL**: `/api/auth/signup` or `/api/local-auth/signup` (fallback)
- **Method**: POST
- **Body**:
  ```json
  {
    "name": "User Name",
    "email": "user@example.com",
    "password": "password123"
  }
  ```

### Login

- **URL**: `/api/auth/signin` or `/api/local-auth/signin` (fallback)
- **Method**: POST
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

## Configuration

The frontend uses environment variables for configuration:

- `NEXT_PUBLIC_API_URL`: The URL of the backend API (default: `http://localhost:3001`)

These can be configured in the `.env.local` file in the frontend directory. 