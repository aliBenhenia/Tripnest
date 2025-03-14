'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Header } from "@/components/Header"
import { SearchBar } from "@/components/SearchBar"
import { SectionHeader } from "@/components/SectionHeader"
import { useSearch } from "@/hooks/useSearch"
import { ErrorBoundary } from "@/components/ErrorBoundary"
import { PopularPlaces } from "@/components/sections/PopularPlaces"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/Footer"

// Dynamically import components that are not needed immediately
const CityCard = dynamic(() => import('@/components/CityCard').then(mod => mod.CityCard), {
  loading: () => <div className="animate-pulse bg-gray-200 rounded-xl h-[220px] w-[180px]" />
})

const ExperienceCard = dynamic(() => import('@/components/ExperienceCard').then(mod => mod.ExperienceCard), {
  loading: () => <div className="animate-pulse bg-gray-200 rounded-xl h-[150px] w-[180px]" />
})

// Generate stable ratings based on city name
const getStableRating = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = ((hash << 5) - hash) + name.charCodeAt(i);
    hash = hash & hash;
  }
  // Generate a rating between 4.5 and 5.0 based on hash
  return 4.5 + (Math.abs(hash) % 50) / 100;
}

export default function Home() {
  const { searchQuery, isLoading, handleSearch, cities, experiences } = useSearch()

  // Process cities with stable ratings
  const processedCities = cities.map(city => ({
    ...city,
    rating: getStableRating(city.name),
    location: `${city.name} Region, Morocco`
  }))

  return (
    <div className="w-full mx-auto bg-white min-h-screen md:max-w-none">
      <ErrorBoundary>
        <Header 
          username="aLi"
          avatarUrl="https://avatars.githubusercontent.com/u/95689141?s=400&u=275826ef98503225cfa203907197ad854e0111a1&v=4"
        />

        <div className="px-4 md:px-8 lg:px-16 py-4 md:py-6 border-b">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Popular Places */}
        <div className="mt-4">
          <SectionHeader 
            title={`Popular Places ${isLoading ? '...' : cities.length ? `(${cities.length})` : ''}`} 
            viewAllLink="#" 
          />
          <PopularPlaces 
            places={processedCities}
            isLoading={isLoading}
          />
        </div>

        {/* Popular Experiences */}
        <div className="mt-8 md:mt-12">
          <div className="px-4 md:px-8 lg:px-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    Popular Experiences
                  </h2>
                  {!isLoading && experiences.length > 0 && (
                    <span className="text-base text-gray-500">
                      ({experiences.length})
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm sm:text-base text-gray-500">
                  Discover unique activities with local experts
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full transition-all duration-200 hover:bg-primary/5 hover:border-primary/30"
                    onClick={() => {
                      const container = document.getElementById('experiences-container')
                      if (container) {
                        container.scrollBy({ left: -400, behavior: 'smooth' })
                      }
                    }}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full transition-all duration-200 hover:bg-primary/5 hover:border-primary/30"
                    onClick={() => {
                      const container = document.getElementById('experiences-container')
                      if (container) {
                        container.scrollBy({ left: 400, behavior: 'smooth' })
                      }
                    }}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
                <Link href="/experiences">
                  <Button
                    variant="ghost"
                    className="text-sm sm:text-base text-gray-600 hover:text-gray-900"
                  >
                    View all experiences
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <Suspense fallback={
            <div className="px-4 md:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="rounded-xl bg-gray-200 h-[180px] md:h-[200px] w-full" />
                  <div className="mt-3 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-1/4" />
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          }>
            <div className="relative mt-6">
              <div
                id="experiences-container"
                className="pl-0 md:pl-0 md:pr-0 lg:px-0 pb-4 overflow-x-auto flex gap-6 snap-x scrollbar-hide scroll-smooth relative mx-4 md:mx-8 lg:mx-16"
              >
                {experiences.map((experience) => (
                  <ExperienceCard 
                    key={experience.id} 
                    {...experience}
                    className="first:ml-[16px] md:first:ml-[32px] lg:first:ml-[64px] last:mr-[16px] md:last:mr-[32px] lg:last:mr-[64px]" 
                  />
                ))}
              </div>
            </div>
          </Suspense>
        </div>

        <Footer />
      </ErrorBoundary>
    </div>
  )
}

