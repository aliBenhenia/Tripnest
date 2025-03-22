import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define saved item type
export type SavedItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  type: 'experience' | 'place' | 'city';
  savedAt: string;
};

// Define initial state
interface SavedItemsState {
  items: SavedItem[];
  isLoading: boolean;
  error: string | null;
}

const initialState: SavedItemsState = {
  items: [],
  isLoading: false,
  error: null,
};

// Create saved items slice
const savedItemsSlice = createSlice({
  name: 'savedItems',
  initialState,
  reducers: {
    fetchSavedItemsStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchSavedItemsSuccess: (state, action: PayloadAction<SavedItem[]>) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchSavedItemsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addSavedItem: (state, action: PayloadAction<SavedItem>) => {
      state.items.push(action.payload);
    },
    removeSavedItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearSavedItems: (state) => {
      state.items = [];
    },
  },
});

// Export actions and reducer
export const { 
  fetchSavedItemsStart, 
  fetchSavedItemsSuccess, 
  fetchSavedItemsFailure, 
  addSavedItem, 
  removeSavedItem, 
  clearSavedItems 
} = savedItemsSlice.actions;

export const savedItemsReducer = savedItemsSlice.reducer; 