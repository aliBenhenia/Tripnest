'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full bg-gray-100 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-6 lg:gap-8">
          {/* About Section */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-medium text-gray-900 mb-3 text-sm sm:text-base">About Tripnest</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">About Us</Link></li>
              <li><Link href="/press" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Press</Link></li>
              <li><Link href="/policies" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Resources and Policies</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Careers</Link></li>
              <li><Link href="/investor-relations" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Investor Relations</Link></li>
              <li><Link href="/trust" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Trust & Safety</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Contact us</Link></li>
              <li><Link href="/accessibility" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Accessibility Statement</Link></li>
              <li><Link href="/bug-bounty" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Bug Bounty Program</Link></li>
            </ul>
          </div>

          {/* Explore Section */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-medium text-gray-900 mb-3 text-sm sm:text-base">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/write-review" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Write a review</Link></li>
              <li><Link href="/add-place" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Add a Place</Link></li>
              <li><Link href="/join" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Join</Link></li>
              <li><Link href="/travelers-choice" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Travelers' Choice</Link></li>
              <li><Link href="/help" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Help Center</Link></li>
              <li><Link href="/stories" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Travel Stories</Link></li>
            </ul>
          </div>

          {/* Do Business With Us Section */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-medium text-gray-900 mb-3 text-sm sm:text-base">Do Business With Us</h3>
            <ul className="space-y-2">
              <li><Link href="/owners" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Owners</Link></li>
              <li><Link href="/business" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Business Advantage</Link></li>
              <li><Link href="/sponsored" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Sponsored Placements</Link></li>
              <li><Link href="/advertise" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Advertise with Us</Link></li>
              <li><Link href="/api" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Access our Content API</Link></li>
              <li><Link href="/affiliate" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Become an Affiliate</Link></li>
            </ul>

            <h3 className="font-medium text-gray-900 mt-6 mb-3 text-sm sm:text-base">Get The App</h3>
            <ul className="space-y-2">
              <li><Link href="/ios" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">iPhone App</Link></li>
              <li><Link href="/android" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Android App</Link></li>
            </ul>
          </div>

          {/* Tripnest Sites Section */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-medium text-gray-900 mb-3 text-sm sm:text-base">Tripnest Sites</h3>
            <ul className="space-y-2">
              <li>
                <p className="text-xs sm:text-sm text-gray-600">Book the best restaurants with <Link href="/thefork" className="text-gray-900 hover:underline">TheFork</Link></p>
              </li>
              <li>
                <p className="text-xs sm:text-sm text-gray-600">Book tours and attraction tickets on <Link href="/viator" className="text-gray-900 hover:underline">Viator</Link></p>
              </li>
              <li>
                <p className="text-xs sm:text-sm text-gray-600">Read cruise reviews on <Link href="/cruise-critic" className="text-gray-900 hover:underline">Cruise Critic</Link></p>
              </li>
              <li>
                <p className="text-xs sm:text-sm text-gray-600">Get airline seating charts on <Link href="/seat-guru" className="text-gray-900 hover:underline">Seat Guru</Link></p>
              </li>
              <li>
                <p className="text-xs sm:text-sm text-gray-600">Search for holiday rentals on <Link href="/holiday-lettings" className="text-gray-900 hover:underline">Holiday Lettings</Link></p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          {/* Links and Social Media */}
          <div className="grid grid-cols-1 sm:flex sm:flex-wrap sm:justify-between gap-6 sm:gap-4 items-center">
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 items-center text-center sm:text-left">
              <Link href="/terms" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Terms of Use</Link>
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Privacy and Cookies Statement</Link>
              <Link href="/cookie-consent" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Cookie consent</Link>
              <Link href="/sitemap" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Site Map</Link>
              <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">How the site works</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">Contact us</Link>
            </div>

            <div className="flex justify-center sm:justify-end items-center gap-3">
              <Link href="https://facebook.com" className="text-gray-500 hover:text-gray-700">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-500 hover:text-gray-700">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link href="https://pinterest.com" className="text-gray-500 hover:text-gray-700">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.217-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </Link>
              <Link href="https://instagram.com" className="text-gray-500 hover:text-gray-700">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link href="https://youtube.com" className="text-gray-500 hover:text-gray-700">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>

          {/* Copyright and Selectors */}
          <div className="mt-6 sm:mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">© 2024 Tripnest LLC All rights reserved.</p>
            <div className="flex items-center gap-3">
              <select className="bg-transparent text-xs sm:text-sm text-gray-600 border border-gray-300 rounded px-2 py-1">
                <option value="USD">$ USD</option>
              </select>
              <select className="bg-transparent text-xs sm:text-sm text-gray-600 border border-gray-300 rounded px-2 py-1">
                <option value="US">United States</option>
              </select>
            </div>
          </div>

          {/* Region Text */}
          <p className="mt-4 text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            This is the version of our website addressed to speakers of English in the United States. If you are a resident of another country or region, please select the appropriate version of Tripnest for your country or region in the drop-down menu.
          </p>
        </div>
      </div>
    </footer>
  )
} 