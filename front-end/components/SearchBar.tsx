'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, Home, MapPin, Loader } from 'lucide-react'
import Link from 'next/link'
import axios from 'axios'
import debounce from 'lodash.debounce'

interface City {
  id: string
  name: string
  region: string
  country: string
  image: string
}

interface SearchBarProps {
  onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<City[]>([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  const fetchCities = async (query: string) => {
    if (!query) return
    setLoading(true)
    setError('')
    try {
      const { data } = await axios.get(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities`,
        {
          headers: {
            'X-RapidAPI-Key': "5b8a5a02f3msh2cbb0edd5b9cad9p1f7c83jsn0f12ae7e07fe",
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
          },
          params: {
            namePrefix: query,
            limit: 10,
            sort: '-population',
          },
        }
      )

      const results = data.data.map((city: any) => ({
        id: city.id,
        name: city.city,
        region: city.region,
        country: city.country,
        image: `https://source.unsplash.com/featured/160x160?${encodeURIComponent(city.city)}%20city&sig=${city.id}`

      }))
      setSearchResults(results)
    } catch (err) {
      setError('Failed to load results.')
      setSearchResults([])
    } finally {
      setLoading(false)
    }
  }

  const debouncedFetch = useRef(
    debounce((query: string) => fetchCities(query), 500)
  ).current

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      setShowDropdown(false)
      setLoading(false)
      onSearch('')
      return
    }

    debouncedFetch(searchQuery.trim())
    setShowDropdown(true)
    onSearch(searchQuery)
  }, [searchQuery, onSearch, debouncedFetch])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const trending = [
    { name: 'Dubai' },
    { name: 'Tokyo' },
    { name: 'Istanbul' },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-0">
      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 mb-5">
        {[
          { id: 'all', label: 'Search All', icon: <Search className="w-5 h-5 text-blue-500/80" /> },
          { id: 'hotels', label: 'Hotels', icon: <Home className="w-5 h-5 text-rose-500/80" /> },
          { id: 'things', label: 'Things to Do', icon: <MapPin className="w-5 h-5 text-emerald-500/80" /> },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex items-center gap-2 py-2 px-3 text-sm sm:text-base font-medium transition-colors
              ${activeTab === tab.id ? 'text-primary' : 'text-gray-600 hover:text-gray-900'}
            `}
          >
            {tab.icon}
            <span>{tab.label}</span>
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search destinations, hotels, activities..."
          className="w-full pl-12 pr-5 py-3 text-base text-gray-900 bg-white border border-gray-300 rounded-full shadow-md placeholder:text-gray-400
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary hover:border-gray-400 transition"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => searchQuery.trim() !== '' && setShowDropdown(true)}
          autoComplete="off"
        />

        {/* Dropdown */}
        {showDropdown && (
          <div
            ref={dropdownRef}
            className="absolute z-20 w-full mt-2 bg-white backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 max-h-86 overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-100"
          > 
            {loading ? (
              <div className="px-6 py-10 text-center text-gray-600 flex flex-col items-center">
                <Loader className="h-6 w-6 animate-spin mb-2" />
                <p>Loading results...</p>
              </div>
            ) : error ? (
              <div className="px-6 py-8 text-center text-red-600">
                <p className="font-semibold">Error</p>
                <p className="text-sm">{error}</p>
              </div>
            ) : searchResults.length > 0 ? (
              searchResults.map(city => (
               <Link
  key={city.id}
  href={`/city/${city.name.toLowerCase().replace(/\s+/g, '-')}`}
  className="flex px-4 py-3 mx-3 my-1 rounded-lg hover:bg-primary/10 transition cursor-pointer"
  onClick={() => {
    setShowDropdown(false)
    setSearchQuery('')
  }}
>
  <div>
    <p className="font-semibold text-gray-800 text-left">{city.name}</p>
    <p className="text-sm text-gray-500">{city.region}, {city.country}</p>
  </div>
</Link>
              ))
            ) : searchQuery.trim() !== '' ? (
              <div className="px-6 py-10 text-center text-gray-700">
                <Search className="mx-auto mb-3 h-10 w-10 text-gray-400" />
                <p className="font-semibold text-gray-900 text-lg">No results found</p>
                <p className="mt-1 text-sm">
                  We couldn't find "{searchQuery}" in our destinations.
                </p>
              </div>
            ) : (
              <div className="px-6 py-4 text-gray-700">
                <p className="mb-3 font-semibold text-gray-900">Trending Destinations</p>
                <div className="flex flex-wrap gap-3">
                  {trending.map((city, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSearchQuery(city.name)
                        setShowDropdown(false)
                        onSearch(city.name)
                      }}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition"
                    >
                      {city.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
