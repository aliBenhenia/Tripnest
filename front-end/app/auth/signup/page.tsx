'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AlertCircle, Loader2 } from 'lucide-react';
import useAuthRedux from '@/hooks/useAuthRedux';
import { motion } from 'framer-motion';
import { Form, Input, Button, Alert, Progress, message } from 'antd';

export default function SignupPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordChecks, setPasswordChecks] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [formError, setFormError] = useState('');
  const [form] = Form.useForm();

  const router = useRouter();
  const { signup, error } = useAuthRedux();

  // Sync external error from auth provider into AntD form
  useEffect(() => {
    if (error) {
      setFormError(error);
      // Optionally set specific field errors:
      if (error.toLowerCase().includes('email')) {
        form.setFields([
          { name: 'email', errors: [error] }
        ]);
      } else if (error.toLowerCase().includes('password')) {
        form.setFields([
          { name: 'password', errors: [error] }
        ]);
      } else if (error.toLowerCase().includes('name')) {
        form.setFields([
          { name: 'name', errors: [error] }
        ]);
      }
    }
  }, [error, form]);

  // Handle password strength on password field change
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    const checks = {
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
    };
    setPasswordChecks(checks);
    setPasswordStrength(Object.values(checks).filter(Boolean).length);
  };

  const passwordProgressColor = () => {
    switch (passwordStrength) {
      case 4: return 'success';
      case 3: return 'normal';
      case 2: return 'exception';
      default: return 'exception';
    }
  };

  // Custom validator for confirming passwords
  const validateConfirmPassword = (_: any, value: string) => {
    if (!value || form.getFieldValue('password') === value) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Passwords do not match'));
  };

  // On successful form submit
  const onFinish = async (values: any) => {
    setFormError('');
    setIsSubmitting(true);
    try {
      const success = await signup(values.name, values.email, values.password);
      if (success) {
        message.success('Account created successfully!');
        router.push('/auth/login');
      }
    } catch (err) {
      setFormError('Failed to create account. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container max-w-md mx-auto px-6 py-10 bg-white rounded-lg shadow-lg"
    >
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
        Create Your Account
      </h1>

      {formError && (
        <Alert
          showIcon
          type="error"
          message={formError}
          className="mb-6"
          icon={<AlertCircle />}
        />
      )}

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
        scrollToFirstError
      >
        <Form.Item
          label="Full Name"
          name="name"
          rules={[
            { required: true, message: 'Please enter your full name' },
            { min: 2, message: 'Name must be at least 2 characters' },
          ]}
        >
          <Input
            size="large"
            placeholder="John Doe"
            disabled={isSubmitting}
            autoComplete="name"
          />
        </Form.Item>

        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input
            size="large"
            placeholder="your@email.com"
            disabled={isSubmitting}
            autoComplete="email"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: 'Please enter your password' },
            { min: 6, message: 'Password must be at least 6 characters' },
          ]}
          hasFeedback
        >
          <Input.Password
            size="large"
            placeholder="********"
            onChange={onPasswordChange}
            disabled={isSubmitting}
            autoComplete="new-password"
          />
        </Form.Item>

        {/* Password strength progress */}
        {form.getFieldValue('password') && (
          <Progress
            percent={(passwordStrength / 4) * 100}
            showInfo={false}
            status={passwordProgressColor()}
            strokeWidth={6}
            className="mb-4"
          />
        )}

        <div className="grid grid-cols-2 gap-2 text-xs mb-6">
          <div className="flex items-center gap-1">
            <span
              className={`w-3 h-3 rounded-full ${
                passwordChecks.length ? 'bg-green-500' : 'bg-gray-300'
              }`}
            />
            At least 8 characters
          </div>
          <div className="flex items-center gap-1">
            <span
              className={`w-3 h-3 rounded-full ${
                passwordChecks.lowercase ? 'bg-green-500' : 'bg-gray-300'
              }`}
            />
            Lowercase letter
          </div>
          <div className="flex items-center gap-1">
            <span
              className={`w-3 h-3 rounded-full ${
                passwordChecks.uppercase ? 'bg-green-500' : 'bg-gray-300'
              }`}
            />
            Uppercase letter
          </div>
          <div className="flex items-center gap-1">
            <span
              className={`w-3 h-3 rounded-full ${
                passwordChecks.number ? 'bg-green-500' : 'bg-gray-300'
              }`}
            />
            Number
          </div>
        </div>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={['password']}
          hasFeedback
          rules={[
            { required: true, message: 'Please confirm your password' },
            { validator: validateConfirmPassword },
          ]}
        >
          <Input.Password
            size="large"
            placeholder="********"
            disabled={isSubmitting}
            autoComplete="new-password"
          />
        </Form.Item>

        <Form.Item>
          <motion.div
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              loading={isSubmitting}
            >
              Sign Up
            </Button>
          </motion.div>
        </Form.Item>
      </Form>

      <div className="mt-8 text-center text-gray-700">
        Already have an account?{' '}
        <Link href="/auth/login" className="text-blue-600 hover:underline font-medium">
          Log in
        </Link>
      </div>
    </motion.div>
  );
}
