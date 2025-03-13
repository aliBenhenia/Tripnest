import { useState, useCallback, useMemo } from 'react'
import { moroccanCities, popularExperiences } from "@/lib/data"

interface SearchResults {
  cities: typeof moroccanCities;
  experiences: typeof popularExperiences;
}

// Simple in-memory cache
const searchCache = new Map<string, SearchResults>()

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Memoize search results to prevent unnecessary filtering
  const searchResults = useMemo(() => {
    const lowercaseQuery = searchQuery.toLowerCase()
    
    // Check cache first
    const cachedResults = searchCache.get(lowercaseQuery)
    if (cachedResults) {
      return cachedResults
    }

    // If not in cache, perform search
    const results = {
      cities: moroccanCities.filter(city => 
        city.name.toLowerCase().includes(lowercaseQuery)
      ),
      experiences: popularExperiences.filter(exp => 
        exp.title.toLowerCase().includes(lowercaseQuery) ||
        exp.category.toLowerCase().includes(lowercaseQuery)
      )
    }

    // Cache results
    if (lowercaseQuery) {
      searchCache.set(lowercaseQuery, results)
    }

    return results
  }, [searchQuery])

  // Memoize search handler
  const handleSearch = useCallback((value: string) => {
    setIsLoading(true)
    setSearchQuery(value)
    // Simulate network delay for better UX
    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  }, [])

  return {
    searchQuery,
    isLoading,
    handleSearch,
    cities: searchResults.cities,
    experiences: searchResults.experiences,
  }
} 