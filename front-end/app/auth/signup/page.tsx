'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { AlertCircle, Loader2, CheckCircle2 } from 'lucide-react';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  
  // Password strength
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordChecks, setPasswordChecks] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false
  });
  
  const router = useRouter();
  const { signup, error } = useAuth();

  // Handle errors from auth provider
  useEffect(() => {
    if (error) {
      // Parse specific error types
      if (error.toLowerCase().includes('email')) {
        setEmailError(error);
      } else if (error.toLowerCase().includes('password')) {
        setPasswordError(error);
      } else if (error.toLowerCase().includes('name')) {
        setNameError(error);
      } else {
        setFormError(error);
      }
    }
  }, [error]);

  // Check password strength
  useEffect(() => {
    const checks = {
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password)
    };
    
    setPasswordChecks(checks);
    
    // Calculate strength (0-4)
    const strength = Object.values(checks).filter(Boolean).length;
    setPasswordStrength(strength);
    
  }, [password]);

  const validateForm = () => {
    let isValid = true;
    
    // Reset all errors
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setFormError('');
    
    // Validate name
    if (!name.trim()) {
      setNameError('Name is required');
      isValid = false;
    }
    
    // Validate email
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!email.includes('@') || !email.includes('.')) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }
    
    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    }
    
    // Validate password confirmation
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }
    
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const success = await signup(name, email, password);
      if (success) {
        router.push('/'); // Redirect to home page after successful signup
      }
    } catch (err) {
      console.error('Signup error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Create Your Account</h1>
      
      {formError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
          <p className="text-red-700">{formError}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError('');
            }}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              nameError 
                ? 'border-red-300 focus:ring-red-200' 
                : 'border-gray-300 focus:ring-blue-500'
            }`}
            placeholder="John Doe"
          />
          {nameError && (
            <p className="mt-1 text-sm text-red-600">{nameError}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              emailError 
                ? 'border-red-300 focus:ring-red-200' 
                : 'border-gray-300 focus:ring-blue-500'
            }`}
            placeholder="your@email.com"
          />
          {emailError && (
            <p className="mt-1 text-sm text-red-600">{emailError}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError('');
            }}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              passwordError 
                ? 'border-red-300 focus:ring-red-200' 
                : 'border-gray-300 focus:ring-blue-500'
            }`}
            placeholder="********"
          />
          {passwordError && (
            <p className="mt-1 text-sm text-red-600">{passwordError}</p>
          )}
          
          {/* Password strength indicator */}
          {password.length > 0 && (
            <div className="mt-2">
              <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`flex flex-col justify-center rounded-full ${
                    passwordStrength === 0 ? 'bg-red-500 w-1/4' :
                    passwordStrength === 1 ? 'bg-red-500 w-1/4' : 
                    passwordStrength === 2 ? 'bg-yellow-500 w-2/4' : 
                    passwordStrength === 3 ? 'bg-yellow-500 w-3/4' : 
                    'bg-green-500 w-full'
                  }`}
                ></div>
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2 text-xs">
                <div className="flex items-center">
                  <div className={`w-3 h-3 mr-1.5 rounded-full ${passwordChecks.length ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span>At least 8 characters</span>
                </div>
                <div className="flex items-center">
                  <div className={`w-3 h-3 mr-1.5 rounded-full ${passwordChecks.lowercase ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span>Lowercase letter</span>
                </div>
                <div className="flex items-center">
                  <div className={`w-3 h-3 mr-1.5 rounded-full ${passwordChecks.uppercase ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span>Uppercase letter</span>
                </div>
                <div className="flex items-center">
                  <div className={`w-3 h-3 mr-1.5 rounded-full ${passwordChecks.number ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span>Number</span>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordError('');
            }}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              confirmPasswordError 
                ? 'border-red-300 focus:ring-red-200' 
                : 'border-gray-300 focus:ring-blue-500'
            }`}
            placeholder="********"
          />
          {confirmPasswordError && (
            <p className="mt-1 text-sm text-red-600">{confirmPasswordError}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2.5 px-4 rounded-md text-white font-medium flex items-center justify-center ${
            isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating Account...
            </>
          ) : (
            'Sign Up'
          )}
        </button>
      </form>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-blue-600 hover:underline font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
} 