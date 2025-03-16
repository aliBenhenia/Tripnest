"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, MapPin, Calendar, Users, Clock, 
  Users2, Star, Heart, Filter, ArrowUpDown,
  ChevronDown, X, ChevronLeft, ChevronRight
} from "lucide-react"
import Image from "next/image"
import { cities, activities } from "@/lib/data"
import { useState, useEffect } from "react"
import { SearchBar } from "@/components/SearchBar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format, addDays, isSameDay, isAfter, isBefore, isToday } from "date-fns"

export default function ExplorePage() {
  const [date, setDate] = useState<Date>()
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  })
  const [guests, setGuests] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [openCalendar, setOpenCalendar] = useState(false)
  const [openGuests, setOpenGuests] = useState(false)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  // Format the date range for display
  const formatDateRange = () => {
    if (!dateRange.from) return "Select dates";
    if (!dateRange.to) return format(dateRange.from, "MMM d, yyyy");
    return `${format(dateRange.from, "MMM d")} - ${format(dateRange.to, "MMM d, yyyy")}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Search Section */}
      <div className="bg-gradient-to-r from-primary/5 to-primary/10 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Morocco</h1>
          <p className="text-gray-600 mb-10">Discover amazing cities and experiences in the heart of North Africa</p>
          
          <div className="bg-white rounded-xl shadow-xl p-5 md:p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Find your perfect destination</h2>
              <SearchBar onSearch={handleSearch} />
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Enhanced Calendar */}
              <Popover open={openCalendar} onOpenChange={setOpenCalendar}>
                <PopoverTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="justify-start text-left font-normal h-14 border-gray-200 hover:bg-gray-50 hover:text-gray-900 relative pl-10"
                  >
                    <Calendar className="absolute left-3 h-5 w-5 text-primary" />
                    <div>
                      <span className="block text-sm font-medium">Date</span>
                      <span className={`block ${dateRange.from ? 'text-gray-900' : 'text-gray-500'} text-sm`}>
                        {formatDateRange()}
                      </span>
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 border-0" align="start">
                  <div className="p-3 border-b border-gray-100">
                    <div className="space-y-1">
                      <h3 className="font-medium text-base">Select dates</h3>
                      <p className="text-sm text-gray-500">
                        Choose your check-in and check-out dates
                      </p>
                    </div>
                  </div>
                  <CalendarComponent
                    mode="range"
                    defaultMonth={dateRange.from || new Date()}
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={2}
                    initialFocus
                    className="p-3 [&_.rdp-day]:h-10 [&_.rdp-day]:w-10 [&_.rdp-caption]:text-base"
                  />
                  <div className="flex items-center justify-between p-3 border-t border-gray-100">
                    <Button 
                      variant="ghost" 
                      onClick={() => {
                        setDateRange({ from: undefined, to: undefined });
                      }}
                      className="text-sm"
                    >
                      Clear
                    </Button>
                    <Button 
                      onClick={() => {
                        if (dateRange.from && dateRange.to) {
                          setOpenCalendar(false);
                        }
                      }}
                      className="text-sm"
                      disabled={!dateRange.from || !dateRange.to}
                    >
                      Apply Dates
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
              
              {/* Guest Selector */}
              <Popover open={openGuests} onOpenChange={setOpenGuests}>
                <PopoverTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="justify-start text-left font-normal h-14 border-gray-200 hover:bg-gray-50 hover:text-gray-900 relative pl-10"
                  >
                    <Users className="absolute left-3 h-5 w-5 text-primary" />
                    <div>
                      <span className="block text-sm font-medium">Guests</span>
                      <span className="block text-sm text-gray-900">
                        {guests} {guests === 1 ? "Guest" : "Guests"}
                      </span>
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-72 p-0 border-0" align="start">
                  <div className="p-3 border-b border-gray-100">
                    <div className="space-y-1">
                      <h3 className="font-medium text-base">Guests</h3>
                      <p className="text-sm text-gray-500">
                        Add the number of guests for your stay
                      </p>
                    </div>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Adults</p>
                        <p className="text-sm text-gray-500">Ages 13 or above</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={() => setGuests(Math.max(1, guests - 1))}
                          disabled={guests <= 1}
                        >
                          <span>-</span>
                        </Button>
                        <span className="w-6 text-center">{guests}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={() => setGuests(guests + 1)}
                        >
                          <span>+</span>
                        </Button>
                      </div>
                    </div>
            </div>
                  <div className="flex items-center justify-end p-3 border-t border-gray-100">
                    <Button onClick={() => setOpenGuests(false)}>
                      Apply
                    </Button>
            </div>
                </PopoverContent>
              </Popover>
              
              {/* Search Button */}
              <Button size="lg" className="h-14 text-base transition-all hover:shadow-md">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        {/* Featured Cities */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Featured Cities</h2>
              <p className="text-gray-600">Explore the most beautiful cities in Morocco</p>
            </div>
            <Button variant="outline">View all cities</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city) => (
              <div key={city.name} className="group relative overflow-hidden rounded-xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
                </div>
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">{city.name}</h3>
                  <p className="text-sm opacity-90">{city.region}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Activities */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Popular Activities</h2>
              <p className="text-gray-600">Discover unique experiences in Morocco</p>
            </div>
            <Button variant="outline">View all activities</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity) => (
              <div key={activity.title} className="bg-white rounded-xl shadow-md overflow-hidden group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/45/65/tangier.jpg?w=1400&h=500&s=1"}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-medium">
                    ${activity.price}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{activity.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {activity.location}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {activity.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users2 className="w-4 h-4" /> {activity.groupSize}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-medium">{activity.rating}</span>
                      <span className="text-gray-600">({activity.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 