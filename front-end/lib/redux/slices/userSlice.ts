import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define user type
export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
  createdAt: string;
};

// Define initial state
interface UserState {
  currentUser: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

// Create user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setUserSuccess: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setUserFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateUserAvatar: (state, action: PayloadAction<string | null>) => {
      if (state.currentUser) {
        state.currentUser.avatar = action.payload;
      }
    },
    updateUserProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state.currentUser) {
        state.currentUser = { ...state.currentUser, ...action.payload };
      }
    },
    clearUser: (state) => {
      state.currentUser = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});

// Export actions and reducer
export const { 
  setUserStart, 
  setUserSuccess, 
  setUserFailure, 
  updateUserAvatar, 
  updateUserProfile, 
  clearUser 
} = userSlice.actions;

export const userReducer = userSlice.reducer; 