import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import axios from 'axios';

// Define user type
export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

// Define auth state
interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

// Local storage keys
const TOKEN_KEY = 'TOKEN_KEY';
const USER_KEY = '';

// API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Define initial state
const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

// Create auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
      if (action.payload) {
        state.error = null;
      }
    },
    setAuthError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setAuthUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setAuthToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    clearAuth: (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});

// Export actions
export const {
  setAuthLoading,
  setAuthError,
  setAuthUser,
  setAuthToken,
  clearAuth,
} = authSlice.actions;

// Thunk actions
export const initializeAuth = () => async (dispatch: AppDispatch) => {
  try {
    const isBrowser = typeof window !== 'undefined';
    if (!isBrowser) return;

    const storedToken = localStorage.getItem(TOKEN_KEY);
    console.log('Stored token:', storedToken);
    const storedUser = localStorage.getItem(USER_KEY);

    if (storedToken && storedUser) {
      dispatch(setAuthToken(storedToken));
      dispatch(setAuthUser(JSON.parse(storedUser)));
    }
  } catch (error) {
    console.error('Error initializing auth:', error);
  }
};

export const loginUser = (email: string, password: string) => async (dispatch: AppDispatch) => {
  dispatch(setAuthLoading(true));
  dispatch(setAuthError(null));

  try {
    // Validate inputs
    if (!email || !password) {
      dispatch(setAuthError('Email and password are required'));
      return false;
    }

    if (!email.includes('@')) {
      dispatch(setAuthError('Please enter a valid email address'));
      return false;
    }

    // Get API endpoints
    const endpoints = await getApiEndpoints();

    // Make login request using Axios
    let response;
    try {
      response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
    } catch (axiosError) {
      // check code 
      if (axiosError.response && axiosError.response.status === 401) {
        dispatch(setAuthError(axiosError?.response?.data?.message ||'Invalid email or password. Please try again.'));
        return false;
      }
      dispatch(setAuthError(axiosError?.response?.data?.message ||'Network error. Please check your internet connection and try again.'));
      return false;
    }

    const data = response.data;

    if (response.status !== 200) {
      // Handle different error scenarios
      if (response.status === 401) {
        dispatch(setAuthError('Invalid email or password. Please try again.'));
        return false;
      } else if (response.status === 404) {
        dispatch(setAuthError('Account not found. Please check your email or sign up.'));
        return false;
      } else if (data.errors && Array.isArray(data.errors)) {
        dispatch(setAuthError(data.errors.map((err: any) => err.msg).join('. ')));
        return false;
      } else {
        dispatch(setAuthError(data.message || 'Login failed. Please try again later.'));
        return false;
      }
    }

    // Save to state and localStorage
    dispatch(setAuthUser(data.data.user));
    dispatch(setAuthToken(data.accessToken));
    console.log('Token:', data.data.accessToken);
    localStorage.setItem(TOKEN_KEY, data.data.accessToken);
    localStorage.setItem(USER_KEY, JSON.stringify(data.data.user));

    return true;
  } catch (err) {
    console.error('Login error:', err);
    dispatch(setAuthError(err instanceof Error ? err.message : 'An unknown error occurred'));
    return false;
  }
};

export const signupUser = (username: string, email: string, password: string) => async (dispatch: AppDispatch) => {
  dispatch(setAuthLoading(true));
  dispatch(setAuthError(null));

  try {
    // Validate inputs
    if (!username || !email || !password) {
      dispatch(setAuthError('All fields are required'));
      return false;
    }

    if (password.length < 6) {
      dispatch(setAuthError('Password must be at least 6 characters long'));
      return false;
    }

    if (!email.includes('@')) {
      dispatch(setAuthError('Please enter a valid email address'));
      return false;
    }

    // Get API endpoints
    const endpoints = await getApiEndpoints();

    // Make signup request using Axios
    const response = await axios.post(`${API_URL}${endpoints.signup}`, { username, email, password });

    const data = response.data;

    if (response.status !== 200) {
      // Handle different error scenarios
      
      if (response.status === 409) {
        dispatch(setAuthError('This email is already registered. Please log in instead.'));
        return false;
      } else if (data.errors && Array.isArray(data.errors)) {
        dispatch(setAuthError(data.errors.map((err: any) => err.msg).join('. ')));
        return false;
      } 
      else if (response.status === 201) {
        // set success create account
        return true;
      }
      else {
        dispatch(setAuthError(data.message || 'Failed to create account. Please try again.'));
        return false;
      }
    }

    // Save to state and localStorage
    dispatch(setAuthUser(data.data.user));
    dispatch(setAuthToken(data.token));

    localStorage.setItem(TOKEN_KEY, data.data.accessToken);
    localStorage.setItem(USER_KEY, JSON.stringify(data.data.user));

    return true;
  } catch (err) {
    // console.error('Signup error:', err);
    // handle status 400 error Email or username already exists
    if (axios.isAxiosError(err) && err.response?.status === 400) {
      dispatch(setAuthError('Email or username already exists'));
      return false;
    }
    dispatch(setAuthError(err instanceof Error ? err.message : 'An unknown error occurred'));
    return false;
  }
};

export const logoutUser = () => (dispatch: AppDispatch) => {
  // Clear auth state
  dispatch(clearAuth());

  // Clear localStorage
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

export const validateAuthToken = () => async (dispatch: AppDispatch, getState: any) => {
  // const { auth } = getState();
  // const { token } = auth;
  const token = localStorage.getItem(TOKEN_KEY);
  console.log('Validating token:==>', token);

  if (!token) return false;

  try {
    // Get the appropriate profile endpoint
    // const infoResponse = await axios.get(`${API_URL}/`);
    // const infoData = infoResponse.data;
    const profileEndpoint = "/api/users/profile";

    // Try to get profile with current token
    const response = await axios.get(`${API_URL}${profileEndpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response.status === 200;
  } catch (error) {
    console.error('Token validation error:', error);
    return false;
  }
};

// Helper function to get API endpoints using Axios
const getApiEndpoints = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    const data = response.data;
    console.log(data);
    return {
      signup: '/api/auth/register',
      signin: '/api/auth/login',
    };
  } catch (error) {
    console.error('Error fetching API info:', error);
    return {
      signup: '/api/auth/register',
      signin: '/api/local-auth/signin',
    };
  }
};

// Export reducer
export const authReducer = authSlice.reducer;
