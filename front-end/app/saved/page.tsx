"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"

export default function SavedPage() {
  const [activeTab, setActiveTab] = useState("Places")
  
  return (
    <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold">Saved Items</h2>

      <div className="flex border-b">
        <button 
          className={`px-4 py-2 ${activeTab === "Places" ? "border-b-2 border-primary text-primary font-medium" : "text-gray-500"}`}
          onClick={() => setActiveTab("Places")}
        >
          Places
        </button>
        <button 
          className={`px-4 py-2 ${activeTab === "Experiences" ? "border-b-2 border-primary text-primary font-medium" : "text-gray-500"}`}
          onClick={() => setActiveTab("Experiences")}
        >
          Experiences
        </button>
        <button 
          className={`px-4 py-2 ${activeTab === "Trips" ? "border-b-2 border-primary text-primary font-medium" : "text-gray-500"}`}
          onClick={() => setActiveTab("Trips")}
        >
          Trips
        </button>
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
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" 
               sizes="(max-width: 768px) 100vw, 50vw"/>
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