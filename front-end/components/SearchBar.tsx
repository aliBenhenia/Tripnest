'use client'

import { Search, Home, MapPin } from "lucide-react"
import { useState } from "react"

interface SearchBarProps {
  onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 md:gap-6 mb-2">
        <button
          onClick={() => setActiveTab('all')}
          className={`flex items-center gap-1 sm:gap-2 py-2 px-1 border-b-2 text-xs sm:text-sm md:text-base transition-colors ${
            activeTab === 'all'
              ? 'border-primary text-primary font-medium'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Search All</span>
        </button>
        <button
          onClick={() => setActiveTab('hotels')}
          className={`flex items-center gap-1 sm:gap-2 py-2 px-1 border-b-2 text-xs sm:text-sm md:text-base transition-colors ${
            activeTab === 'hotels'
              ? 'border-primary text-primary font-medium'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <Home className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Hotels</span>
        </button>
        <button
          onClick={() => setActiveTab('things')}
          className={`flex items-center gap-1 sm:gap-2 py-2 px-1 border-b-2 text-xs sm:text-sm md:text-base transition-colors ${
            activeTab === 'things'
              ? 'border-primary text-primary font-medium'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Things to Do</span>
        </button>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-2 sm:left-4 flex items-center pointer-events-none">
          <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search destinations, hotels, activities..."
          className="w-full pl-8 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3.5 text-sm sm:text-base text-gray-900 bg-white border border-gray-200 rounded-full shadow-sm placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary hover:border-gray-300 transition-colors"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  )
} 