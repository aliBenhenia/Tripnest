"use client"

import { useState } from "react"
import { Home, Map, Compass, Heart, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState("home")

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 flex justify-around py-2 md:hidden z-20">
        <button
          onClick={() => handleTabClick("home")}
          className={`flex flex-col items-center p-2 ${activeTab === "home" ? "text-primary" : "text-gray-500"}`}
        >
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button
          onClick={() => handleTabClick("explore")}
          className={`flex flex-col items-center p-2 ${activeTab === "explore" ? "text-primary" : "text-gray-500"}`}
        >
          <Map className="h-6 w-6" />
          <span className="text-xs mt-1">Explore</span>
        </button>
        <button
          onClick={() => handleTabClick("trips")}
          className={`flex flex-col items-center p-2 ${activeTab === "trips" ? "text-primary" : "text-gray-500"}`}
        >
          <Compass className="h-6 w-6" />
          <span className="text-xs mt-1">Trips</span>
        </button>
        <button
          onClick={() => handleTabClick("saved")}
          className={`flex flex-col items-center p-2 ${activeTab === "saved" ? "text-primary" : "text-gray-500"}`}
        >
          <Heart className="h-6 w-6" />
          <span className="text-xs mt-1">Saved</span>
        </button>
        <button
          onClick={() => handleTabClick("profile")}
          className={`flex flex-col items-center p-2 ${activeTab === "profile" ? "text-primary" : "text-gray-500"}`}
        >
          <User className="h-6 w-6" />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>

      {/* Mobile Tab Content */}
      {activeTab !== "home" && (
        <div className="fixed inset-0 bg-white z-10 pt-16 pb-20 overflow-y-auto md:hidden">
          <div className="p-4">
            {activeTab === "explore" && <ExploreContent />}
            {activeTab === "trips" && <TripsContent />}
            {activeTab === "saved" && <SavedContent />}
            {activeTab === "profile" && <ProfileContent />}
          </div>
        </div>
      )}

      {/* Desktop Top Navigation */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 bg-white border-b border-gray-200 px-8 lg:px-16 py-4 items-center justify-between z-10">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold text-primary">
            MoroccoTravel
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-primary font-medium">
              Home
            </Link>
            <Link href="#" className="text-gray-500 hover:text-primary">
              Explore
            </Link>
            <Link href="#" className="text-gray-500 hover:text-primary">
              Destinations
            </Link>
            <Link href="#" className="text-gray-500 hover:text-primary">
              Experiences
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-gray-500 hover:text-primary">
            <Heart className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-primary">
            <User className="h-6 w-6" />
          </Link>
        </div>
      </div>

      {/* Spacer for desktop navigation */}
      <div className="hidden md:block h-16"></div>
    </>
  )
}

// Demo content components
function ExploreContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Explore</h2>
        <button className="text-primary text-sm">View Map</button>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary"
          placeholder="Search destinations, activities..."
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Popular Destinations</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Marrakech", image: "/placeholder.svg?height=200&width=300&text=Marrakech" },
            { name: "Fes", image: "/placeholder.svg?height=200&width=300&text=Fes" },
            { name: "Casablanca", image: "/placeholder.svg?height=200&width=300&text=Casablanca" },
            { name: "Chefchaouen", image: "/placeholder.svg?height=200&width=300&text=Chefchaouen" },
          ].map((item, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden h-32">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white">
                <h4 className="font-medium">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Recommended For You</h3>
        <div className="space-y-4">
          {[
            {
              title: "Desert Safari Adventure",
              price: 89,
              rating: 4.8,
              image: "/placeholder.svg?height=200&width=300&text=Desert+Safari",
            },
            {
              title: "Traditional Cooking Class",
              price: 45,
              rating: 4.9,
              image: "/placeholder.svg?height=200&width=300&text=Cooking+Class",
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-3">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{item.title}</h4>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500 text-xs">★</span>
                  <span className="text-xs ml-1">{item.rating}</span>
                </div>
                <p className="text-sm mt-1">${item.price} per person</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TripsContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Your Trips</h2>

      <div className="bg-gray-50 rounded-xl p-6 text-center">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <Compass className="h-8 w-8 text-gray-500" />
        </div>
        <h3 className="text-lg font-medium mb-2">No trips yet</h3>
        <p className="text-gray-500 text-sm mb-4">Start planning your Moroccan adventure</p>
        <button className="bg-primary text-white px-4 py-2 rounded-lg">Plan a Trip</button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Trip Ideas</h3>
        <div className="space-y-4">
          {[
            {
              title: "7 Days in Northern Morocco",
              image: "/placeholder.svg?height=200&width=300&text=Northern+Morocco",
            },
            { title: "Weekend in Marrakech", image: "/placeholder.svg?height=200&width=300&text=Marrakech+Weekend" },
            { title: "Coastal Morocco Adventure", image: "/placeholder.svg?height=200&width=300&text=Coastal+Morocco" },
          ].map((item, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden h-40">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <h4 className="font-medium text-lg">{item.title}</h4>
                <p className="text-sm text-white/80">Explore itinerary</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SavedContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Saved Items</h2>

      <div className="flex border-b">
        <button className="px-4 py-2 border-b-2 border-primary text-primary font-medium">Places</button>
        <button className="px-4 py-2 text-gray-500">Experiences</button>
        <button className="px-4 py-2 text-gray-500">Trips</button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[
          {
            name: "Riad Yasmine",
            location: "Marrakech",
            image: "/placeholder.svg?height=200&width=300&text=Riad+Yasmine",
          },
          {
            name: "Blue Pearl Hotel",
            location: "Chefchaouen",
            image: "/placeholder.svg?height=200&width=300&text=Blue+Pearl",
          },
          {
            name: "Sahara Luxury Camp",
            location: "Merzouga",
            image: "/placeholder.svg?height=200&width=300&text=Sahara+Camp",
          },
          { name: "Palais Amani", location: "Fes", image: "/placeholder.svg?height=200&width=300&text=Palais+Amani" },
        ].map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-28">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              <button className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm p-1.5 rounded-full">
                <Heart className="h-4 w-4 text-white fill-white" />
              </button>
            </div>
            <div className="p-2">
              <h4 className="font-medium text-sm">{item.name}</h4>
              <p className="text-xs text-gray-500">{item.location}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium">
        View All Saved Items
      </button>
    </div>
  )
}

function ProfileContent() {
  return (
    <div className="space-y-6">
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

