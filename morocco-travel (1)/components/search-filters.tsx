"use client"

import { useState } from "react"
import { CalendarIcon, Users, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

export function SearchFilters() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-4">
      <div className="w-full md:w-auto flex-1">
        <div className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-gray-500" />
          <Select>
            <SelectTrigger className="w-full border-0 focus:ring-0 p-0 h-auto text-left">
              <SelectValue placeholder="Select destination" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="marrakech">Marrakech</SelectItem>
              <SelectItem value="casablanca">Casablanca</SelectItem>
              <SelectItem value="fes">Fes</SelectItem>
              <SelectItem value="chefchaouen">Chefchaouen</SelectItem>
              <SelectItem value="essaouira">Essaouira</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="w-full md:w-auto flex-1">
        <div className="flex items-center space-x-2">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start text-left font-normal p-0 h-auto",
                  !date && "text-muted-foreground",
                )}
              >
                {date ? format(date, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="w-full md:w-auto flex-1">
        <div className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-gray-500" />
          <Select>
            <SelectTrigger className="w-full border-0 focus:ring-0 p-0 h-auto text-left">
              <SelectValue placeholder="Guests" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Guest</SelectItem>
              <SelectItem value="2">2 Guests</SelectItem>
              <SelectItem value="3">3 Guests</SelectItem>
              <SelectItem value="4">4 Guests</SelectItem>
              <SelectItem value="5+">5+ Guests</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button className="w-full md:w-auto rounded-full">Search</Button>
    </div>
  )
}

