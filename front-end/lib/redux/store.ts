import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './slices/userSlice';
import { savedItemsReducer } from './slices/savedItemsSlice';
import { recentActivityReducer } from './slices/recentActivitySlice';

// Create a root reducer with reset capability
const appReducer = combineReducers({
  user: userReducer,
  savedItems: savedItemsReducer,
  recentActivity: recentActivityReducer,
});

// Add a root level reducer that can clear all state on logout
export const RESET_STATE = 'RESET_STATE';

const rootReducer = (state: any, action: any) => {
  // When RESET_STATE action is dispatched, return a fresh state
  if (action.type === RESET_STATE) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the RootState and AppDispatch types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 