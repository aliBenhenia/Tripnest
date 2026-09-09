/**
 * API utility for making authenticated requests to the backend using Axios
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Base API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Token key in localStorage (must match authSlice/planner/trips pages)
const TOKEN_KEY = 'TOKEN_KEY';

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
      fetchWithAuth('/api/auth/register', {
        method: 'POST',
        data: userData,
      }),
    login: (credentials: { email: string; password: string }) =>
      fetchWithAuth('/api/auth/login', {
        method: 'POST',
        data: credentials,
      }),
  },

  // User related endpoints
  user: {
    getProfile: () => fetchWithAuth('/api/users/profile', { method: 'GET' }),
    checkEmail: (email: string) =>
      fetchWithAuth('/api/users/check-email', {
        method: 'POST',
        data: { email },
      }),
    updateProfile: (userData: any) =>
      fetchWithAuth('/api/users/update', {
        method: 'PATCH',
        data: userData,
      }),
  },

  // Trips (planner) related endpoints
  trips: {
    getAll: () => fetchWithAuth('/api/planner/trips', { method: 'GET' }),
    getById: (id: string) => fetchWithAuth(`/api/planner/trips/${id}`, { method: 'GET' }),
    create: (tripData: any) =>
      fetchWithAuth('/api/planner/trips', {
        method: 'POST',
        data: tripData,
      }),
    update: (id: string, tripData: any) =>
      fetchWithAuth(`/api/planner/trips/${id}`, {
        method: 'PUT',
        data: tripData,
      }),
    remove: (id: string) =>
      fetchWithAuth(`/api/planner/trips/${id}`, { method: 'DELETE' }),
  },
};

export default api;