'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import useAuthRedux from '@/hooks/useAuthRedux';
import { AlertCircle, Loader2, Eye, EyeOff } from 'lucide-react';
import { useAppDispatch } from '@/lib/redux/hooks';
import { setUserSuccess } from '@/lib/redux/slices/userSlice';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import debounce from 'lodash.debounce';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [emailChecking, setEmailChecking] = useState(false);
  const [emailAvailable, setEmailAvailable] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formError, setFormError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get('returnUrl') || '/';
  const { login, error, isAuthenticated } = useAuthRedux();

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isAuthenticated) {
      router.push(returnUrl);
    }
  }, [isAuthenticated, router, returnUrl]);

  useEffect(() => {
    if (error) {
      setFormError(error);
      if (formRef.current) {
        formRef.current.classList.remove('animate-shake');
        void formRef.current.offsetWidth;
        formRef.current.classList.add('animate-shake');
      }
    }
  }, [error]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const minLength = 8;
    const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    return password.length >= minLength && strongPasswordRegex.test(password);
  };

  const checkEmailExists = useRef(
    debounce(async (email: string) => {
      if (!validateEmail(email)) {
        setEmailError('Invalid email format');
        setEmailAvailable(null);
        setEmailChecking(false);
        return;
      }

      setEmailChecking(true);
      setEmailError('');
      setEmailAvailable(null);

      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
        const response = await axios.post(`${API_URL}/api/users/check-email`, { email });
        const exists = response.data.exists;

        setEmailAvailable(exists);
        if (!exists) {
          setEmailError('Email not registered. Please sign up.');
        }
      } catch {
        setEmailError('Error checking email availability');
      } finally {
        setEmailChecking(false);
      }
    }, 700)
  ).current;

  useEffect(() => {
    if (email.trim() === '') {
      setEmailError('');
      setEmailAvailable(null);
      setEmailChecking(false);
      checkEmailExists.cancel();
      return;
    }
    checkEmailExists(email);
  }, [email, checkEmailExists]);

  const validateForm = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');
    setFormError('');

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    } else if (emailAvailable === false) {
      setEmailError('Email not registered');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } 
    // else if (!validatePassword(password)) {
    //   setPasswordError('Password must be at least 8 characters and include letters & numbers');
    //   isValid = false;
    // }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      if (formRef.current) {
        formRef.current.classList.remove('animate-shake');
        void formRef.current.offsetWidth;
        formRef.current.classList.add('animate-shake');
      }
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    try {
      const success = await login(email, password, rememberMe);

      if (success) {
        const token = localStorage.getItem('TOKEN_KEY');
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

        try {
          const response = await axios.get(`${API_URL}/api/users/profile`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          dispatch(setUserSuccess(response.data.data.user));
        } catch (err) {
          console.error('Profile fetch failed', err);
        }

        router.push(returnUrl);
      } else {
        setFormError('Invalid email or password');
        if (formRef.current) {
          formRef.current.classList.remove('animate-shake');
          void formRef.current.offsetWidth;
          formRef.current.classList.add('animate-shake');
        }
      }
    } catch {
      setFormError('Unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-8"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-6">
          Welcome back!
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6"
          aria-live="assertive"
          aria-atomic="true"
        >
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email address
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
                aria-invalid={!!emailError}
                aria-describedby="email-error"
                required
                className={`peer block w-full rounded-md border px-3 py-2 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                transition-colors duration-300
                ${emailError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'}`}
              />
              {emailChecking && (
                <Loader2
                  className="absolute right-3 top-2.5 h-5 w-5 text-indigo-500 animate-spin"
                  aria-label="Checking email"
                />
              )}
              {!emailChecking && emailAvailable && !emailError && (
                <span
                  role="img"
                  aria-label="Email exists"
                  className="absolute right-3 top-2.5 text-green-500 text-lg select-none"
                >
                  ✓
                </span>
              )}
            </div>
            <AnimatePresence>
              {emailError && (
                <motion.p
                  id="email-error"
                  className="mt-1 text-sm text-red-600 flex items-center"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                >
                  <AlertCircle className="mr-1" /> {emailError}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-invalid={!!passwordError}
                aria-describedby="password-error"
                required
                className={`peer block w-full rounded-md border px-3 py-2 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                transition-colors duration-300
                ${passwordError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            <AnimatePresence>
              {passwordError && (
                <motion.p
                  id="password-error"
                  className="mt-1 text-sm text-red-600 flex items-center"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                >
                  <AlertCircle className="mr-1" /> {passwordError}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500'
              } transition-colors duration-300`}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                  Signing in...
                </>
              ) : (
                'Sign in'
              )}
            </button>
          </div>

          {/* General Form Error */}
          <AnimatePresence>
            {formError && (
              <motion.div
                role="alert"
                className="rounded-md bg-red-50 p-3 text-red-700 text-center text-sm font-semibold"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
              >
                {formError}
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          New here?{' '}
          <Link
            href="/auth/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
          >
            Create an account
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
