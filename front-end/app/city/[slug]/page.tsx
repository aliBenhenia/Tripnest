import { moroccanCities, cityActivities } from "@/lib/data"
import ClientCityPage from "./client-page"

interface PageProps {
  params: { slug: string }
}

export default async function CityPage({ params }: PageProps) {
  // Ensure params is awaited before use
  const { slug } = await Promise.resolve(params) 

  // Find the city data
  // const city = moroccanCities.find((city) => city.slug === slug) || moroccanCities[0]
  const city = slug;
  const activities = cityActivities[city.id] || []

  // Pass the resolved data to the client component
  return <ClientCityPage city={city} activities={activities} />
}
