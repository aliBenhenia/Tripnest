'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
  validateToken: () => Promise<boolean>;
  refreshToken: () => Promise<boolean>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Constants
const TOKEN_KEY = 'auth_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const USER_KEY = 'auth_user';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
const TOKEN_REFRESH_THRESHOLD = 5 * 60 * 1000; // 5 minutes before expiration

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const storedToken = localStorage.getItem(TOKEN_KEY);
        const storedRefreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
        const storedUser = localStorage.getItem(USER_KEY);

        if (storedToken && storedRefreshToken && storedUser) {
          setAccessToken(storedToken);
          setRefreshToken(storedRefreshToken);
          setUser(JSON.parse(storedUser));

          // Schedule token refresh
          const tokenData = JSON.parse(atob(storedToken.split('.')[1]));
          const expiryTime = tokenData.exp * 1000;
          const timeUntilRefresh = expiryTime - Date.now() - TOKEN_REFRESH_THRESHOLD;

          if (timeUntilRefresh > 0) {
            setTimeout(() => refreshToken(), timeUntilRefresh);
          } else {
            await refreshToken();
          }
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        logout();
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const handleAuthResponse = async (response: Response) => {
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Authentication failed');
    }

    localStorage.setItem(TOKEN_KEY, data.accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken);
    localStorage.setItem(USER_KEY, JSON.stringify(data.data.user));
    setAccessToken(data.accessToken);
    setRefreshToken(data.refreshToken);
    setUser(data.data.user);

    // Schedule token refresh
    const tokenData = JSON.parse(atob(data.accessToken.split('.')[1]));
    const expiryTime = tokenData.exp * 1000;
    const timeUntilRefresh = expiryTime - Date.now() - TOKEN_REFRESH_THRESHOLD;
    if (timeUntilRefresh > 0) {
      setTimeout(() => refreshToken(), timeUntilRefresh);
    }

    return true;
  };

  const login = async (email: string, password: string) => {
    try {
      setError(null);
      setIsLoading(true);

      const response = await fetch(`${API_URL}/api/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      return await handleAuthResponse(response);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Login failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      setError(null);
      setIsLoading(true);

      const response = await fetch(`${API_URL}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      return await handleAuthResponse(response);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Signup failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);
    router.push('/auth/login');
  };

  const validateToken = async () => {
    if (!accessToken) return false;
    
    try {
      const response = await fetch(`${API_URL}/api/auth/validate`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        const timeUntilExpiry = getTokenExpiry(accessToken);
        if (timeUntilExpiry <= TOKEN_REFRESH_THRESHOLD) {
          return await refreshToken();
        }
        return false;
      }
      
      return true;
    } catch (error) {
      console.error('Token validation error:', error);
      return false;
    }
  };

  const refreshToken = async () => {
    if (!refreshToken) return false;
    
    try {
      const response = await fetch(`${API_URL}/api/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ refreshToken })
      });
      
      if (!response.ok) {
        throw new Error('Failed to refresh token');
      }
      
      const data = await response.json();
      localStorage.setItem(TOKEN_KEY, data.accessToken);
      localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken);
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
      
      // Schedule next refresh
      const tokenData = JSON.parse(atob(data.accessToken.split('.')[1]));
      const expiryTime = tokenData.exp * 1000;
      const timeUntilRefresh = expiryTime - Date.now() - TOKEN_REFRESH_THRESHOLD;
      if (timeUntilRefresh > 0) {
        setTimeout(() => refreshToken(), timeUntilRefresh);
      }
      
      return true;
    } catch (error) {
      console.error('Token refresh error:', error);
      logout();
      return false;
    }
  };

  const getTokenExpiry = (token: string): number => {
    try {
      const tokenData = JSON.parse(atob(token.split('.')[1]));
      return (tokenData.exp * 1000) - Date.now();
    } catch {
      return 0;
    }
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        login,
        signup,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}