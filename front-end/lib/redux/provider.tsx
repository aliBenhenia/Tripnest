'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { ReactNode, useEffect } from 'react';
import { initializeAuth } from './slices/authSlice';
import { ToastContainer } from 'react-toastify';
export function Providers({ children }: { children: ReactNode }) {
  // Initialize auth state from localStorage when the app loads
  useEffect(() => {
    store.dispatch(initializeAuth());
  }, []);
  const token = typeof window !== 'undefined' ? localStorage.getItem('TOKEN_KEY') : null;
  useEffect(() => {
    if (token) {
      // fetch user profile and update Redux store 
      
      
    }
  }, [token]);

  return(
      <Provider store={store}>
        <ToastContainer />
        {children}
      </Provider>
   );
}