'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthRedux from '@/hooks/useAuthRedux';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [hasChecked, setHasChecked] = useState(false);
  const { isLoading } = useAuthRedux();
  const router = useRouter();

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem('TOKEN_KEY');
    setToken(tokenFromStorage);
    setHasChecked(true); // we checked localStorage
    if (!tokenFromStorage) {
      router.push('/auth/login');
    }
  }, [router]);

  // Wait until we've checked the token
  if (isLoading || !hasChecked) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-2 text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!token) return null;

  return <>{children}</>;
};

export default ProtectedRoute;
