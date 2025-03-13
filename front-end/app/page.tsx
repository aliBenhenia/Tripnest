'use client'

import { useState } from "react"
import { moroccanCities, popularExperiences } from "@/lib/data"
import { Header } from "@/components/Header"
import { SearchBar } from "@/components/SearchBar"
import { SectionHeader } from "@/components/SectionHeader"
import { CityCard } from "@/components/CityCard"
import { ExperienceCard } from "@/components/ExperienceCard"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCities = moroccanCities.filter(city => 
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredExperiences = popularExperiences.filter(exp => 
    exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exp.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSearch = (value: string) => {
    setSearchQuery(value)
  }

  return (
    <div className="w-full mx-auto bg-white min-h-screen md:max-w-none">
      <Header 
        username="aLi"
        avatarUrl="https://avatars.githubusercontent.com/u/95689141?s=400&u=275826ef98503225cfa203907197ad854e0111a1&v=4"
      />

      <div className="px-4 py-2 md:px-8 lg:px-16 md:py-4">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Popular Places */}
      <div className="mt-4">
        <SectionHeader title="Popular Places" viewAllLink="#" />
        <div className="relative mt-3">
          {/* Scroll indicators */}
          {/* <div className="absolute h-[300px] left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none md:hidden"></div> */}
          {/* <div className="absolute h-[300px] right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden"></div> */}

          <div className="mt-3 pl-4 md:px-8 lg:px-16 pb-2 overflow-x-auto flex gap-3 md:gap-6 snap-x scrollbar-hide md:flex-wrap md:justify-center scroll-smooth">
            {filteredCities.map((city) => (
              <CityCard key={city.id} {...city} />
            ))}
          </div>
        </div>
      </div>

      {/* Popular Experiences */}
      <div className="mt-4 md:mt-8">
        <SectionHeader title="Popular Experiences" viewAllLink="#" />
        <div className="relative mt-3 mb-6">
          {/* Scroll indicators */}
          {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none md:hidden"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden"></div> */}

          <div className="mt-3 pl-4 md:px-8 lg:px-16 pb-2 overflow-x-auto flex gap-3 md:gap-6 snap-x scrollbar-hide md:flex-wrap md:justify-center scroll-smooth">
            {filteredExperiences.map((experience) => (
              <ExperienceCard key={experience.id} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

