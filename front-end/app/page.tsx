'use client'

import dynamic from 'next/dynamic'
import { Suspense, useState, useEffect } from 'react'
import { Header } from "@/components/Header"
import { SearchBar } from "@/components/SearchBar"
import { SectionHeader } from "@/components/SectionHeader"
import { useSearch } from "@/hooks/useSearch"
import { ErrorBoundary } from "@/components/ErrorBoundary"
import { PopularPlaces } from "@/components/sections/PopularPlaces"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Compass, TrendingUp, MapPin } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"

// Dynamically import components that are not needed immediately
const CityCard = dynamic(() => import('@/components/CityCard').then(mod => mod.CityCard), {
  loading: () => (
    <div className="animate-pulse rounded-xl overflow-hidden h-[220px] w-[180px]">
      <div className="bg-gray-200 h-[75%]"></div>
      <div className="p-3 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  )
})

const ExperienceCard = dynamic(() => import('@/components/ExperienceCard').then(mod => mod.ExperienceCard), {
  loading: () => (
    <div className="animate-pulse rounded-xl overflow-hidden h-[200px] w-[280px] flex-shrink-0">
      <div className="bg-gray-200 h-[65%]"></div>
      <div className="p-3 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  )
})

// Generate stable ratings based on city name
const getStableRating = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = ((hash << 5) - hash) + name.charCodeAt(i);
    hash = hash & hash;
  }
  // Generate a rating between 4.5 and 5.0 based on hash
  return 4.5 + (Math.abs(hash) % 50) / 100;
}

// Featured destinations for hero section
const FEATURED_DESTINATIONS = [
  {
    name: "Marrakech",
    description: "Explore ancient medinas and vibrant souks",
    image: "/images/marrakech.jpg"
  },
  {
    name: "Casablanca",
    description: "Experience the coastal charm and modern architecture",
    image: "/images/casablanca.jpg"
  },
  {
    name: "Fes",
    description: "Discover the world's oldest medieval medina",
    image: "/images/fes.jpg"
  },
  {
    name: "Chefchaouen",
    description: "Experience the blue city and stunning mountain views",
    image: "/images/chefchaouen.jpg"
  }
];

// Add client-side only wrapper for motion components
const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  if (!hasMounted) {
    return null;
  }
  
  return children;
};

export default function Home() {
  const { searchQuery, isLoading, handleSearch, cities, experiences } = useSearch();
  const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  // Preload hero images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = FEATURED_DESTINATIONS.map((destination) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = destination.image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      
      try {
        await Promise.all(imagePromises);
        setImagesPreloaded(true);
      } catch (error) {
        console.error('Failed to preload images:', error);
        // Continue anyway if some images fail to load
        setImagesPreloaded(true);
      }
    };
    
    preloadImages();
  }, []);

  // Process cities with stable ratings
  const processedCities = cities.map(city => ({
    ...city,
    rating: getStableRating(city.name),
    location: `${city.name} Region, Morocco`
  }));

  // Auto-rotate featured destinations
  useEffect(() => {
    // Only start the rotation after images are preloaded
    if (!imagesPreloaded) return;
    
    const interval = setInterval(() => {
      setActiveFeaturedIndex((current) => 
        current === FEATURED_DESTINATIONS.length - 1 ? 0 : current + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [imagesPreloaded]);

  // Animation visibility
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full mx-auto bg-white min-h-screen md:max-w-none ">
      <ErrorBoundary>
        <Header 
          username="aLi"
          avatarUrl="https://avatars.githubusercontent.com/u/95689141?s=400&u=275826ef98503225cfa203907197ad854e0111a1&v=4"
        />

        {/* Hero Section */}
        <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-xl mx-4 md:mx-8 lg:mx-16 mt-4 md:mt-6">
          {FEATURED_DESTINATIONS.map((destination, index) => (
            <div 
              key={destination.name}
              className={`absolute inset-0 transition-opacity duration-1000 rounded-xl ${index === activeFeaturedIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${destination.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-xl"></div>
            </div>
          ))}
          
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 md:p-8 text-center z-10 max-w-4xl mx-auto left-0 right-0">
            <ClientOnly>
              <motion.div 
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 w-full"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
                  {FEATURED_DESTINATIONS[activeFeaturedIndex].name}
                </h1>
                <p className="text-lg md:text-xl mx-auto drop-shadow-md">
                  {FEATURED_DESTINATIONS[activeFeaturedIndex].description}
                </p>
              </motion.div>
            </ClientOnly>
            
            <ClientOnly>
              <motion.div 
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full max-w-2xl mx-auto"
              >
                <div className="bg-white/95 backdrop-blur-sm p-1.5 sm:p-2 rounded-xl shadow-lg mx-auto">
                  <SearchBar onSearch={handleSearch} />
                </div>
              </motion.div>
            </ClientOnly>
            
            <ClientOnly>
              <motion.div 
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInVariants}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 justify-center w-full max-w-md mx-auto"
              >
                <Button className="bg-white text-black hover:bg-white/90 font-medium rounded-full px-4 sm:px-6 py-6 text-base sm:text-lg w-full">
                  Explore Cities (9)
                </Button>
                <Button variant="outline" className="border-white border-2 text-black rounded-full px-4 sm:px-6 py-6 text-base sm:text-lg w-full transition-colors">
                  View Experiences
                </Button>
              </motion.div>
            </ClientOnly>
          </div>
          
          {/* Image indicator dots */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
            {FEATURED_DESTINATIONS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeaturedIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeFeaturedIndex 
                    ? 'bg-white scale-110 shadow-md' 
                    : 'bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`View ${FEATURED_DESTINATIONS[index].name}`}
              />
            ))}
          </div>
        </div>


        {/* Popular Places */}
        <div className="py-12 md:py-16 py-12 md:py-16">
          <div className="px-4 md:px-8 lg:px-16 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                Popular Places {!isLoading && cities.length > 0 && (
                  <span className="text-base text-gray-500 ml-2">
                    ({cities.length})
                  </span>
                )}
              </h2>
              <p className="mt-1 text-sm sm:text-base text-gray-600">
                Explore Morocco's most beloved destinations
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full transition-all duration-200 hover:bg-primary/5 hover:border-primary/30"
                  onClick={() => {
                    const container = document.getElementById('places-container')
                    if (container) {
                      container.scrollBy({ left: -400, behavior: 'smooth' })
                    }
                  }}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full transition-all duration-200 hover:bg-primary/5 hover:border-primary/30"
                  onClick={() => {
                    const container = document.getElementById('places-container')
                    if (container) {
                      container.scrollBy({ left: 400, behavior: 'smooth' })
                    }
                  }}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
              <Link href="/cities">
                <Button
                  variant="ghost"
                  className="text-sm sm:text-base text-gray-600 hover:text-gray-900 font-medium"
                >
                  View all places
                </Button>
              </Link>
            </div>
          </div>
          
          <ClientOnly>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <PopularPlaces 
                places={processedCities}
                isLoading={isLoading}
                hideHeader={true}
              />
            </motion.div>
          </ClientOnly>
        </div>

        {/* Popular Experiences */}
        {/* Popular Experiences */}
<div className="px-4 sm:px-6 md:px-10 lg:px-16 w-full max-w-[1600px] mx-auto">
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
    {/* Heading and Subtext */}
    <div>
      <div className="flex items-center gap-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          Popular Experiences
        </h2>
        {!isLoading && experiences.length > 0 && (
          <span className="text-base text-gray-500">
            ({experiences.length})
          </span>
        )}
      </div>
      <p className="mt-1 text-sm sm:text-base text-gray-600">
        Discover unique activities with local experts
      </p>
    </div>

    {/* Controls */}
    <div className="flex items-center gap-2">
      {/* Scroll Arrows (hidden on small screens) */}
      <div className="hidden md:flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full transition hover:bg-primary/5 hover:border-primary/30"
          onClick={() => {
            const container = document.getElementById('experiences-container')
            if (container) container.scrollBy({ left: -400, behavior: 'smooth' })
          }}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full transition hover:bg-primary/5 hover:border-primary/30"
          onClick={() => {
            const container = document.getElementById('experiences-container')
            if (container) container.scrollBy({ left: 400, behavior: 'smooth' })
          }}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* View All */}
      <Link href="/experiences">
        <Button
          variant="ghost"
          className="text-sm sm:text-base text-gray-600 hover:text-gray-900 font-medium"
        >
          View all experiences
        </Button>
      </Link>
    </div>
  </div>

  {/* Content */}
  <Suspense
    fallback={
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="rounded-xl bg-gray-200 h-[180px] md:h-[200px] w-full" />
            <div className="mt-3 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/4" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    }
  >
    <div className="relative mt-6">
      <div
        id="experiences-container"
        className="overflow-x-auto flex gap-4 snap-x scroll-smooth scrollbar-hide pr-2 sm:pr-4 md:pr-8 lg:pr-16"
      >
        {experiences.map((experience, index) => (
          <ClientOnly key={experience.id}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] snap-start flex-shrink-0"
            >
              <ExperienceCard
                {...experience}
                className="hover:z-10"
              />
            </motion.div>
          </ClientOnly>
        ))}
      </div>
    </div>
  </Suspense>
</div>


        {/* CTA Section */}
        <div className="py-16 px-4 md:px-8 lg:px-16">
          <ClientOnly>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto bg-primary/10 rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Experience Morocco?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Plan your perfect trip with our expert recommendations and personalized itineraries</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/planner">
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2">Start Planning</Button>
                </Link>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">Contact an Expert</Button>
              </div>
            </motion.div>
          </ClientOnly>
        </div>

        <Footer />
      </ErrorBoundary>
    </div>
  )
}

