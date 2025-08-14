"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Map, Compass, Heart, User, Bell, Menu, Globe, ChevronDown, LogOut, LogIn, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import useAuthRedux from "@/hooks/useAuthRedux"
import { useState, useEffect } from "react"
import { useAppSelector } from "@/lib/redux/hooks"
import { useRouter } from "next/navigation"
import { useAppDispatch } from "@/lib/redux/hooks";
import {setUserSuccess} from "@/lib/redux/slices/userSlice"
import axios from "axios";
import TripnestLogo from "./logo"
import NotificationButton from "@/components/notification"
// API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export default function BottomNavigation() {
  const pathname = usePathname()
  const { user: authUser, logout } = useAuthRedux()
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const router = useRouter()
  const dispatch = useAppDispatch();
  const token = typeof window !== 'undefined' ? localStorage.getItem('TOKEN_KEY') : null;
  useEffect(() => {
    if (token) {
      // fetch user profile and update Redux store 
      console.log("token", token)
      const fetchUserProfile = async () => {
        try {
          const response = await axios.get(`${API_URL}/api/users/profile`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          setIsAuthenticated(true);
          dispatch(setUserSuccess(response.data.data.user))
          console.log("user profile data", response.data)
        } catch (error) {
          setIsAuthenticated(false);
          console.error("Error fetching user profile:", error)
        }
      }
      
      fetchUserProfile()
    }
  },[pathname])
  // Get user from Redux store
  const reduxUser = useAppSelector(state => state.user.currentUser)
  
  // Use either Redux user or auth user
  const user = reduxUser || authUser
  
  const navigation = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Explore",
      href: "/explore",
      icon: Map,
    },
    {
      name: "Trips",
      href: "/trips",
      icon: Compass,
    },
    {
      name: "Saved",
      href: "/saved",
      icon: Heart,
    },
    {
      name: "Profile",
      href: isAuthenticated ? "/profile" : "/auth/login",
      icon: User,
    },
  ]

  // Get the number of saved items from Redux store
  const savedItems = useAppSelector(state => state.savedItems.items)
  const savedItemsCount = savedItems.length

  const handleLogout = () => {
    logout()
    setShowProfileMenu(false)
    setIsAuthenticated(false);
    // If the current page is one that requires authentication, redirect to home
    if (pathname.startsWith('/profile') || pathname.startsWith('/saved')) {
      router.push('/')
    }
  }

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu)
  }

  // Get user avatar URL
  const getAvatarUrl = () => {
    // First check the Redux state
    if (reduxUser?.avatar) {
      if (reduxUser.avatar === "default-avatar.png")
          return ("https://static.vecteezy.com/system/resources/previews/001/840/612/large_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg")
      return `${API_URL}${reduxUser.avatar}`
    } 
    // Then check auth context user data 
    else if (user?.avatar) {
      return `${API_URL}${user.avatar}`
    } 
    // Generate avatar from name if available
    else if (user?.name || reduxUser?.name) {
      const name = user?.name || reduxUser?.name || ''
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`
    }
    // Default fallback
    return "/images/default-avatar.png"
  }

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 flex justify-around py-2 md:hidden z-20">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center p-2 ${
                isActive ? "text-primary" : "text-gray-500"
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          )
        })}
      </div>

      {/* Enhanced Desktop Navigation */}
      <div className="hidden md:block fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Left section with logo and main nav */}
            <div className="flex items-center gap-8">
              <TripnestLogo />
              <nav className="flex gap-1">
                {navigation.slice(0, 3).map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href} 
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200
                      ${pathname === item.href 
                        ? "text-gray-900 font-medium relative after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-primary after:rounded-full" 
                        : "text-gray-600 hover:text-gray-900"}`}
                  >
                    <item.icon className={`h-4 w-4 transition-colors ${pathname === item.href ? 'text-primary' : ''}`} />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right section with actions */}
            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm text-gray-600 
                hover:text-gray-900 rounded-full transition-all duration-200 
                border border-gray-200 hover:border-primary/30 group
                hover:bg-gradient-to-r hover:from-primary/[0.03] hover:to-primary/[0.05]
                active:scale-[0.98]"
              >
                <Globe className="h-4 w-4 group-hover:text-primary transition-colors" />
                <span className="font-medium">EN</span>
                <ChevronDown className="h-4 w-4 opacity-50 group-hover:text-primary group-hover:opacity-100 transition-all" />
              </button>

              {/* Notifications */}
              <button className="relative"
              >
                {/* <Bell className="h-[18px] w-[18px] group-hover:text-primary transition-colors" /> */}
                <NotificationButton />
                {/* <span className="absolute -top-0.5 -right-0.5 h-5 w-5 bg-primary 
                  rounded-full text-[11px] font-medium flex items-center justify-center text-white 
                  border-2 border-white shadow-sm scale-100 group-hover:scale-110 
                  transition-transform group-hover:ring-2 ring-primary/20">
                  3
                </span> */}
              </button>

              {/* Saved Items */}
              <Link 
                href="/saved" 
                className={`relative p-2.5 rounded-full transition-all duration-200 
                  border group active:scale-[0.98]
                  ${pathname === "/saved" 
                    ? "text-primary border-primary bg-primary/[0.03]" 
                    : "text-gray-600 hover:text-gray-900 border-gray-200 hover:border-primary/30 hover:bg-gradient-to-r hover:from-primary/[0.03] hover:to-primary/[0.05]"}`}
              >
                <Heart className={`h-[18px] w-[18px] transition-colors
                  ${pathname === "/saved" ? "fill-primary/20" : "group-hover:text-primary"}`} />
                {savedItemsCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 h-5 w-5 bg-primary 
                    rounded-full text-[11px] font-medium flex items-center justify-center text-white 
                    border-2 border-white shadow-sm scale-100 group-hover:scale-110 
                    transition-transform group-hover:ring-2 ring-primary/20">
                    {savedItemsCount}
                  </span>
                )}
              </Link>

              <div className="h-6 w-px bg-gray-200 mx-1" />

              {/* CTA Button */}
              <Button 
                className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 
                  text-white font-medium px-7 py-2.5 rounded-full
                  shadow-[0_3px_16px_-5px_rgba(255,71,71,0.25)]
                  hover:shadow-[0_6px_24px_-3px_rgba(255,71,71,0.35)]
                  active:scale-[0.98] transition-all duration-200 group
                  before:absolute before:inset-0 before:bg-[linear-gradient(90deg,rgba(255,255,255,0.1),rgba(255,255,255,0.2))] 
                  before:translate-x-[-100%] before:animate-[shimmer_2s_infinite] 
                  after:absolute after:inset-0 after:bg-gradient-to-r 
                  after:from-white/0 after:via-white/20 after:to-white/0
                  after:opacity-0 hover:after:opacity-100 after:transition-opacity
                  after:duration-500 border-0"
              >
                <div className="relative flex items-center gap-2"
                onClick={() => router.push("/users")}>
                  <span className="relative z-10 text-sm">leaderboard</span>
                  <svg 
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14m-7-7 7 7-7 7"/>
                  </svg>
                </div>
              </Button>

              {/* Profile Menu */}
              <div className="relative">
                {isAuthenticated ? (
                  // Logged in user profile
                  <button 
                    onClick={toggleProfileMenu}
                    className={`flex items-center gap-2 p-1.5 rounded-full border transition-all duration-200 group
                      ${pathname === "/profile" 
                        ? "border-primary text-primary bg-primary/[0.03]" 
                        : "border-gray-200 text-gray-600 hover:text-gray-900 hover:border-primary/30 hover:bg-gradient-to-r hover:from-primary/[0.03] hover:to-primary/[0.05]"}`}
                  >
                    <img
                      src={getAvatarUrl()}
                      alt="Profile"
                      className="h-8 w-8 rounded-full ring-2 ring-transparent group-hover:ring-primary/20 transition-all object-cover"
                    />
                    <Menu className="h-4 w-4 group-hover:text-primary transition-colors" />
                  </button>
                ) : (
                  // Login/Register button for non-authenticated users
                  <Link
                    href="/auth/login"
                    className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200
                      border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-primary/30 
                      hover:bg-gradient-to-r hover:from-primary/[0.03] hover:to-primary/[0.05]"
                  >
                    <LogIn className="h-4 w-4" />
                    <span className="font-medium">Login</span>
                  </Link>
                )}

                {/* Profile dropdown menu */}
                {showProfileMenu && isAuthenticated && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                    </div>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left flex items-center gap-2"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      <User className="h-4 w-4" />
                      <span>Your Profile</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left flex items-center gap-2"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign out</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for desktop navigation */}
      <div className="hidden md:block h-16"></div>
    </>
  )
}

