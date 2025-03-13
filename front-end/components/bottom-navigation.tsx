"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Map, Compass, Heart, User } from "lucide-react"

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

      {/* Desktop Top Navigation */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 bg-white border-b border-gray-200 px-8 lg:px-16 py-4 items-center justify-between z-10">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold text-primary">
            MoroccoTravel
          </Link>
          <div className="flex gap-6">
            <Link 
              href="/" 
              className={pathname === "/" ? "text-primary font-medium" : "text-gray-500 hover:text-primary"}
            >
              Home
            </Link>
            <Link 
              href="/explore" 
              className={pathname === "/explore" ? "text-primary font-medium" : "text-gray-500 hover:text-primary"}
            >
              Explore
            </Link>
            <Link 
              href="/trips" 
              className={pathname === "/trips" ? "text-primary font-medium" : "text-gray-500 hover:text-primary"}
            >
              Trips
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            href="/saved" 
            className={pathname === "/saved" ? "text-primary" : "text-gray-500 hover:text-primary"}
          >
            <Heart className="h-6 w-6" />
          </Link>
          <Link 
            href="/profile" 
            className={pathname === "/profile" ? "text-primary" : "text-gray-500 hover:text-primary"}
          >
            <User className="h-6 w-6" />
          </Link>
        </div>
      </div>

      {/* Spacer for desktop navigation */}
      <div className="hidden md:block h-16"></div>
    </>
  )
}

