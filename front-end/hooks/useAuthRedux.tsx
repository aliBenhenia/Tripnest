'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import {
  loginUser,
  signupUser,
  logoutUser,
  validateAuthToken,
  initializeAuth
} from '@/lib/redux/slices/authSlice';

// Custom hook to use auth from Redux
const useAuthRedux = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  // Select auth state from Redux store
  const { user, token, isLoading, error } = useAppSelector((state) => state.auth);
  
  // Initialize auth from localStorage
  const initialize = useCallback(() => {
    dispatch(initializeAuth());
  }, [dispatch]);
  
  // Login function
  const login = useCallback(async (email: string, password: string) => {
    return await dispatch(loginUser(email, password));
  }, [dispatch]);
  
  // Signup function
  const signup = useCallback(async (name: string, email: string, password: string) => {
    return await dispatch(signupUser(name, email, password));
  }, [dispatch]);
  
  // Logout function
  const logout = useCallback(() => {
    dispatch(logoutUser());
    router.push('/auth/login');
  }, [dispatch, router]);
  
  // Validate token function
  const validateToken = useCallback(async () => {
    return await dispatch(validateAuthToken());
  }, [dispatch]);
  
  // Clear error function
  const clearError = useCallback(() => {
    // This will be implemented in the authSlice
  }, []);
  
  return {
    user,
    token,
    isAuthenticated: !!token,
    isLoading,
    error,
    login,
    signup,
    logout,
    validateToken,
    clearError,
    initialize
  };
};

export default useAuthRedux;