/**
 * API utility for making authenticated requests to the backend
 */

// Base API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Token key in localStorage
const TOKEN_KEY = 'travila_auth_token';

// Generic fetch function with authentication
export async function fetchWithAuth<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  // Get token from localStorage if in browser environment
  let token = null;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem(TOKEN_KEY);
  }

  // Prepare headers with auth token if available
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  // Parse JSON response
  const data = await response.json();

  // Handle error responses
  if (!response.ok) {
    throw new Error(data.message || 'API request failed');
  }

  return data as T;
}

// API methods
export const api = {
  // Auth related endpoints
  auth: {
    signup: (userData: { name: string; email: string; password: string }) =>
      fetchWithAuth('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify(userData),
      }),
    signin: (credentials: { email: string; password: string }) =>
      fetchWithAuth('/api/auth/signin', {
        method: 'POST',
        body: JSON.stringify(credentials),
      }),
    // Additional auth-related endpoints can be added here
  },

  // User related endpoints
  user: {
    getProfile: () => fetchWithAuth('/api/users/profile', { method: 'GET' }),
    updateProfile: (userData: any) =>
      fetchWithAuth('/api/users/profile', {
        method: 'PUT',
        body: JSON.stringify(userData),
      }),
    // Additional user-related endpoints can be added here
  },

  // Example of how to add other API sections
  trips: {
    getAll: () => fetchWithAuth('/api/trips', { method: 'GET' }),
    getById: (id: string) => fetchWithAuth(`/api/trips/${id}`, { method: 'GET' }),
    create: (tripData: any) =>
      fetchWithAuth('/api/trips', {
        method: 'POST',
        body: JSON.stringify(tripData),
      }),
    // Additional trip-related endpoints can be added here
  },
};

export default api; 