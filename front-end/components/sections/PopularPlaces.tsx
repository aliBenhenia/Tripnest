import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Place {
  id: string | number
  name: string
  slug: string
  imageUrl: string
  properties: number
  rating?: number
  location?: string
}

interface PopularPlacesProps {
  places: Place[]
  isLoading?: boolean
}

export function PopularPlaces({ places, isLoading }: PopularPlacesProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget
    setScrollPosition(container.scrollLeft)
    setShowLeftArrow(container.scrollLeft > 0)
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    )
  }

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('places-container')
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse bg-gray-200 rounded-2xl h-[250px] sm:h-[320px]" />
        ))}
      </div>
    )
  }

  return (
    <section className="mt-4 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              Popular Places
            </h2>
            <p className="mt-1 text-sm sm:text-base text-gray-500">
              Discover the most visited destinations in Morocco
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className={`rounded-full transition-all duration-200 ${
                  !showLeftArrow
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-primary hover:text-black'
                }`}
                onClick={() => scroll('left')}
                disabled={!showLeftArrow}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={`rounded-full transition-all duration-200 ${
                  !showRightArrow
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-primary hover:text-black'
                }`}
                onClick={() => scroll('right')}
                disabled={!showRightArrow}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            <Link href="/places">
              <Button
                variant="ghost"
                className="text-sm sm:text-base text-gray-600 hover:text-black hover:bg-gray-50"
              >
                View all places
              </Button>
            </Link>
          </div>
        </div>

        {/* Places Grid/Scroll */}
        <div className="relative">
          <div
            id="places-container"
            className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            onScroll={handleScroll}
          >
            {places.map((place) => (
              <Link
                key={place.id}
                href={`/city/${place.slug}`}
                className="group relative flex-shrink-0 w-[260px] sm:w-[300px] md:w-[320px] lg:w-[380px] transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-[200px] sm:h-[250px] md:h-[320px] w-full rounded-xl sm:rounded-2xl overflow-hidden">
                  <Image
                    src={place.imageUrl}
                    alt={place.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 320px, 380px"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 truncate">
                          {place.name}
                        </h3>
                        <div className="flex items-center text-white/90 text-[10px] sm:text-xs md:text-sm">
                          <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 mr-1 flex-shrink-0" />
                          <span className="truncate">{place.location || 'Morocco'}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1 sm:gap-1.5 md:gap-2 flex-shrink-0">
                        <div className="bg-primary/90 backdrop-blur-sm px-2 sm:px-2.5 md:px-3.5 py-1 sm:py-1.5 rounded-full shadow-sm border border-white/10 hover:bg-primary/95 transition-colors">
                          <span className="text-[10px] sm:text-[11px] md:text-sm font-medium tracking-wide whitespace-nowrap">
                            {place.properties.toLocaleString()} {place.properties === 1 ? 'property' : 'properties'}
                          </span>
                        </div>
                        {place.rating && (
                          <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 sm:px-2.5 md:px-3.5 py-1 sm:py-1.5 rounded-full shadow-sm hover:bg-white/95 transition-colors">
                            <span className="text-yellow-500 text-[10px] sm:text-[11px] md:text-sm">★</span>
                            <span className="ml-0.5 sm:ml-1 text-[10px] sm:text-[11px] md:text-sm font-medium">
                              {place.rating.toFixed(1)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Gradient Edges 2 */}
          <div className="hidden md:block absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="hidden md:block absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
} 