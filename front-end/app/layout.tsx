import type React from "react";
import { Suspense } from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BottomNavigation from "@/components/bottom-navigation";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Providers } from "@/lib/redux/provider";
import TripPlannerButton from '@/components/TripPlannerButton';
import { Toaster } from 'react-hot-toast';
import { Skeleton } from 'antd';

// Optimize font loading
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  title: "Morocco Travel Explorer",
  description: "Explore the beautiful cities and experiences of Morocco. Find the best destinations, accommodations, and activities for your next trip.",
  generator: 'v0dev',
  applicationName: 'Morocco Travel Explorer',
  keywords: ['morocco', 'travel', 'tourism', 'cities', 'experiences', 'destinations'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Morocco Travel Explorer',
    description: 'Explore the beautiful cities and experiences of Morocco',
    siteName: 'Morocco Travel Explorer',
  },
};

export const viewport = {
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// Antd-based Skeleton Loading Component
const PageSkeleton = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
    <div className="max-w-6xl mx-auto">
      {/* Header skeleton */}
      <Skeleton active paragraph={{ rows: 0 }} className="mb-8 mt-6 w-1/3" />
      
      {/* Navigation tabs skeleton */}
      <div className="flex space-x-2 mb-8">
        <Skeleton.Button active size="large" className="w-24" />
        <Skeleton.Button active size="large" className="w-32" />
        <Skeleton.Button active size="large" className="w-28" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content skeleton */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <Skeleton active avatar={{ size: 128 }} paragraph={{ rows: 3 }} />
          </div>
        </div>
        
        {/* Sidebar skeleton */}
        <div className="space-y-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-2xl shadow-lg p-6" >
              <Skeleton active paragraph={{ rows: 3 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link
          rel="preload"
          href="/placeholder.svg"
          as="image"
          type="image/svg+xml"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-screen bg-gray-100">
        <ErrorBoundary>
          <div className="min-h-screen w-full bg-white text-black">
            <div className="container mx-auto px-4 md:px-6">
              <Providers>
                <main className="md:pt-16 pb-16 md:pb-0">
                  <Suspense fallback={<PageSkeleton />}>
                    {children}
                  </Suspense>
                  <TripPlannerButton />
                </main>
                <BottomNavigation />
                <Toaster position="top-center" />
              </Providers>
            </div>
          </div>
        </ErrorBoundary>
      </body>
    </html>
  )
}