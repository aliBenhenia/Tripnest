import { moroccanCities } from "@/lib/data";
import ClientCityPage from "./client-page";

interface PageProps {
  params: { slug: string };
}

interface City {
  id: number;
  name: string;
  slug: string;
  imageUrl: string;
  imageUrl2: string;
}

const DEFAULT_IMAGE = "/default-city.jpg";

async function fetchWikiImage(cityName: string): Promise<string> {
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(
    cityName
  )}&prop=pageimages&format=json&pithumbsize=800&origin=*`;

  try {
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error("Wikipedia API request failed");
    const data = await res.json();

    const pages = data.query?.pages;
    if (!pages) return "";

    // Pages is an object with page IDs as keys
    const pageId = Object.keys(pages)[0];
    const page = pages[pageId];

    // Return thumbnail image URL if available
    return page?.thumbnail?.source || "";
  } catch (err) {
    console.error("Error fetching Wikipedia image:", err);
    return "";
  }
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await Promise.resolve(params);
  const city = moroccanCities.find((c) => c.slug === slug);

  if (city) {
    return <ClientCityPage city={city} />;
  }

  const fallbackName = slug.replace(/-/g, " ");
  // Fetch one Wikipedia image twice as fallback
  const imageUrl = (await fetchWikiImage(fallbackName)) || DEFAULT_IMAGE;

  const fallbackCity: City = {
    id: -1,
    name: fallbackName,
    slug,
    imageUrl,
    imageUrl2: imageUrl, // using same image twice as fallback
  };

  return <ClientCityPage city={fallbackCity} />;
}
