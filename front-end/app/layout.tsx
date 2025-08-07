import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import BottomNavigation from "@/components/bottom-navigation"
import { ErrorBoundary } from "@/components/ErrorBoundary"
import { Toaster } from "@/components/ui/toaster"
import { Providers } from "@/lib/redux/provider"
import { ToastContainer } from 'react-toastify';
import 'antd/dist/reset.css'; // or 'antd/dist/antd.css' depending on your antd version
import TripPlannerButton from '@/components/TripPlannerButton';


// import 'leaflet/dist/leaflet.css';


// Optimize font loading
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true
})

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
}
export const viweport = {
  colorScheme: 'light',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/placeholder.svg"
          as="image"
          type="image/svg+xml"
        />
        {/* Add PWA meta tags */}
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
        {/* Main content section */}
        <main className="md:pt-16 pb-16 md:pb-0">
          {children}
        <TripPlannerButton />
        </main>

        {/* Bottom navigation */}
        <BottomNavigation />

        {/* Toast notifications */}
        <Toaster />
      </Providers>
    </div>
  </div>
</ErrorBoundary>

      </body>
    </html>
  )
}
