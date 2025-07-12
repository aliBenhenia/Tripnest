"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, ChevronLeft, ChevronRight, Maximize2, MapPin, Star,Volleyball } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BottomNavigation from "@/components/bottom-navigation"
import ActivityDrawer from "@/components/ActivityDrawer"
export const categories = [
  {
    id: 1,
    name: "Beach",
    icon: "/beach.png",
  },
  {
    id: 2,
    name: "Photography",
    icon: "/camera.png",
  },
  {
    id: 3,
    name: "Tour",
    icon: "/earth.png",
  },
  {
    id: 4,
    name: "Travel",
    icon: "/travel-bag.png",
  },
]

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

interface WikiActivity {
  id: string
  name: string
  description: string
  imageUrl: string
  type: string
}

export default function ClientCityPage({ city }: ClientCityPageProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [cityActivitiesList, setCityActivitiesList] = useState<WikiActivity[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false);
const [selectedActivity, setSelectedActivity] = useState<WikiActivity | null>(null);
const openActivityDrawer = (activity: WikiActivity) => {
  setSelectedActivity(activity);
  setDrawerOpen(true);
};

const closeActivityDrawer = () => {
  setDrawerOpen(false);
  setSelectedActivity(null);
};


  const handleCategoryClick = (categoryType: string) => {
    setSelectedCategory(categoryType)
  }

  function detectCategoryType(name: string, description: string): string {
    const lowerName = name.toLowerCase()
    const lowerDesc = description.toLowerCase()

    for (const category of categories) {
      const key = category.name.toLowerCase()
      if (
        lowerName.includes(key) ||
        lowerDesc.includes(key) ||
        (key === "beach" && (lowerName.includes("coast") || lowerDesc.includes("coast"))) ||
        (key === "photography" && (lowerName.includes("photo") || lowerDesc.includes("photo"))) ||
        (key === "tour" && (lowerName.includes("tour") || lowerDesc.includes("tour"))) ||
        (key === "travel" && (lowerName.includes("travel") || lowerDesc.includes("travel")))
      ) {
        return category.name
      }
    }
    return "Other"
  }

  useEffect(() => {
    if (!city?.name) return

    setLoading(true)
    setError(null)

    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrsearch=${encodeURIComponent(
      city.name + " attractions"
    )}&gsrlimit=20&prop=pageimages|extracts&exintro&explaintext&piprop=thumbnail&pithumbsize=400`

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        if (!data.query || !data.query.pages) {
          setCityActivitiesList([])
          setLoading(false)
          return
        }
        const pages = Object.values(data.query.pages)

        const activities: WikiActivity[] = pages.map((page: any) => {
          const name = page.title || "Unknown"
          const desc = page.extract || ""
          const type = detectCategoryType(name, desc)
          return {
            id: page.pageid.toString(),
            name,
            description: desc,
            imageUrl: page.thumbnail?.source || "/placeholder.svg",
            type,
          }
        })

        setCityActivitiesList(activities)
        setLoading(false)
      })
      .catch(() => {
        setError("Failed to fetch activities from Wikipedia")
        setLoading(false)
      })
  }, [city?.name])

  const filteredActivities =
    selectedCategory === "all"
      ? cityActivitiesList
      : cityActivitiesList.filter(
          (activity) => activity.type.toLowerCase() === selectedCategory.toLowerCase()
        )

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1))
  }
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : prev - 1))
  }

  return (
    <div className="w-full mx-auto bg-white min-h-screen pb-16 md:pb-0 md:max-w-none">
      {/* Header & slider unchanged */}
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
      {/* Your existing header and slider code here */}

      {/* Categories filter */}
      <div className="px-4 mt-4 md:px-8 lg:px-16 md:mt-8 md:max-w-5xl md:mx-auto">
        <h2 className="text-2xl font-bold md:text-3xl">Explore {city.name}</h2>
        <div className="relative mt-4">
          <div className="overflow-x-auto flex gap-6 md:justify-start md:gap-16 md:mt-6 pb-2 scrollbar-hide scroll-smooth">
            <div
              onClick={() => handleCategoryClick("all")}
              className={`flex flex-col items-center flex-shrink-0 scroll-ml-4 cursor-pointer transition-all duration-200 ${
                selectedCategory === "all" ? "scale-110" : "hover:scale-105"
              }`}
            >
              <div
                className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full ${
                  selectedCategory === "all" ? "bg-blue-100 shadow-md" : "bg-gray-50"
                }`}
              >
                <Volleyball
                  // src="/all-icon.png"alt="All"
                  width={40}
                  height={40}
                  className={`md:w-12 md:h-12 transition-all ${
                    selectedCategory === "all" ? "text-blue-600" : ""
                  }`}
                />
              </div>
              <span
                className={`text-sm mt-1 md:text-base md:font-medium ${
                  selectedCategory === "all" ? "text-blue-600 font-semibold" : ""
                }`}
              >
                All
              </span>
            </div>

            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.name.toLowerCase())}
                className={`flex flex-col items-center flex-shrink-0 scroll-ml-4 cursor-pointer transition-all duration-200 ${
                  selectedCategory === category.name.toLowerCase()
                    ? "scale-110"
                    : "hover:scale-105"
                }`}
              >
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full ${
                    selectedCategory === category.name.toLowerCase()
                      ? "bg-blue-100 shadow-md"
                      : "bg-gray-50"
                  }`}
                >
                  <Image
                    src={category.icon || "/placeholder.svg"}
                    alt={category.name}
                    width={40}
                    height={40}
                    className={`md:w-12 md:h-12 transition-all ${
                      selectedCategory === category.name.toLowerCase() ? "text-blue-600" : ""
                    }`}
                  />
                </div>
                <span
                  className={`text-sm mt-1 md:text-base md:font-medium ${
                    selectedCategory === category.name.toLowerCase()
                      ? "text-blue-600 font-semibold"
                      : ""
                  }`}
                >
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activities List */}
      <div className="px-4 mt-6 md:px-8 lg:px-16 md:mt-12 md:max-w-5xl md:mx-auto">
        <h2 className="text-2xl font-bold md:text-3xl">
          {selectedCategory === "all"
            ? `Popular Activities in ${city.name}`
            : `${categories.find((c) => c.name.toLowerCase() === selectedCategory)?.name} Activities`}
        </h2>

        {loading && (
          <div className="text-center py-12 text-gray-500">Loading activities...</div>
        )}

        {error && <div className="text-center py-12 text-red-500">{error}</div>}

        {!loading && !error && filteredActivities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No activities found for this category in {city.name}
            </p>
          </div>
        )}

        {!loading && !error && filteredActivities.length > 0 && (
          <>
            {/* Mobile scroll */}
            <div className="relative mt-4 md:hidden">
              <div className="overflow-x-auto flex gap-3 pb-2 scrollbar-hide scroll-smooth">
                {filteredActivities.map((activity) => (
                  <div
                  
                    key={activity.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex-shrink-0 w-[280px] scroll-ml-4 cursor-pointer"
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

            {/* Desktop grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {filteredActivities.map((activity) => (
                <div
                  key={activity.id}
                  onClick={() => openActivityDrawer(activity)}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <div className="relative h-64">
                    <Image
                      src={activity.imageUrl}
                      alt={activity.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full">
                      <span className="text-sm font-medium text-gray-800">{activity.type}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-xl mb-2">{activity.name}</h3>
                    <p className="text-gray-700 text-sm line-clamp-3">{activity.description}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-5 h-5 mr-1" />
                        <span className="text-sm">{city.name}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
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
      {
        selectedActivity && ( <ActivityDrawer
  open={drawerOpen}
  activity={selectedActivity}
  onClose={closeActivityDrawer}
  lat={48.8584}
  lon={2.2945}
/>)
      }
       
      <BottomNavigation />
    </div>
  )
}
