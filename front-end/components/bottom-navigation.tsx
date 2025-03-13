"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Map, Compass, Heart, User, Bell, Menu, Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BottomNavigation() {
  const pathname = usePathname()
  
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
      href: "/profile",
      icon: User,
    },
  ]

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
              <Link 
                href="/" 
                className="flex items-center transition-transform duration-200 hover:scale-105"
              >
                <img 
                  src="https://travila-nextjs-landing.vercel.app/assets/imgs/template/logo-w.svg" 
                  alt="Travila" 
                  className="w-28 h-10 filter brightness-0" 
                />
              </Link>
              <nav className="flex gap-1">
                {navigation.slice(0, 3).map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href} 
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200
                      ${pathname === item.href 
                        ? "text-black font-medium bg-primary shadow-lg shadow-primary/25 scale-105" 
                        : "text-gray-600 hover:text-black hover:bg-gray-50"}`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right section with actions */}
            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-full transition-colors">
                <Globe className="h-4 w-4" />
                <span>EN</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </button>

              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-full transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary rounded-full text-[11px] text-black font-medium flex items-center justify-center shadow-lg shadow-primary/25">3</span>
              </button>

              {/* Saved Items */}
              <Link 
                href="/saved" 
                className={`relative p-2 rounded-full transition-all duration-200
                  ${pathname === "/saved" 
                    ? "text-black bg-primary shadow-lg shadow-primary/25 scale-105" 
                    : "text-gray-600 hover:text-black hover:bg-gray-50"}`}
              >
                <Heart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary rounded-full text-[11px] text-black font-medium flex items-center justify-center shadow-lg shadow-primary/25">2</span>
              </Link>

              <div className="h-6 w-px bg-gray-200 mx-1" />

              {/* CTA Button */}
              <Button className="bg-black hover:bg-black/90 text-primary font-medium px-6 rounded-full shadow-lg hover:scale-105 transition-all duration-200">
                List Your Property
              </Button>

              {/* Profile Menu */}
              <Link 
                href="/profile" 
                className={`flex items-center gap-2 p-1.5 rounded-full border-2 transition-all duration-200
                  ${pathname === "/profile" 
                    ? "border-primary shadow-lg shadow-primary/25 scale-105" 
                    : "border-gray-200 hover:border-primary"}`}
              >
                <img
                  src="https://avatars.githubusercontent.com/u/95689141?s=400&u=275826ef98503225cfa203907197ad854e0111a1&v=4"
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
                <Menu className="h-4 w-4 text-gray-600" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for desktop navigation */}
      <div className="hidden md:block h-16"></div>
    </>
  )
}

