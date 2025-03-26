'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { ReactNode, useEffect } from 'react';
import { initializeAuth } from './slices/authSlice';

export function Providers({ children }: { children: ReactNode }) {
  // Initialize auth state from localStorage when the app loads
  useEffect(() => {
    store.dispatch(initializeAuth());
  }, []);

  return(
      <Provider store={store}>
        {children}
      </Provider>
   );
}