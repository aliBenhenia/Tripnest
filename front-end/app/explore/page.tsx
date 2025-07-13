"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Search,
  Calendar,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import { cities, activities } from "@/lib/data";
import { SearchBar } from "@/components/SearchBar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";

interface ExploreItem {
  id: string;
  title: string;
  description: string;
  image: string;
  type: "experience" | "place" | "city";
  rating: number;
  location: string;
  price?: string;
}

// Wikipedia valid images for Morocco related places (public domain or CC0)


const exploreItems: ExploreItem[] = [
  {
    id: "1",
    title: "Eiffel Tower",
    description: "An iconic landmark of Paris, France.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    type: "place",
    rating: 4.8,
    location: "Paris, France",
    price: "$25",
  },
  {
    id: "2",
    title: "Great Wall of China",
    description: "Historic wall stretching across northern China.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/GreatWall_2004_Summer_4.jpg",
    type: "place",
    rating: 4.7,
    location: "China",
    price: "$40",
  },
  {
    id: "3",
    title: "Statue of Liberty",
    description: "Famous symbol of freedom in New York City.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg",
    type: "place",
    rating: 4.6,
    location: "New York, USA",
    price: "$22",
  },
  {
    id: "4",
    title: "Sydney Opera House Tour",
    description: "A guided tour of Sydney's world-famous performing arts center.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Sydney_Opera_House_-_Dec_2008.jpg",
    type: "experience",
    rating: 4.5,
    location: "Sydney, Australia",
    price: "$60",
  },
  {
    id: "5",
    title: "Mount Fuji",
    description: "Japan’s tallest mountain and iconic volcano.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Mount_Fuji_from_Hakone_05-2010_img3.jpg",
    type: "place",
    rating: 4.9,
    location: "Japan",
  },
  {
    id: "6",
    title: "Rome City Tour",
    description: "Explore the ancient streets and landmarks of Rome.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Colosseo_2020.jpg",
    type: "city",
    rating: 4.7,
    location: "Rome, Italy",
    price: "$50",
  },
];

// Drawer component for details
function Drawer({
  open,
  onClose,
  item,
}: {
  open: boolean;
  onClose: () => void;
  item: ExploreItem | null;
}) {
  if (!open || !item) return null;
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Drawer Panel */}
      <div className="relative bg-white dark:bg-gray-900 w-full max-w-md p-6 overflow-y-auto shadow-xl animate-slide-in-right">
        <button
          onClick={onClose}
          aria-label="Close drawer"
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 dark:hover:text-white transition"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
        <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4 shadow-md">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <p className="mb-4 text-gray-700 dark:text-gray-300">{item.description}</p>
        <p className="mb-2 font-semibold">
          Location: <span className="font-normal">{item.location}</span>
        </p>
        <p className="mb-2 font-semibold">
          Rating: <span className="font-normal">{item.rating} / 5</span>
        </p>
        {item.price && (
          <p className="mb-4 font-semibold">
            Price: <span className="font-normal">{item.price}</span>
          </p>
        )}
        <Button
          onClick={() => alert(`Booking ${item.title} coming soon!`)}
          className="w-full"
        >
          Book Now
        </Button>
      </div>
      <style jsx>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
}

export default function ExplorePage() {
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({
    from: undefined,
    to: undefined,
  });
  const [guests, setGuests] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openGuests, setOpenGuests] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"all" | "experience" | "place" | "city">("all");
  const [drawerItem, setDrawerItem] = useState<ExploreItem | null>(null);

  const handleSearch = (query: string) => setSearchQuery(query);

  const formatDateRange = () => {
    if (!dateRange.from) return "Select dates";
    if (!dateRange.to) return format(dateRange.from, "MMM d, yyyy");
    return `${format(dateRange.from, "MMM d")} - ${format(dateRange.to, "MMM d, yyyy")}`;
  };

  // Filter items
  const filteredItems = exploreItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    if (activeFilter === "all") return matchesSearch;
    return matchesSearch && item.type === activeFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Search Section */}
      <div className="bg-gradient-to-r from-primary/5 to-primary/10 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4">Explore Morocco</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-10">
            Discover amazing cities and experiences in the heart of North Africa
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Find your perfect destination</h2>
              <SearchBar onSearch={handleSearch} />
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              {/* Calendar */}
              <Popover open={openCalendar} onOpenChange={setOpenCalendar}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="justify-start text-left font-normal h-14 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Calendar className="mr-2 h-5 w-5 text-gray-600 dark:text-gray-300" />
                    <span>{formatDateRange()}</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="range"
                    selected={dateRange}
                    onSelect={(range) => {
                      setDateRange(range as { from?: Date; to?: Date });
                      if (range.to) setOpenCalendar(false);
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              {/* Guests */}
              <Popover open={openGuests} onOpenChange={setOpenGuests}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="justify-start text-left font-normal h-14 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Users className="mr-2 h-5 w-5 text-gray-600 dark:text-gray-300" />
                    <span>{guests} Guest{guests > 1 ? "s" : ""}</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-48 p-4">
                  <div className="flex items-center justify-between">
                    <span>Number of Guests</span>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-16 text-center border rounded-md px-2 py-1 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </PopoverContent>
              </Popover>

              {/* Search Button */}
              <Button
                onClick={() => {
                  alert(
                    `Searching for "${searchQuery}" with ${guests} guest(s) from ${formatDateRange()}`
                  );
                }}
                className="h-14 bg-primary text-white font-semibold hover:bg-primary-dark"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mt-12">
        <div className="flex space-x-4 overflow-x-auto no-scrollbar">
          {(["all", "experience", "place", "city"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap
                ${
                  activeFilter === filter
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition"
                }`}
            >
              {filter === "all"
                ? "All"
                : filter.charAt(0).toUpperCase() + filter.slice(1) + "s"}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {filteredItems.length === 0 ? (
            <p className="text-center col-span-full text-gray-500 dark:text-gray-400">
              No results found.
            </p>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setDrawerItem(item)}
                className="cursor-pointer rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{item.location}</span>
                    <span>⭐ {item.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Drawer for Details */}
      <Drawer
        open={!!drawerItem}
        onClose={() => setDrawerItem(null)}
        item={drawerItem}
      />
    </div>
  );
}
