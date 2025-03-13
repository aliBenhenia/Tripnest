"use client"

import { User } from "lucide-react"

export default function ProfilePage() {
  return (
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
  )
} 