import Image from "next/image"
import { Compass, ChevronRight } from "lucide-react"

export default function TripsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <header className="border-b pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Trips</h1>
      </header>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 sm:p-8 text-center shadow-sm border border-gray-100">
        <div className="w-16 h-16 bg-white/80 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
          <Compass className="h-8 w-8 text-primary/80" />
        </div>
        <h3 className="text-lg sm:text-xl font-medium mb-3">No trips planned yet</h3>
        <p className="text-gray-600 max-w-md mx-auto mb-6">Start planning your Moroccan adventure and discover amazing experiences.</p>
        <button className="bg-primary hover:bg-primary/90 transition-colors text-white px-5 py-2.5 rounded-lg font-medium shadow-sm">Plan a Trip</button>
      </div>

      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Trip Ideas</h2>
          <button className="text-primary hover:text-primary/80 text-sm font-medium flex items-center">
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: "7 Days in Northern Morocco",
              subtitle: "Tangier • Chefchaouen • Fez",
              image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/45/65/tangier.jpg?w=1400&h=500&s=1",
            },
            { 
              title: "Weekend in Marrakech", 
              subtitle: "Medina • Jardin Majorelle • Souks",
              image: "/placeholder.svg?height=200&width=300&text=Marrakech+Weekend" 
            },
            { 
              title: "Coastal Morocco Adventure", 
              subtitle: "Essaouira • Agadir • Taghazout",
              image: "/placeholder.svg?height=200&width=300&text=Coastal+Morocco" 
            },
          ].map((item, index) => (
            <div 
              key={index} 
              className="relative rounded-xl overflow-hidden h-64 sm:h-72 group cursor-pointer transform hover:scale-[1.01] transition-all duration-300 shadow-md"
            >
              <Image 
                src={item.image || "/placeholder.svg"} 
                alt={item.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 sm:p-5 text-white w-full">
                <h3 className="font-medium text-lg sm:text-xl mb-1">{item.title}</h3>
                <p className="text-sm text-white/90 mb-3">{item.subtitle}</p>
                <div className="flex items-center text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                  Explore itinerary
                  <ChevronRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 