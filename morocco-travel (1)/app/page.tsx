import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { moroccanCities } from "@/lib/data"
import { popularExperiences } from "@/lib/data"
import BottomNavigation from "@/components/bottom-navigation"

export default function Home() {
  return (
    <div className="w-full mx-auto bg-white min-h-screen pb-16 md:pb-0 md:max-w-none">
      {/* Header */}
      <div className="p-4 pt-6 md:px-8 lg:px-16 flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm md:text-base">Hello, aLi</p>
          <h1 className="text-3xl font-bold md:text-4xl">Find deals</h1>
        </div>
        <Avatar className="h-10 w-10 md:h-12 md:w-12">
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
          <AvatarFallback>EL</AvatarFallback>
        </Avatar>
      </div>

      {/* Search */}
      <div className="px-4 py-2 md:px-8 lg:px-16 md:py-4">
        <div className="relative max-w-xl">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input className="pl-10 bg-gray-50 border-gray-200 rounded-full h-12" placeholder="Search destinations..." />
        </div>
      </div>

      {/* Popular Places */}
      <div className="mt-4">
        <div className="px-4 md:px-8 lg:px-16 flex justify-between items-center">
          <h2 className="text-xl font-bold">Popular Places</h2>
          <Link href="#" className="text-gray-500 text-sm">
            View all
          </Link>
        </div>
        <div className="relative mt-3">
          {/* Scroll indicators */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none md:hidden"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden"></div>

          <div className="mt-3 pl-4 md:px-8 lg:px-16 pb-2 overflow-x-auto flex gap-3 md:gap-6 snap-x scrollbar-hide md:flex-wrap md:justify-center scroll-smooth">
            {moroccanCities.map((city) => (
              <Link
                href={`/city/${city.slug}`}
                key={city.id}
                className="snap-start shrink-0 w-[180px] md:w-[220px] lg:w-[280px] rounded-xl overflow-hidden relative md:mb-6 scroll-ml-4"
              >
                <div className="relative h-[220px] w-[180px] md:w-[220px] md:h-[260px] lg:w-[280px] lg:h-[320px]">
                  <Image
                    src={city.imageUrl || "/placeholder.svg"}
                    alt={city.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 180px, (max-width: 1024px) 220px, 280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="font-semibold text-lg md:text-xl">{city.name}</h3>
                    <p className="text-xs md:text-sm text-gray-200">{city.properties} properties</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Experiences */}
      <div className="mt-4 md:mt-8">
        <div className="px-4 md:px-8 lg:px-16 flex justify-between items-center">
          <h2 className="text-xl font-bold">Popular Experiences</h2>
          <Link href="#" className="text-gray-500 text-sm">
            View all
          </Link>
        </div>
        <div className="relative mt-3">
          {/* Scroll indicators */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none md:hidden"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden"></div>

          <div className="mt-3 pl-4 md:px-8 lg:px-16 pb-2 overflow-x-auto flex gap-3 md:gap-6 snap-x scrollbar-hide md:flex-wrap md:justify-center scroll-smooth">
            {popularExperiences.map((experience) => (
              <div
                key={experience.id}
                className="snap-start shrink-0 w-[220px] md:w-[280px] lg:w-[300px] md:mb-6 scroll-ml-4"
              >
                <div className="relative h-[150px] w-[220px] md:h-[180px] md:w-[280px] lg:h-[200px] lg:w-[300px] rounded-xl overflow-hidden">
                  <Image
                    src={experience.imageUrl || "/placeholder.svg"}
                    alt={experience.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 220px, (max-width: 1024px) 280px, 300px"
                  />
                </div>
                <div className="mt-2">
                  <div className="flex items-center">
                    <div className="flex items-center text-yellow-500">
                      <span className="text-xs">★</span>
                      <span className="ml-1 text-sm font-medium">{experience.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-medium text-sm md:text-base mt-1 line-clamp-2">{experience.title}</h3>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">{experience.category}</p>
                  <p className="text-xs md:text-sm mt-1">From ${experience.price}/person</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}

