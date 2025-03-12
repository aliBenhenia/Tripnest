import { categories, activities as allActivities } from "@/lib/data"
import { useState } from "react"
import { Image } from "@/components/ui/image"
import { MapPin, Star } from "lucide-react"

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

  const filteredActivities = allActivities.filter(activity => 
    selectedCategory === "all" ? true : activity.type === selectedCategory
  )

  // ... existing slide functions ...

  return (
    <div className="w-full mx-auto bg-white min-h-screen pb-16 md:pb-0 md:max-w-none">
      {/* ... existing header code ... */}

      {/* Categories */}
      <div className="px-4 mt-4 md:px-8 lg:px-16 md:mt-8 md:max-w-5xl md:mx-auto">
        <h2 className="text-2xl font-bold md:text-3xl">Category</h2>
        <div className="relative mt-4">
          <div className="overflow-x-auto flex gap-6 md:justify-start md:gap-16 md:mt-6 pb-2 scrollbar-hide scroll-smooth">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.type)}
                className={`flex flex-col items-center flex-shrink-0 scroll-ml-4 cursor-pointer transition-transform ${
                  selectedCategory === category.type 
                    ? 'scale-110' 
                    : 'hover:scale-105'
                }`}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full ${
                  selectedCategory === category.type 
                    ? 'bg-blue-100 shadow-md' 
                    : 'bg-gray-50'
                }`}>
                  <Image
                    src={category.icon || "/placeholder.svg"}
                    alt={category.name}
                    width={40}
                    height={40}
                    className={`md:w-12 md:h-12 transition-all ${
                      selectedCategory === category.type 
                        ? 'text-blue-600' 
                        : ''
                    }`}
                  />
                </div>
                <span className={`text-sm mt-1 md:text-base md:font-medium ${
                  selectedCategory === category.type 
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

      {/* Top Destinations - Update to use filteredActivities */}
      <div className="px-4 mt-6 md:px-8 lg:px-16 md:mt-12 md:max-w-5xl md:mx-auto">
        <h2 className="text-2xl font-bold md:text-3xl">
          {selectedCategory === 'all' ? 'Top Destinations' : `${categories.find(c => c.type === selectedCategory)?.name} Activities`}
        </h2>

        {/* Mobile scrolling view */}
        <div className="relative mt-4 md:hidden">
          <div className="overflow-x-auto flex gap-3 pb-2 scrollbar-hide scroll-smooth">
            {filteredActivities.map((activity) => (
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
                    {activity.location}
                  </p>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm ml-1">{activity.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid view */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6 md:mt-6">
          {filteredActivities.map((activity) => (
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
                <p className="text-sm text-gray-500 mt-1">{activity.location}</p>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm ml-1">{activity.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ... rest of the component ... */}
    </div>
  )
} 