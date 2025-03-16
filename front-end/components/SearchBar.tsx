'use client'

import { Search, Home, MapPin } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { cities } from "../lib/data"
import Link from "next/link"

interface SearchBarProps {
  onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Array<{name: string, region: string, image: string}>>([])
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Filter cities based on search query
    if (searchQuery.trim() === '') {
      setSearchResults([])
      setShowDropdown(false)
      return
    }

    const filtered = cities.filter(city => 
      city.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setSearchResults(filtered)
    setShowDropdown(filtered.length > 0)
    
    // Pass the search query to parent component
    onSearch(searchQuery)
  }, [searchQuery, onSearch])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => searchResults.length > 0 && setShowDropdown(true)}
        />
        
        {/* Search Results Dropdown */}
        {showDropdown && (
          <div 
            ref={dropdownRef}
            className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200 max-h-80 overflow-y-auto"
          >
            <div className="py-1">
              {searchResults.map((city, index) => (
                <Link 
                  href={`/city/${city.name.toLowerCase()}`} 
                  key={index}
                  className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => {
                    setShowDropdown(false)
                    setSearchQuery('')
                  }}
                >
                  <div className="h-10 w-10 rounded-md overflow-hidden mr-3">
                    <img 
                      src={city.image} 
                      alt={city.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{city.name}</p>
                    <p className="text-sm text-gray-500">{city.region}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 