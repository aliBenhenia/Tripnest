import { Maximize2, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { moroccanCities, cityActivities, categories } from "@/lib/data"
import ClientCityPage from "./client-page"

interface PageProps {
  params: { slug: string }
}

export default function CityPage({ params }: PageProps) {
  // Find the city data on the server
  const city = moroccanCities.find((city) => city.slug === params.slug) || moroccanCities[0]
  const activities = cityActivities[city.id] || []

  // Pass the resolved data to the client component
  return <ClientCityPage city={city} activities={activities} />
}

