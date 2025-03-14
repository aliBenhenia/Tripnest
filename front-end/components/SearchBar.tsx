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
      <div className="flex items-center gap-6 mb-2">
        <button
          onClick={() => setActiveTab('all')}
          className={`flex items-center gap-2 py-2 px-1 border-b-2 transition-colors ${
            activeTab === 'all'
              ? 'border-primary text-primary font-medium'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <Search className="w-5 h-5" />
          Search All
        </button>
        <button
          onClick={() => setActiveTab('hotels')}
          className={`flex items-center gap-2 py-2 px-1 border-b-2 transition-colors ${
            activeTab === 'hotels'
              ? 'border-primary text-primary font-medium'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <Home className="w-5 h-5" />
          Hotels
        </button>
        <button
          onClick={() => setActiveTab('things')}
          className={`flex items-center gap-2 py-2 px-1 border-b-2 transition-colors ${
            activeTab === 'things'
              ? 'border-primary text-primary font-medium'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <MapPin className="w-5 h-5" />
          Things to Do
        </button>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Places to go, things to do, hotels..."
          className="w-full pl-12 pr-4 py-3.5 text-base text-gray-900 bg-white border border-gray-200 rounded-full shadow-sm placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary hover:border-gray-300 transition-colors"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  )
} 