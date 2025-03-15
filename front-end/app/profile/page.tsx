"use client"

import { User, Settings, CreditCard, Bell, Lock, HelpCircle, LogOut, ChevronRight, Globe, ChevronDown, Heart } from "lucide-react"
import Link from "next/link"

const menuItems = [
  {
    title: "Account Settings",
    icon: Settings,
    notifications: 2,
  },
  {
    title: "Payment Methods",
    icon: CreditCard,
    notifications: 1,
  },
  {
    title: "Notifications",
    icon: Bell,
    notifications: 5,
  },
  {
    title: "Privacy & Security",
    icon: Lock,
    notifications: 0,
  },
  {
    title: "Help Center",
    icon: HelpCircle,
    notifications: 0,
  },
]

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto min-h-screen bg-white">
      <div className="space-y-8 p-6 md:p-8">
        {/* Header with Actions */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Profile</h1>
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <button 
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm text-gray-600 hover:text-gray-900 
                rounded-full transition-all duration-200 border border-gray-200 
                hover:border-primary/30 hover:shadow-[0_2px_12px_-3px_rgba(0,0,0,0.05)] 
                active:scale-[0.98] group"
            >
              <Globe className="h-4 w-4 group-hover:text-primary transition-colors" />
              <span className="font-medium">EN</span>
              <ChevronDown className="h-4 w-4 opacity-50 group-hover:text-primary transition-colors" />
            </button>

            {/* Notifications */}
            <button 
              className="relative p-2.5 text-gray-600 hover:text-gray-900 
                rounded-full transition-all duration-200 border border-gray-200 
                hover:border-primary/30 hover:shadow-[0_2px_12px_-3px_rgba(0,0,0,0.05)] 
                active:scale-[0.98] group"
            >
              <Bell className="h-[18px] w-[18px] group-hover:text-primary transition-colors" />
              <span className="absolute -top-0.5 -right-0.5 h-5 w-5 bg-primary rounded-full 
                text-[11px] font-medium flex items-center justify-center text-white 
                border-2 border-white shadow-sm scale-100 group-hover:scale-110 transition-transform">
                3
              </span>
            </button>

            {/* Saved Items */}
            <Link 
              href="/saved" 
              className="relative p-2.5 text-gray-600 hover:text-gray-900 
                rounded-full transition-all duration-200 border border-gray-200 
                hover:border-primary/30 hover:shadow-[0_2px_12px_-3px_rgba(0,0,0,0.05)] 
                active:scale-[0.98] group"
            >
              <Heart className="h-[18px] w-[18px] group-hover:text-primary transition-colors" />
              <span className="absolute -top-0.5 -right-0.5 h-5 w-5 bg-primary rounded-full 
                text-[11px] font-medium flex items-center justify-center text-white 
                border-2 border-white shadow-sm scale-100 group-hover:scale-110 transition-transform">
                2
              </span>
            </Link>

            <div className="h-6 w-px bg-gray-200 mx-1 hidden sm:block" />
          </div>
        </div>

        <div className="space-y-6 p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-8 w-8 text-gray-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Ellison</h2>
              <p className="text-gray-500">ellison@example.com</p>
            </div>
          </div>

          <div className="space-y-1">
            <button className="w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50">
              <span className="font-medium">Account Settings</span>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            <button className="w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50">
              <span className="font-medium">Payment Methods</span>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            <button className="w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50">
              <span className="font-medium">Notifications</span>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            <button className="w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50">
              <span className="font-medium">Privacy & Security</span>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            <button className="w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50">
              <span className="font-medium">Help Center</span>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          <div className="pt-4 border-t">
            <button className="w-full py-3 text-red-600 font-medium">Log Out</button>
          </div>
        </div>
      </div>
    </div>
  )
} 