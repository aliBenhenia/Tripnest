import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define activity item type
export type ActivityItem = {
  id: string;
  title: string;
  description: string;
  image?: string;
  type: 'view' | 'search' | 'booking' | 'review' | 'save';
  timestamp: string;
  referenceId?: string;
  referenceType?: 'experience' | 'place' | 'city';
};

// Define initial state
interface ActivityState {
  activities: ActivityItem[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ActivityState = {
  activities: [],
  isLoading: false,
  error: null,
};

// Create recent activity slice
const recentActivitySlice = createSlice({
  name: 'recentActivity',
  initialState,
  reducers: {
    fetchActivitiesStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchActivitiesSuccess: (state, action: PayloadAction<ActivityItem[]>) => {
      state.activities = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchActivitiesFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addActivity: (state, action: PayloadAction<ActivityItem>) => {
      state.activities.unshift(action.payload); // Add to beginning (most recent first)
      // Keep only 50 most recent activities
      if (state.activities.length > 50) {
        state.activities = state.activities.slice(0, 50);
      }
    },
    clearActivities: (state) => {
      state.activities = [];
    },
  },
});

// Export actions and reducer
export const { 
  fetchActivitiesStart, 
  fetchActivitiesSuccess, 
  fetchActivitiesFailure, 
  addActivity, 
  clearActivities 
} = recentActivitySlice.actions;

export const recentActivityReducer = recentActivitySlice.reducer; 