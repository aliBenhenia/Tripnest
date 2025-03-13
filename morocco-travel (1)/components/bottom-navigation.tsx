"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Heart, User } from "lucide-react"

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
      icon: Search,
    },
    {
      name: "Favorites",
      href: "/favorites",
      icon: Heart,
    },
    {
      name: "Profile",
      href: "/profile",
      icon: User,
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
      <nav className="flex justify-around">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center p-2 min-w-[64px] ${
                isActive 
                  ? "text-blue-600" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <item.icon className={`w-6 h-6 ${
                isActive ? "fill-current" : ""
              }`} />
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
} 