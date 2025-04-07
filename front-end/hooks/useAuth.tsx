'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { store } from '@/lib/redux/store';
import { RESET_STATE } from '@/lib/redux/store';

// Define user type
type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

// Define auth context types
type AuthContextType = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  validateToken: () => Promise<boolean>;
  error: string | null;
};

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Local storage keys
const TOKEN_KEY = 'travila_auth_token';
const USER_KEY = 'travila_user';

// API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check if we're in browser environment
  const isBrowser = typeof window !== 'undefined';

  // Initialize auth state from localStorage
  useEffect(() => {
    if (isBrowser) {
      try {
        const storedToken = localStorage.getItem(TOKEN_KEY);
        const storedUser = localStorage.getItem(USER_KEY);

        if (storedToken && storedUser) {
          console.log('Found stored token and user data');
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
        } else {
          console.log('No stored credentials found');
        }
      } catch (error) {
        console.error('Error reading stored credentials:', error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [isBrowser]);

  // Validate token function - can be called to check token validity
  const validateToken = async () => {
    if (!token) return false;

    try {
      // Get the appropriate profile endpoint
      const { data: infoData } = await axios.get(`${API_URL}/`);
      const profileEndpoint = infoData.userEndpoints[0].includes('local')
        ? '/api/local-users/profile'
        : '/api/users/profile';

      // Try to get profile with current token
      const response = await axios.get(`${API_URL}${profileEndpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.status === 200;
    } catch (error) {
      console.error('Token validation error:', error);
      return false;
    }
  };

  // Determine proper API endpoints based on server response
  const getApiEndpoints = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/`);
      return {
        signup: data.authEndpoints[0].includes('local') ? '/api/local-auth/signup' : '/api/auth/signup',
        signin: data.authEndpoints[1].includes('local') ? '/api/local-auth/signin' : '/api/auth/signin',
      };
    } catch (error) {
      console.error('Error fetching API info:', error);
      return {
        signup: '/api/local-auth/signup',
        signin: '/api/local-auth/signin',
      };
    }
  };

  // Signup function
  const signup = async (name: string, email: string, password: string) => {
    setError(null);
    setIsLoading(true);

    try {
      // Validate inputs
      if (!name || !email || !password) {
        setError('All fields are required');
        setIsLoading(false);
        return false;
      }

      if (password.length < 6) {
        setError('Password must be at least 6 characters long');
        setIsLoading(false);
        return false;
      }

      if (!email.includes('@')) {
        setError('Please enter a valid email address');
        setIsLoading(false);
        return false;
      }

      const endpoints = await getApiEndpoints();
      const response = await axios.post(`${API_URL}${endpoints.signup}`, {
        name,
        email,
        password,
      });

      const data = response.data;

      if (response.status !== 200) {
        setError(data.message || 'Failed to create account. Please try again.');
        setIsLoading(false);
        return false;
      }

      // Save to state and localStorage
      setUser(data.data.user);
      setToken(data.token);

      if (isBrowser) {
        localStorage.setItem(TOKEN_KEY, data.token);
        localStorage.setItem(USER_KEY, JSON.stringify(data.data.user));
      }

      setIsLoading(false);
      return true;
    } catch (err) {
      console.error('Signup error:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setIsLoading(false);
      return false;
    }
  };

  // Login function
  const login = async (email: string, password: string) => {
    setError(null);
    setIsLoading(true);

    try {
      // Validate inputs
      if (!email || !password) {
        setError('Email and password are required');
        setIsLoading(false);
        return false;
      }

      if (!email.includes('@')) {
        setError('Please enter a valid email address');
        setIsLoading(false);
        return false;
      }

      const endpoints = await getApiEndpoints();

      const response = await axios.post(`${API_URL}${endpoints.signin}`, {
        email,
        password,
      });

      const data = response.data;

      if (response.status !== 200) {
        setError(data.message || 'Login failed. Please try again later.');
        setIsLoading(false);
        return false;
      }

      // Save to state and localStorage
      setUser(data.data.user);
      setToken(data.token);

      if (isBrowser) {
        localStorage.setItem(TOKEN_KEY, data.token);
        localStorage.setItem(USER_KEY, JSON.stringify(data.data.user));
      }

      setIsLoading(false);
      return true;
    } catch (err) {
      console.error('Login error:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setIsLoading(false);
      return false;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setToken(null);

    // Reset Redux state
    store.dispatch({ type: RESET_STATE });

    if (isBrowser) {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      console.log('User logged out, credentials removed');
    }
  };

  const value = {
    user,
    token,
    isAuthenticated: !!token,
    isLoading,
    login,
    signup,
    logout,
    validateToken,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export default useAuth;
