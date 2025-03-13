import Image from "next/image"
import { Compass } from "lucide-react"

export default function TripsPage() {
  return (
    <div className="space-y-6 p-4">
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