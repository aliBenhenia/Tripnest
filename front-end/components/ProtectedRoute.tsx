'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useAuthRedux from '@/hooks/useAuthRedux';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('TOKEN_KEY') : null;
  const { isLoading } = useAuthRedux();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/auth/login'); // Redirect to login page if not authenticated
    }
  }, [router]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, don't render children
  if (!token) {
    return null;
  }

  // If authenticated, render children
  return <>{children}</>;
};

export default ProtectedRoute;