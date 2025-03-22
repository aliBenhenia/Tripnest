import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slices/userSlice';
import { savedItemsReducer } from './slices/savedItemsSlice';
import { recentActivityReducer } from './slices/recentActivitySlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    savedItems: savedItemsReducer,
    recentActivity: recentActivityReducer,
  },
});

// Infer the RootState and AppDispatch types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 