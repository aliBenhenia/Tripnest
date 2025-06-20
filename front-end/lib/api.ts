/**
 * API utility for making authenticated requests to the backend using Axios
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Base API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Token key in localStorage
const TOKEN_KEY = 'GoMorocco_auth_token';

// Create axios instance with default config
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

// Request interceptor for adding auth token
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from localStorage if in browser environment
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem(TOKEN_KEY);
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || 'API request failed';
    return Promise.reject(new Error(message));
  }
);

// Generic function with axios for API requests
export async function fetchWithAuth<T>(
  endpoint: string,
  options: AxiosRequestConfig = {}
): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axiosInstance({
      url: endpoint,
      ...options,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// API methods
export const api = {
  // Auth related endpoints
  auth: {
    signup: (userData: { name: string; email: string; password: string }) =>
      fetchWithAuth('/api/auth/signup', {
        method: 'POST',
        data: userData, // Axios uses 'data' instead of 'body' and auto-stringifies JSON
      }),
    signin: (credentials: { email: string; password: string }) =>
      fetchWithAuth('/api/auth/signin', {
        method: 'POST',
        data: credentials,
      }),
    // Additional auth-related endpoints can be added here
  },

  // User related endpoints
  user: {
    getProfile: () => fetchWithAuth('/api/users/profile', { method: 'GET' }),
    updateProfile: (userData: any) =>
      fetchWithAuth('/api/users/profile', {
        method: 'PUT',
        data: userData,
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
        data: tripData,
      }),
    // Additional trip-related endpoints can be added here
  },
};

export default api;