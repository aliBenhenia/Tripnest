import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import BottomNavigation from "@/components/bottom-navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Morocco Travel Explorer",
  description: "Explore the beautiful cities and experiences of Morocco",
  generator: 'v0dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gray-100 md:pt-16 pb-16 md:pb-0">{children}</main>
        <BottomNavigation />
      </body>
    </html>
  )
}



import './globals.css'