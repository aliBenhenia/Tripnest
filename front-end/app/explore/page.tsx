import Image from "next/image"
import { Search } from "lucide-react"

export default function ExplorePage() {
  return (
    <div className="space-y-6 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Explore</h2>
        <button className="text-primary text-sm">View Map</button>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-4 h-4 text-gray-500" />
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