'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full bg-gray-100 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-6 lg:gap-8">
          {/* About Section */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-medium text-gray-900 mb-3 text-sm sm:text-base">About</h3>
            <ul className="space-y-2">
              <li>
                <p className="text-xs sm:text-sm text-gray-600">
                  Morocco Travel Explorer helps you plan trips, save stops, and pack smarter.
                </p>
              </li>
            </ul>
          </div>

          {/* Explore Section */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-medium text-gray-900 mb-3 text-sm sm:text-base">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/explore" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Explore Places</Link></li>
              <li><Link href="/city/chefchaouen" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">City Guides</Link></li>
            </ul>
          </div>

          {/* Plan Section */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-medium text-gray-900 mb-3 text-sm sm:text-base">Plan</h3>
            <ul className="space-y-2">
              <li><Link href="/planner" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Trip Planner</Link></li>
              <li><Link href="/trips" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Trip Stops</Link></li>
              <li><Link href="/saved" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Saved Items</Link></li>
            </ul>
          </div>

          {/* Account Section */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-medium text-gray-900 mb-3 text-sm sm:text-base">Account</h3>
            <ul className="space-y-2">
              <li><Link href="/auth/login" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Log in</Link></li>
              <li><Link href="/auth/signup" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Create account</Link></li>
              <li><Link href="/profile" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Profile</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:flex sm:flex-wrap sm:justify-between gap-6 sm:gap-4 items-center">
            <div className="flex justify-center sm:justify-start items-center gap-3">
              <Link href="https://facebook.com" className="text-gray-500 hover:text-gray-700">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-500 hover:text-gray-700">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-500 hover:text-gray-700">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link href="https://youtube.com" className="text-gray-500 hover:text-gray-700">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            © 2026 Morocco Travel Explorer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}