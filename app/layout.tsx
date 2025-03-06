import { TourProvider } from '@/context/TourContext'
import { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travila - Travel Booking Platform',
  description: 'Book your next adventure with Travila',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <TourProvider>
          {children}
        </TourProvider>
      </body>
    </html>
  )
} 