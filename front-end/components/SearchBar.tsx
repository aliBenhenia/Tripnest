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
    <div className={`relative max-w-xl ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <Input 
        value={searchValue}
        className="pl-10 bg-gray-50 border-gray-200 rounded-full h-12" 
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  )
} 