// ```jsx
"use client";
import React, { useState, useMemo, useEffect } from "react";
import { 
  Search, 
  MapPin, 
  Star, 
  Plus, 
  Heart, 
  Calendar, 
  Users, 
  Camera, 
  Filter,
  Globe,
  ChevronRight,
  ExternalLink,
  Map,
  Compass,
  Award,
  Clock,
  Wifi,
  Car,
  Utensils,
  Building,
  Sun,
  Moon,
  Zap,
  Shield,
  Gift,
  ShoppingCart,
  Phone,
  Mail,
  Home,
  Briefcase,
  BookOpen,
  Music,
  Camera as CameraIcon,
  Navigation,
  Target,
  TrendingUp,
  Settings,
  Menu,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DEFAULT_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/320px-No_image_available.svg.png";

// Mock data for initial state
const mockCities = [
  {
    id: 1,
    title: "Casablanca",
    description: "Economic capital and largest city of Morocco.",
    lat: 33.5731,
    lon: -7.5898,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    country: "Morocco",
    population: "3.5M",
    climate: "Mediterranean",
    attractions: ["Kasbah of the Udayas", "American Legation Museum", "Corniche"],
    currency: "MAD",
    timezone: "GMT+0",
    language: "Arabic/French",
    weather: "Sunny",
    bestTime: "Spring/Fall",
    visaRequired: true,
    safety: "High",
    costOfLiving: "Medium",
    featured: true
  },
  {
    id: 2,
    title: "Marrakech",
    description: "Famous for its medina and vibrant souks.",
    lat: 31.6295,
    lon: -7.9811,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    country: "Morocco",
    population: "1.3M",
    climate: "Desert",
    attractions: ["Jemaa el-Fnaa", "Bahia Palace", "Menara Gardens"],
    currency: "MAD",
    timezone: "GMT+0",
    language: "Arabic/French",
    weather: "Warm",
    bestTime: "Spring/Fall",
    visaRequired: true,
    safety: "High",
    costOfLiving: "Low",
    featured: true
  },
  {
    id: 3,
    title: "Fes",
    description: "Ancient city known for its walled medina.",
    lat: 34.0331,
    lon: -5.0003,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    country: "Morocco",
    population: "1.1M",
    climate: "Continental",
    attractions: ["UNESCO World Heritage Site", "Al-Qarawiyyin University", "Fes el-Bali"],
    currency: "MAD",
    timezone: "GMT+0",
    language: "Arabic/French",
    weather: "Temperate",
    bestTime: "Spring/Fall",
    visaRequired: true,
    safety: "High",
    costOfLiving: "Low",
    featured: true
  },
  {
    id: 4,
    title: "Rabat",
    description: "Capital city of Morocco with historic landmarks.",
    lat: 34.0209,
    lon: -6.8416,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    country: "Morocco",
    population: "600K",
    climate: "Mediterranean",
    attractions: ["Royal Palace", "Hassan Tower", "Chouari Museum"],
    currency: "MAD",
    timezone: "GMT+0",
    language: "Arabic/French",
    weather: "Mild",
    bestTime: "Spring/Fall",
    visaRequired: true,
    safety: "High",
    costOfLiving: "Medium",
    featured: false
  },
  {
    id: 5,
    title: "Tangier",
    description: "Port city on the Strait of Gibraltar.",
    lat: 35.7595,
    lon: -5.8339,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    country: "Morocco",
    population: "500K",
    climate: "Mediterranean",
    attractions: ["Tangier Kasbah", "Caves of Hercules", "Grand Socco"],
    currency: "MAD",
    timezone: "GMT+0",
    language: "Arabic/French",
    weather: "Mild",
    bestTime: "Spring/Fall",
    visaRequired: true,
    safety: "Medium",
    costOfLiving: "Low",
    featured: false
  },
  {
    id: 6,
    title: "Agadir",
    description: "Popular seaside resort with beaches.",
    lat: 30.4278,
    lon: -9.5981,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    country: "Morocco",
    population: "500K",
    climate: "Mediterranean",
    attractions: ["Agadir Beach", "Tifnit Gardens", "Sidi Ifni"],
    currency: "MAD",
    timezone: "GMT+0",
    language: "Arabic/French",
    weather: "Warm",
    bestTime: "Winter/Spring",
    visaRequired: true,
    safety: "High",
    costOfLiving: "Low",
    featured: false
  },
  {
    id: 7,
    title: "Tokyo",
    description: "Capital of Japan, famous for its modernity and tradition.",
    lat: 35.6762,
    lon: 139.6503,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    country: "Japan",
    population: "13.9M",
    climate: "Humid subtropical",
    attractions: ["Shibuya Crossing", "Senso-ji Temple", "Mount Fuji"],
    currency: "JPY",
    timezone: "GMT+9",
    language: "Japanese",
    weather: "Temperate",
    bestTime: "Spring/Fall",
    visaRequired: true,
    safety: "Very High",
    costOfLiving: "High",
    featured: true
  },
  {
    id: 8,
    title: "Bangkok",
    description: "Capital of Thailand, known for vibrant street life and temples.",
    lat: 13.7563,
    lon: 100.5018,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    country: "Thailand",
    population: "8.3M",
    climate: "Tropical",
    attractions: ["Grand Palace", "Wat Pho", "Chatuchak Weekend Market"],
    currency: "THB",
    timezone: "GMT+7",
    language: "Thai",
    weather: "Hot",
    bestTime: "Winter",
    visaRequired: false,
    safety: "Medium",
    costOfLiving: "Low",
    featured: true
  },
  {
    id: 9,
    title: "Seoul",
    description: "Capital of South Korea, blend of technology and tradition.",
    lat: 37.5665,
    lon: 126.978,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    country: "South Korea",
    population: "9.7M",
    climate: "Humid continental",
    attractions: ["Gyeongbokgung Palace", "N Seoul Tower", "Myeongdong"],
    currency: "KRW",
    timezone: "GMT+9",
    language: "Korean",
    weather: "Temperate",
    bestTime: "Spring/Fall",
    visaRequired: true,
    safety: "Very High",
    costOfLiving: "Medium",
    featured: true
  },
  {
    id: 10,
    title: "Paris",
    description: "Capital of France, known as the city of light and love.",
    lat: 48.8566,
    lon: 2.3522,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    country: "France",
    population: "2.2M",
    climate: "Oceanic",
    attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
    currency: "EUR",
    timezone: "GMT+1",
    language: "French",
    weather: "Mild",
    bestTime: "Spring/Fall",
    visaRequired: false,
    safety: "High",
    costOfLiving: "High",
    featured: true
  },
  {
    id: 11,
    title: "London",
    description: "Capital of UK, famous for history, culture and landmarks.",
    lat: 51.5074,
    lon: -0.1278,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    country: "United Kingdom",
    population: "9.5M",
    climate: "Oceanic",
    attractions: ["Big Ben", "Tower of London", "Buckingham Palace"],
    currency: "GBP",
    timezone: "GMT+0",
    language: "English",
    weather: "Mild",
    bestTime: "Spring/Fall",
    visaRequired: false,
    safety: "High",
    costOfLiving: "High",
    featured: true
  },
  {
    id: 12,
    title: "Rome",
    description: "Capital of Italy, rich in ancient history and art.",
    lat: 41.9028,
    lon: 12.4964,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    country: "Italy",
    population: "2.8M",
    climate: "Mediterranean",
    attractions: ["Colosseum", "Vatican City", "Roman Forum"],
    currency: "EUR",
    timezone: "GMT+1",
    language: "Italian",
    weather: "Warm",
    bestTime: "Spring/Fall",
    visaRequired: false,
    safety: "High",
    costOfLiving: "Medium",
    featured: true
  },
];

export default function ExplorePage() {
  const [activeCityId, setActiveCityId] = useState(mockCities[0].id);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState("all");
  const [filterFeatured, setFilterFeatured] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('cities');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cities, setCities] = useState(mockCities);
  const [loading, setLoading] = useState(false);

  // Simulate API call to fetch cities
  useEffect(() => {
    const fetchCities = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would fetch from an API like:
      // const response = await fetch('https://restcountries.com/v3.1/all');
      // const data = await response.json();
      // Process data to create cities array
      
      // For demo purposes, we'll just use mock data but simulate fetching
      setCities(mockCities);
      setLoading(false);
    };

    fetchCities();
  }, []);

  // Filter cities by search term and region
  const filteredCities = useMemo(() => {
    let result = cities.filter((city) =>
      city.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filterRegion !== "all") {
      result = result.filter(city => city.country === filterRegion);
    }
    if (filterFeatured) {
      result = result.filter(city => city.featured);
    }
    return result;
  }, [searchTerm, filterRegion, filterFeatured, cities]);

  // Find selected city details
  const activeCity = useMemo(() => {
    return cities.find((city) => city.id === activeCityId) || cities[0];
  }, [activeCityId, cities]);

  // Get unique countries for filtering
  const countries = useMemo(() => {
    const uniqueCountries = [...new Set(cities.map(city => city.country))];
    return uniqueCountries;
  }, [cities]);

  // Fallback image handler
  const handleImageError = (e) => {
    e.currentTarget.src = DEFAULT_IMAGE;
  };

  // Toggle favorite
  const toggleFavorite = (cityId) => {
    setFavorites(prev => 
      prev.includes(cityId) 
        ? prev.filter(id => id !== cityId) 
        : [...prev, cityId]
    );
  };

  // Add to trip
  const addToTrip = (cityId) => {
    // In a real app, this would add the city to a trip
    console.log(`Added ${cities.find(c => c.id === cityId)?.title} to trip`);
    // Show success notification
  };

  // Handle map load
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate city images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderCityCard = (city, index) => (
    <motion.div
      key={city.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={() => setActiveCityId(city.id)}
      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 mb-3 ${
        activeCityId === city.id
          ? "border-blue-500 bg-blue-50 shadow-md"
          : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
      }`}
    >
      <div className="flex gap-4">
        <div className="relative flex-shrink-0">
          <img
            src={city.image}
            alt={city.title}
            onError={handleImageError}
            className="w-16 h-16 rounded-lg object-cover"
            loading="lazy"
          />
          <div className="absolute -top-1 -right-1 bg-white rounded-full p-1 shadow-md">
            {favorites.includes(city.id) ? (
              <Heart 
                className="text-red-500 fill-current" 
                size={16} 
              />
            ) : (
              <Heart 
                className="text-gray-400 hover:text-red-500 cursor-pointer" 
                size={16} 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(city.id);
                }}
              />
            )}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between">
            <h3 className="font-bold text-gray-900 truncate">{city.title}</h3>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="font-medium">{city.rating}</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 truncate">{city.description}</p>
          <div className="flex items-center mt-1 text-xs text-gray-500">
            <MapPin size={12} className="mr-1" />
            <span>{city.country}</span>
            <span className="mx-2">•</span>
            <span>{city.population}</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToTrip(city.id);
            }}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            <Plus size={16} />
          </button>
          <button
            className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              window.open(`https://www.google.com/maps?q=${city.lat},${city.lon}`, '_blank');
            }}
          >
            <Navigation size={16} />
          </button>
        </div>
      </div>
      {city.featured && (
        <div className="mt-2 flex items-center">
          <Award className="text-yellow-500 mr-1" size={14} />
          <span className="text-xs text-yellow-600 font-medium">Featured</span>
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3 shadow-lg">
                <Globe size={24} />
              </div>
              <h1 className="text-xl font-bold text-gray-900 hidden sm:block">City Explorer</h1>
              <h1 className="text-xl font-bold text-gray-900 sm:hidden">Explorer</h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search cities, countries, or attractions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 bg-white/70"
                />
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setFilterFeatured(!filterFeatured)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    filterFeatured 
                      ? 'bg-blue-500 text-white shadow-md' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Featured
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-full">
                  <Settings size={20} />
                </button>
              </div>
            </div>
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 bg-white/90 backdrop-blur-sm"
            >
              <div className="px-4 py-3 space-y-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search cities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full bg-white/70"
                  />
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setFilterFeatured(!filterFeatured)}
                    className={`flex-1 px-3 py-2 rounded-full text-sm font-medium transition-all ${
                      filterFeatured 
                        ? 'bg-blue-500 text-white shadow-md' 
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    Featured
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Panel - Search and List */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/3 flex flex-col gap-4"
          >
            {/* Filters */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                  <Filter className="mr-2" size={20} />
                  Filters
                </h2>
                <span className="text-sm text-gray-500">{filteredCities.length} cities</span>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
                  <div className="flex flex-wrap gap-2">
                    <button 
                      onClick={() => setFilterRegion("all")}
                      className={`px-3 py-1 rounded-full text-sm ${
                        filterRegion === "all" 
                          ? "bg-blue-500 text-white" 
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      All Regions
                    </button>
                    {countries.map(country => (
                      <button 
                        key={country}
                        onClick={() => setFilterRegion(country)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          filterRegion === country 
                            ? "bg-blue-500 text-white" 
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {country}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filterFeatured}
                      onChange={() => setFilterFeatured(!filterFeatured)}
                      className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Featured Cities Only</span>
                  </label>
                </div>
              </div>
            </div>
            {/* Cities List */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-4 flex-1 overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {filteredCities.length} Cities Found
                </h2>
                <div className="flex items-center text-sm text-gray-500">
                  <Heart className="text-red-500 mr-1" size={16} />
                  <span>Favorites: {favorites.length}</span>
                </div>
              </div>
              <div className="overflow-y-auto max-h-[600px] pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <AnimatePresence>
                  {loading ? (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-3"></div>
                      <p className="text-gray-600">Loading cities...</p>
                    </div>
                  ) : filteredCities.length === 0 ? (
                    <div className="text-center py-8">
                      <MapPin className="mx-auto text-gray-400 mb-2" size={48} />
                      <p className="text-gray-600">No cities match your search criteria</p>
                    </div>
                  ) : (
                    filteredCities.map((city, index) => renderCityCard(city, index))
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
          {/* Right Panel - Map and Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-2/3 flex flex-col gap-6"
          >
            {/* Map Container */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="h-96 md:h-[500px] relative">
                {!mapLoaded && (
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-3"></div>
                      <p className="text-gray-600">Loading map...</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl flex items-center justify-center">
                  <iframe
                    src={`https://www.google.com/maps?q=${activeCity.lat},${activeCity.lon}&z=12&output=embed`}
                    width="100%"
                    height="100%"
                    className="rounded-xl"
                    loading="lazy"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            {/* City Details */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="relative">
                      <img
                        src={activeCity.image}
                        alt={activeCity.title}
                        onError={handleImageError}
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3 flex space-x-2">
                        <button
                          onClick={() => toggleFavorite(activeCity.id)}
                          className={`p-2 rounded-full ${
                            favorites.includes(activeCity.id)
                              ? 'bg-red-100 text-red-500'
                              : 'bg-white text-gray-500 hover:bg-gray-100'
                          }`}
                        >
                          <Heart size={18} className={favorites.includes(activeCity.id) ? 'fill-current' : ''} />
                        </button>
                        <button
                          onClick={() => window.open(`https://www.google.com/maps?q=${activeCity.lat},${activeCity.lon}`, '_blank')}
                          className="p-2 bg-white text-gray-500 rounded-full hover:bg-gray-100"
                        >
                          <Navigation size={18} />
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center space-x-4">
                      <button
                        onClick={() => addToTrip(activeCity.id)}
                        className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                      >
                        <Plus size={20} />
                      </button>
                      <button
                        onClick={() => window.open(`https://www.google.com/maps?q=${activeCity.lat},${activeCity.lon}`, '_blank')}
                        className="p-3 bg-gray-100 text-gray-500 rounded-full hover:bg-gray-200"
                      >
                        <Navigation size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{activeCity.title}</h2>
                        <div className="flex items-center mt-1">
                          <MapPin className="text-blue-500 mr-1" size={16} />
                          <span className="text-gray-600">{activeCity.country}</span>
                        </div>
                      </div>
                      <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                        <Star className="text-yellow-400 fill-current mr-1" size={16} />
                        <span className="font-bold">{activeCity.rating}</span>
                      </div>
                    </div>
                    <p className="mt-3 text-gray-700">{activeCity.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center">
                          <Users className="text-blue-500 mr-2" size={16} />
                          <span className="font-medium">Population</span>
                        </div>
                        <p className="text-gray-700">{activeCity.population}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="flex items-center">
                          <Sun className="text-green-500 mr-2" size={16} />
                          <span className="font-medium">Climate</span>
                        </div>
                        <p className="text-gray-700">{activeCity.climate}</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="flex items-center">
                          <Calendar className="text-purple-500 mr-2" size={16} />
                          <span className="font-medium">Best Time</span>
                        </div>
                        <p className="text-gray-700">{activeCity.bestTime}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-semibold text-gray-800 mb-2">Top Attractions</h3>
                      <div className="flex flex-wrap gap-2">
                        {activeCity.attractions.map((attraction, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                          >
                            {attraction}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <Globe className="text-gray-500 mr-3" size={20} />
                        <div>
                          <p className="text-sm font-medium">Currency</p>
                          <p className="text-gray-600">{activeCity.currency}</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <Clock className="text-gray-500 mr-3" size={20} />
                        <div>
                          <p className="text-sm font-medium">Timezone</p>
                          <p className="text-gray-600">{activeCity.timezone}</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <BookOpen className="text-gray-500 mr-3" size={20} />
                        <div>
                          <p className="text-sm font-medium">Language</p>
                          <p className="text-gray-600">{activeCity.language}</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <Shield className="text-gray-500 mr-3" size={20} />
                        <div>
                          <p className="text-sm font-medium">Safety</p>
                          <p className="text-gray-600">{activeCity.safety}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <button 
                        onClick={() => window.open(`https://www.google.com/maps?q=${activeCity.lat},${activeCity.lon}`, '_blank')}
                        className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        <Navigation className="mr-2" size={18} />
                        View on Map
                      </button>
                      <button 
                        onClick={() => addToTrip(activeCity.id)}
                        className="flex-1 flex items-center justify-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                      >
                        <Plus className="mr-2" size={18} />
                        Add to Trip
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
