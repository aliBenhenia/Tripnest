'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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
      const infoResponse = await fetch(`${API_URL}/`);
      const infoData = await infoResponse.json();
      const profileEndpoint = infoData.userEndpoints[0].includes('local') 
        ? '/api/local-users/profile' 
        : '/api/users/profile';
      
      // Try to get profile with current token
      const response = await fetch(`${API_URL}${profileEndpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      return response.ok;
    } catch (error) {
      console.error('Token validation error:', error);
      return false;
    }
  };

  // Determine proper API endpoints based on server response
  const getApiEndpoints = async () => {
    try {
      const response = await fetch(`${API_URL}/`);
      const data = await response.json();
      return {
        signup: data.authEndpoints[0].includes('local') ? '/api/local-auth/signup' : '/api/auth/signup',
        signin: data.authEndpoints[1].includes('local') ? '/api/local-auth/signin' : '/api/auth/signin'
      };
    } catch (error) {
      console.error('Error fetching API info:', error);
      return {
        signup: '/api/local-auth/signup',
        signin: '/api/local-auth/signin'
      };
    }
  };

  // Signup function
  const signup = async (name: string, email: string, password: string) => {
    setError(null);
    setIsLoading(true);
    
    try {
      const endpoints = await getApiEndpoints();
      const response = await fetch(`${API_URL}${endpoints.signup}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
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
      const endpoints = await getApiEndpoints();
      const response = await fetch(`${API_URL}${endpoints.signin}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
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
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setIsLoading(false);
      return false;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setToken(null);
    
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