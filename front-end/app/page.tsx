'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Header } from "@/components/Header"
import { SearchBar } from "@/components/SearchBar"
import { SectionHeader } from "@/components/SectionHeader"
import { useSearch } from "@/hooks/useSearch"
import { ErrorBoundary } from "@/components/ErrorBoundary"

// Dynamically import components that are not needed immediately
const CityCard = dynamic(() => import('@/components/CityCard').then(mod => mod.CityCard), {
  loading: () => <div className="animate-pulse bg-gray-200 rounded-xl h-[220px] w-[180px]" />
})

const ExperienceCard = dynamic(() => import('@/components/ExperienceCard').then(mod => mod.ExperienceCard), {
  loading: () => <div className="animate-pulse bg-gray-200 rounded-xl h-[150px] w-[180px]" />
})

export default function Home() {
  const { searchQuery, isLoading, handleSearch, cities, experiences } = useSearch()

  return (
    <div className="w-full mx-auto bg-white min-h-screen md:max-w-none">
      <ErrorBoundary>
        <Header 
          username="aLi"
          avatarUrl="https://avatars.githubusercontent.com/u/95689141?s=400&u=275826ef98503225cfa203907197ad854e0111a1&v=4"
        />

        <div className="px-4 py-2 md:px-8 lg:px-16 md:py-4">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Popular Places */}
        <div className="mt-4">
          <SectionHeader 
            title={`Popular Places ${isLoading ? '...' : cities.length ? `(${cities.length})` : ''}`} 
            viewAllLink="#" 
          />
          <Suspense fallback={<div className="animate-pulse bg-gray-200 h-[300px]" />}>
            <div className="relative mt-3">
              <div className="mt-3 pl-4 md:px-8 lg:px-16 pb-2 overflow-x-auto flex gap-3 md:gap-6 snap-x scrollbar-hide md:flex-wrap md:justify-center scroll-smooth">
                {cities.map((city) => (
                  <CityCard key={city.id} {...city} />
                ))}
              </div>
            </div>
          </Suspense>
        </div>

        {/* Popular Experiences */}
        <div className="mt-4 md:mt-8">
          <SectionHeader 
            title={`Popular Experiences ${isLoading ? '...' : experiences.length ? `(${experiences.length})` : ''}`}
            viewAllLink="#" 
          />
          <Suspense fallback={<div className="animate-pulse bg-gray-200 h-[300px]" />}>
            <div className="relative mt-3 mb-6">
              <div className="mt-3 pl-4 md:px-8 lg:px-16 pb-2 overflow-x-auto flex gap-3 md:gap-6 snap-x scrollbar-hide md:flex-wrap md:justify-center scroll-smooth">
                {experiences.map((experience) => (
                  <ExperienceCard key={experience.id} {...experience} />
                ))}
              </div>
            </div>
          </Suspense>
        </div>
      </ErrorBoundary>
    </div>
  )
}

