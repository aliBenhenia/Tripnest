'use client'

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState, useCallback, useMemo } from "react"
import debounce from "lodash/debounce"

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  className?: string;
}

export function SearchBar({ 
  placeholder = "Search destinations...",
  onSearch,
  className = ""
}: SearchBarProps) {
  const [searchValue, setSearchValue] = useState("")

  // Debounce search to prevent excessive re-renders
  const debouncedSearch = useMemo(
    () => debounce((value: string) => {
      onSearch?.(value)
    }, 300),
    [onSearch]
  )

  // Memoize handler to prevent recreation
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
    debouncedSearch(value)
  }, [debouncedSearch])

  return (
    <div className={`relative w-full max-w-[95%] sm:max-w-[85%] md:max-w-xl mx-auto ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
      <Input 
        value={searchValue}
        className="w-full pl-9 sm:pl-10 pr-4 py-2 bg-gray-50 border-gray-200 rounded-full 
                 text-sm sm:text-base
                 h-10 sm:h-11 md:h-12
                 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 transition-all duration-200 ease-in-out" 
        placeholder={placeholder}
        onChange={handleSearch}
        aria-label="Search destinations"
      />
    </div>
  )
} 