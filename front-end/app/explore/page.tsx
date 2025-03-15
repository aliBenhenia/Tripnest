"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Calendar, Users, Clock, Users2, Star, Heart, Filter, ArrowUpDown } from "lucide-react"
import Image from "next/image"
import { cities, activities } from "@/lib/data"

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Search Section */}
      <div className="bg-gradient-to-r from-primary/5 to-primary/10 py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Morocco</h1>
          <p className="text-gray-600 mb-8">Discover amazing cities and experiences in the heart of North Africa</p>
          
          <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center gap-2 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
              <MapPin className="text-primary" />
              <Input placeholder="Where are you going?" className="border-0 focus-visible:ring-0" />
            </div>
            <div className="flex-1 flex items-center gap-2 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
              <Calendar className="text-primary" />
              <Input type="date" className="border-0 focus-visible:ring-0" />
            </div>
            <div className="flex-1 flex items-center gap-2">
              <Users className="text-primary" />
              <Input placeholder="Number of guests" type="number" min="1" className="border-0 focus-visible:ring-0" />
            </div>
            <Button size="lg" className="md:w-auto">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        {/* Featured Cities */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Featured Cities</h2>
              <p className="text-gray-600">Explore the most beautiful cities in Morocco</p>
            </div>
            <Button variant="outline">View all cities</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city) => (
              <div key={city.name} className="group relative overflow-hidden rounded-xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
                </div>
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">{city.name}</h3>
                  <p className="text-sm opacity-90">{city.region}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Activities */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Popular Activities</h2>
              <p className="text-gray-600">Discover unique experiences in Morocco</p>
            </div>
            <Button variant="outline">View all activities</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity) => (
              <div key={activity.title} className="bg-white rounded-xl shadow-md overflow-hidden group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/45/65/tangier.jpg?w=1400&h=500&s=1"}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-medium">
                    ${activity.price}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{activity.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {activity.location}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {activity.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users2 className="w-4 h-4" /> {activity.groupSize}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-medium">{activity.rating}</span>
                      <span className="text-gray-600">({activity.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 