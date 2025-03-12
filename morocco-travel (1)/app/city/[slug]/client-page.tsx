"use client"

import { useState } from "react"
import { ArrowLeft, ChevronLeft, ChevronRight, Maximize2 ,MapPin,Star} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { categories, cityActivities } from "@/lib/data"
import BottomNavigation from "@/components/bottom-navigation"

interface ClientCityPageProps {
  city: {
    id: number
    name: string
    slug: string
    imageUrl: string
    imageUrl2: string
    description: string
  }
}

export default function ClientCityPage({ city }: ClientCityPageProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const handleCategoryClick = (categoryType: string) => {
    setSelectedCategory(categoryType)
  }

  // Get activities for the current city
  const cityActivitiesList = cityActivities[city.id] || []
  
  // Filter activities based on selected category
  const filteredActivities = cityActivitiesList.filter(activity => 
    selectedCategory === "all" ? true : activity.type.toLowerCase() === selectedCategory.toLowerCase()
  )

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : prev - 1))
  }

  return (
    <div className="w-full mx-auto bg-white min-h-screen pb-16 md:pb-0 md:max-w-none">
      {/* Header Image Slider */}
      <div className="relative h-[240px] md:h-[400px] lg:h-[500px] w-full">
        <Link href="/" className="absolute top-4 left-4 z-10 bg-white/30 backdrop-blur-sm p-2 rounded-full">
          <ArrowLeft className="h-5 w-5 text-white" />
        </Link>
        <div className="absolute right-4 bottom-4 z-10 bg-white/30 backdrop-blur-sm p-2 rounded-full">
          <Maximize2 className="h-5 w-5 text-white" />
        </div>
        <div className="relative h-full w-full overflow-hidden">
          <div
            className="flex h-full transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <Image
              src={city.imageUrl || "/placeholder.svg"}
              alt={city.name}
              className="object-cover w-full h-full flex-shrink-0"
              width={1200}
              height={500}
              priority
            />
            <Image
              src={city.imageUrl2 || city.imageUrl}
              alt={city.name}
              className="object-cover w-full h-full flex-shrink-0"
              width={1200}
              height={500}
            />
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-1 md:p-2 rounded-full"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-1 md:p-2 rounded-full"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {[0, 1].map((index) => (
              <div
                key={index}
                className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* City Content */}
      <div className="p-4 md:p-8 lg:px-16 md:max-w-5xl md:mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">{city.name}</h1>
        <p className="text-gray-500 mt-2 md:text-lg md:mt-4 md:max-w-3xl">
          {city.description ||
            "Discover the beauty and culture of this amazing Moroccan destination. Explore local attractions, cuisine, and experiences."}
        </p>
      </div>

      {/* Categories */}
      <div className="px-4 mt-4 md:px-8 lg:px-16 md:mt-8 md:max-w-5xl md:mx-auto">
        <h2 className="text-2xl font-bold md:text-3xl">Explore {city.name}</h2>
        <div className="relative mt-4">
          <div className="overflow-x-auto flex gap-6 md:justify-start md:gap-16 md:mt-6 pb-2 scrollbar-hide scroll-smooth">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.name.toLowerCase())}
                className={`flex flex-col items-center flex-shrink-0 scroll-ml-4 cursor-pointer transition-all duration-200 ${
                  selectedCategory === category.name.toLowerCase()
                    ? 'scale-110' 
                    : 'hover:scale-105'
                }`}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full ${
                  selectedCategory === category.name.toLowerCase()
                    ? 'bg-blue-100 shadow-md' 
                    : 'bg-gray-50'
                }`}>
                  <Image
                    src={category.icon || "/placeholder.svg"}
                    alt={category.name}
                    width={40}
                    height={40}
                    className={`md:w-12 md:h-12 transition-all ${
                      selectedCategory === category.name.toLowerCase()
                        ? 'text-blue-600' 
                        : ''
                    }`}
                  />
                </div>
                <span className={`text-sm mt-1 md:text-base md:font-medium ${
                  selectedCategory === category.name.toLowerCase()
                    ? 'text-blue-600 font-semibold' 
                    : ''
                }`}>
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="px-4 mt-6 md:px-8 lg:px-16 md:mt-12 md:max-w-5xl md:mx-auto">
        <h2 className="text-2xl font-bold md:text-3xl">
          {selectedCategory === 'all' 
            ? `Popular Activities in ${city.name}` 
            : `${categories.find(c => c.name.toLowerCase() === selectedCategory)?.name} Activities`}
        </h2>

        {filteredActivities.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No activities found for this category in {city.name}</p>
          </div>
        ) : (
          <>
            {/* Mobile scrolling view */}
            <div className="relative mt-4 md:hidden">
              <div className="overflow-x-auto flex gap-3 pb-2 scrollbar-hide scroll-smooth">
                {filteredActivities.map((activity) => (
                  <div 
                    key={activity.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex-shrink-0 w-[280px] scroll-ml-4"
                  >
                    <div className="relative h-48">
                      <Image
                        src={activity.imageUrl}
                        alt={activity.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-sm font-medium text-gray-800">{activity.type}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{activity.name}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{city.name}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm">4.8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop grid view */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {filteredActivities.map((activity) => (
                <div 
                  key={activity.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="relative h-48">
                    <Image
                      src={activity.imageUrl}
                      alt={activity.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-gray-800">{activity.type}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{activity.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{city.name}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm">4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Top Destinations */}
      <div className="px-4 mt-6 md:px-8 lg:px-16 md:mt-12 md:max-w-5xl md:mx-auto">
        <h2 className="text-2xl font-bold md:text-3xl">Top Destination </h2>

        {/* Mobile scrolling view */}
        <div className="relative mt-4 md:hidden">
          {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div> */}

          <div className="overflow-x-auto flex gap-3 pb-2 scrollbar-hide scroll-smooth">
            {cityActivitiesList.slice(0, 8).map((activity) => (
              <div
                key={activity.id}
                className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex-shrink-0 w-[260px] scroll-ml-4"
              >
                <div className="relative h-[160px]">
                  <Image
                    src={activity.imageUrl || "/placeholder.svg"}
                    alt={activity.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-sm">{activity.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    <MapPin className="inline w-4 h-4 mr-1" /> 
                    {activity.type}
                    </p>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm ml-1">4.8</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid view */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6 md:mt-6">
          {cityActivitiesList.slice(0, 8).map((activity) => (
            <div key={activity.id} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-[160px]">
                <Image
                  src={activity.imageUrl || "/placeholder.svg"}
                  alt={activity.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-base">{activity.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{activity.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Hotel Card 1 */}
      <div className="m-5 gap-3">
        <h1 className="text-2xl font-bold mb-3">recomnended</h1>
      <div className="bg-white rounded-xl overflow-hidden mb-4 shadow">
          <div className="relative">
            <Image
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/81/aa/d8/essaouira-harbour.jpg?w=1400&h=500&s=1"
              alt="Hotel room"
              width={400}
              height={200}
              className="w-full h-[200px] object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-bold">Hôtel Mercure Paris Centre Tour Eiffel</h3>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-gray-500 ml-1">(5.0)</span>
                </div>
                <div className="flex items-center text-gray-500 mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Paris</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold text-teal-500">$70</span>
                <p className="text-gray-500">per night</p>
              </div>
            </div>
          </div>
        </div>
      <div className="bg-white rounded-xl overflow-hidden mb-4 shadow">
          <div className="relative">
            <Image
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/81/aa/d8/essaouira-harbour.jpg?w=1400&h=500&s=1"
              alt="Hotel room"
              width={400}
              height={200}
              className="w-full h-[200px] object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-bold">Hôtel Mercure Paris Centre Tour Eiffel</h3>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-gray-500 ml-1">(5.0)</span>
                </div>
                <div className="flex items-center text-gray-500 mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Paris</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold text-teal-500">$70</span>
                <p className="text-gray-500">per night</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
} 