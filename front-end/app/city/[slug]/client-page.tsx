"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MapPin,
  Star,
  Volleyball,
  RotateCw,
  Loader2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BottomNavigation from "@/components/bottom-navigation"
import ActivityDrawer from "@/components/ActivityDrawer"

/* ========================================================================== */
/*  Categories                                                                */
/* ========================================================================== */

export const categories = [
  { id: 1, name: "Beach", icon: "/beach.png" },
  { id: 2, name: "Photography", icon: "/camera.png" },
  { id: 3, name: "Tour", icon: "/earth.png" },
  { id: 4, name: "Travel", icon: "/travel-bag.png" },
]

/* ========================================================================== */
/*  Types                                                                     */
/* ========================================================================== */

export type PlaceType = "Beach" | "Photography" | "Tour" | "Travel"

export interface WikiActivity {
  id: string
  name: string
  description: string
  imageUrl: string
  type: PlaceType
  lat: number
  lon: number
  address: string
  distanceKm: number
  wikipediaUrl: string | null
  osmUrl: string
  website: string | null
  score: number
}

interface GeoCity {
  name: string
  lat: number
  lon: number
  bbox: [number, number, number, number] // minLat, minLon, maxLat, maxLon
}

type Tags = Record<string, string>

/* ========================================================================== */
/*  Timing budget — nothing is allowed to hang                                */
/* ========================================================================== */

const T_GEOCODE = 8000
const T_WIKI = 10000
const T_OVERPASS = 14000

/** Two mirrors, raced in parallel. Whichever answers first wins. */
const OVERPASS_ENDPOINTS = [
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass-api.de/api/interpreter",
]

/** Survives client-side navigation, so revisiting a city is instant. */
const placesCache = new Map<string, { center: { lat: number; lng: number }; places: WikiActivity[] }>()

/* ========================================================================== */
/*  Utilities                                                                 */
/* ========================================================================== */

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

function haversineKm(aLat: number, aLon: number, bLat: number, bLon: number) {
  const R = 6371
  const dLat = ((bLat - aLat) * Math.PI) / 180
  const dLon = ((bLon - aLon) * Math.PI) / 180
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((aLat * Math.PI) / 180) * Math.cos((bLat * Math.PI) / 180) * Math.sin(dLon / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(s))
}

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\u0600-\u06ff ]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

/** Every network call goes through here, so every call has a deadline. */
async function fetchJson(url: string, init: RequestInit = {}, ms = 10000, signal?: AbortSignal) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), ms)
  const relay = () => controller.abort()
  signal?.addEventListener("abort", relay)
  try {
    const res = await fetch(url, { ...init, signal: controller.signal })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.json()
  } finally {
    clearTimeout(timer)
    signal?.removeEventListener("abort", relay)
  }
}

/** Resolves with the first task that succeeds; null if they all fail. */
function firstSuccess<T>(tasks: Array<() => Promise<T>>): Promise<T | null> {
  return new Promise((resolve) => {
    let remaining = tasks.length
    let settled = false
    if (!remaining) return resolve(null)
    for (const task of tasks) {
      task().then(
        (value) => {
          if (!settled) {
            settled = true
            resolve(value)
          }
        },
        () => {
          remaining -= 1
          if (remaining === 0 && !settled) {
            settled = true
            resolve(null)
          }
        },
      )
    }
  })
}

/* ========================================================================== */
/*  1. City name -> coordinates + bounding box                                */
/* ========================================================================== */

async function geocodeViaNominatim(query: string, signal?: AbortSignal): Promise<GeoCity | null> {
  const url =
    `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&accept-language=en` +
    `&q=${encodeURIComponent(query)}`

  const data = await fetchJson(url, { headers: { Accept: "application/json" } }, T_GEOCODE, signal)
  if (!Array.isArray(data) || !data.length) return null

  const hit = data[0]
  const lat = parseFloat(hit.lat)
  const lon = parseFloat(hit.lon)
  if (Number.isNaN(lat) || Number.isNaN(lon)) return null

  // Nominatim order: [minLat, maxLat, minLon, maxLon]
  let bbox: [number, number, number, number] = [lat - 0.08, lon - 0.08, lat + 0.08, lon + 0.08]
  if (Array.isArray(hit.boundingbox) && hit.boundingbox.length === 4) {
    const [s, n, w, e] = hit.boundingbox.map(Number)
    // Cap the box — a whole province makes Overpass crawl
    const midLat = (s + n) / 2
    const midLon = (w + e) / 2
    const halfLat = clamp((n - s) / 2, 0.02, 0.12)
    const halfLon = clamp((e - w) / 2, 0.02, 0.14)
    bbox = [midLat - halfLat, midLon - halfLon, midLat + halfLat, midLon + halfLon]
  }

  return { name: hit.name || String(hit.display_name || query).split(",")[0], lat, lon, bbox }
}

/** Fallback for when Nominatim is rate-limiting or unreachable. */
async function geocodeViaWikipedia(query: string, signal?: AbortSignal): Promise<GeoCity | null> {
  const url =
    `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&redirects=1` +
    `&prop=coordinates&titles=${encodeURIComponent(query)}`

  const json = await fetchJson(url, {}, T_GEOCODE, signal)
  for (const page of Object.values<any>(json?.query?.pages || {})) {
    const coord = page?.coordinates?.[0]
    if (coord?.lat != null && coord?.lon != null) {
      return {
        name: page.title || query,
        lat: coord.lat,
        lon: coord.lon,
        bbox: [coord.lat - 0.07, coord.lon - 0.07, coord.lat + 0.07, coord.lon + 0.07],
      }
    }
  }
  return null
}

async function geocodeCity(city: string, country?: string, signal?: AbortSignal) {
  const query = country ? `${city}, ${country}` : city
  return firstSuccess<GeoCity>([
    async () => {
      const r = await geocodeViaNominatim(query, signal)
      if (!r) throw new Error("no result")
      return r
    },
    async () => {
      const r = await geocodeViaWikipedia(city, signal)
      if (!r) throw new Error("no result")
      return r
    },
  ])
}

/* ========================================================================== */
/*  2. Wikipedia — fast path. Georeferenced articles inside the city.         */
/* ========================================================================== */

interface WikiInfo {
  title: string
  extract: string
  thumbnail: string
  url: string
}

/** exlimit and pilimit both default to 1. Without them you get one description
 *  and one photo no matter how many titles you send. Max is 20 per request. */
async function fetchWikiDetails(lang: string, titles: string[], signal?: AbortSignal) {
  const unique = Array.from(new Set(titles)).filter(Boolean)
  const chunks: string[][] = []
  for (let i = 0; i < unique.length; i += 20) chunks.push(unique.slice(i, i + 20))

  const results = await Promise.all(
    chunks.map(async (chunk) => {
      const url =
        `https://${lang}.wikipedia.org/w/api.php?action=query&format=json&origin=*&redirects=1` +
        `&prop=pageimages|extracts&exintro=1&explaintext=1&exlimit=20` +
        `&piprop=thumbnail&pithumbsize=800&pilimit=20` +
        `&titles=${encodeURIComponent(chunk.join("|"))}`
      try {
        return await fetchJson(url, {}, T_WIKI, signal)
      } catch {
        return null
      }
    }),
  )

  const out = new Map<string, WikiInfo>()

  for (const json of results) {
    if (!json) continue

    const alias = new Map<string, string>()
    for (const n of json?.query?.normalized || []) alias.set(normalize(n.from), n.to)
    for (const r of json?.query?.redirects || []) alias.set(normalize(r.from), r.to)

    for (const page of Object.values<any>(json?.query?.pages || {})) {
      if (!page?.title || page.missing !== undefined) continue
      out.set(normalize(page.title), {
        title: page.title,
        extract: page.extract || "",
        thumbnail: page.thumbnail?.source || "",
        url: `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(String(page.title).replace(/ /g, "_"))}`,
      })
    }

    for (const [from, to] of alias) {
      const info = out.get(normalize(to))
      if (info) out.set(from, info)
    }
  }

  return out
}

async function wikipediaGeosearch(lat: number, lon: number, signal?: AbortSignal) {
  const url =
    `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=geosearch` +
    `&gscoord=${lat}%7C${lon}&gsradius=10000&gslimit=50`
  try {
    const json = await fetchJson(url, {}, T_WIKI, signal)
    return (json?.query?.geosearch || []) as { pageid: number; title: string; lat: number; lon: number }[]
  } catch {
    return []
  }
}

const BEACH_WORDS = /\b(beach|plage|playa|corniche|strand|bay|lagoon)\b/i
const STAY_WORDS = /\b(hotel|resort|riad|hostel)\b/i
const VIEW_WORDS = /\b(tower|lighthouse|viewpoint|bridge|skyline|hill|mount)\b/i
const NOT_A_PLACE = /^(list of|geography of|history of|economy of|demographics of|timeline of|outline of)/i

function classifyByTitle(title: string, extract: string): PlaceType {
  const text = `${title} ${extract.slice(0, 200)}`
  if (BEACH_WORDS.test(text)) return "Beach"
  if (STAY_WORDS.test(text)) return "Travel"
  if (VIEW_WORDS.test(text)) return "Photography"
  return "Tour"
}

async function loadWikipediaPlaces(geo: GeoCity, signal?: AbortSignal): Promise<WikiActivity[]> {
  const articles = await wikipediaGeosearch(geo.lat, geo.lon, signal)
  if (!articles.length) return []

  const details = await fetchWikiDetails(
    "en",
    articles.map((a) => a.title),
    signal,
  )

  const places: WikiActivity[] = []

  for (const article of articles) {
    if (NOT_A_PLACE.test(article.title)) continue
    const info = details.get(normalize(article.title))
    if (!info) continue

    places.push({
      id: `wiki-${article.pageid}`,
      name: article.title,
      description: info.extract.slice(0, 700),
      imageUrl: info.thumbnail,
      type: classifyByTitle(article.title, info.extract),
      lat: article.lat,
      lon: article.lon,
      address: "",
      distanceKm: Number(haversineKm(geo.lat, geo.lon, article.lat, article.lon).toFixed(1)),
      wikipediaUrl: info.url,
      osmUrl: `https://www.openstreetmap.org/#map=17/${article.lat}/${article.lon}`,
      website: null,
      score: (info.thumbnail ? 8 : 4) + (info.extract ? 2 : 0),
    })
  }

  return places
}

/* ========================================================================== */
/*  3. Overpass — enrichment path. Slower, so it never blocks the render.     */
/* ========================================================================== */

function buildOverpassQuery(bbox: [number, number, number, number]) {
  const B = `(${bbox.join(",")})`
  // Nodes and ways only. Relations force recursion and are the main slowdown.
  return `[out:json][timeout:20];
(
  nw["tourism"~"attraction|museum|gallery|viewpoint|artwork|zoo|theme_park"]["name"]${B};
  nw["historic"~"monument|memorial|castle|fort|ruins|archaeological_site|palace|city_gate"]["name"]${B};
  nw["natural"="beach"]["name"]${B};
  nw["leisure"~"park|garden|nature_reserve|beach_resort|water_park"]["name"]${B};
  nw["tourism"~"hotel|hostel|guest_house|resort"]["name"]${B};
);
out center 150;`
}

function classifyByTags(tags: Tags): PlaceType {
  const { tourism, natural, leisure, historic, man_made: manMade } = tags
  if (natural === "beach" || leisure === "beach_resort" || leisure === "water_park") return "Beach"
  if (/hotel|hostel|guest_house|motel|apartment|resort/.test(tourism || "")) return "Travel"
  if (tourism === "viewpoint" || tourism === "artwork" || /lighthouse|tower|bridge/.test(manMade || ""))
    return "Photography"
  if (tourism || historic || leisure) return "Tour"
  return "Tour"
}

function scoreTags(tags: Tags) {
  let score = 0
  if (tags.wikidata) score += 4
  if (tags.wikipedia) score += 4
  if (tags.image || tags.wikimedia_commons) score += 2
  if (tags.tourism === "attraction") score += 3
  if (tags.tourism === "museum" || tags.historic) score += 2
  if (tags.natural === "beach") score += 2
  if (tags.website || tags["contact:website"]) score += 1
  if (/hotel|hostel|guest_house|motel|apartment/.test(tags.tourism || "")) score -= 3
  return score
}

function buildAddress(tags: Tags) {
  return [
    [tags["addr:housenumber"], tags["addr:street"]].filter(Boolean).join(" "),
    tags["addr:suburb"] || tags["addr:district"],
    tags["addr:city"],
  ]
    .filter(Boolean)
    .join(", ")
}

function commonsImage(tags: Tags) {
  const raw = tags.image || tags.wikimedia_commons || ""
  if (!raw) return ""
  if (/^https?:\/\//i.test(raw)) return raw
  const file = raw.replace(/^File:/i, "").trim()
  return file ? `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=600` : ""
}

async function loadOverpassPlaces(geo: GeoCity, signal?: AbortSignal): Promise<WikiActivity[]> {
  const body = "data=" + encodeURIComponent(buildOverpassQuery(geo.bbox))

  const elements = await firstSuccess<any[]>(
    OVERPASS_ENDPOINTS.map((endpoint) => async () => {
      const json = await fetchJson(
        endpoint,
        { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body },
        T_OVERPASS,
        signal,
      )
      if (!Array.isArray(json?.elements) || json.elements.length === 0) throw new Error("empty")
      return json.elements as any[]
    }),
  )

  if (!elements) return []

  const places: WikiActivity[] = []

  for (const el of elements) {
    const tags: Tags = el.tags || {}
    const name = tags["name:en"] || tags.name
    if (!name) continue

    const lat = el.lat ?? el.center?.lat
    const lon = el.lon ?? el.center?.lon
    if (typeof lat !== "number" || typeof lon !== "number") continue

    places.push({
      id: `${el.type}-${el.id}`,
      name,
      description: tags.description || "",
      imageUrl: commonsImage(tags),
      type: classifyByTags(tags),
      lat,
      lon,
      address: buildAddress(tags),
      distanceKm: Number(haversineKm(geo.lat, geo.lon, lat, lon).toFixed(1)),
      wikipediaUrl: null,
      osmUrl: `https://www.openstreetmap.org/${el.type}/${el.id}`,
      website: tags.website || tags["contact:website"] || null,
      score: scoreTags(tags),
    })
  }

  return places
}

/* ========================================================================== */
/*  4. Merge                                                                  */
/* ========================================================================== */

function mergePlaces(primary: WikiActivity[], extra: WikiActivity[]): WikiActivity[] {
  const byKey = new Map<string, WikiActivity>()

  for (const place of primary) {
    const key = normalize(place.name)
    if (key) byKey.set(key, { ...place })
  }

  for (const place of extra) {
    const key = normalize(place.name)
    if (!key) continue

    const existing = byKey.get(key)
    if (!existing) {
      byKey.set(key, { ...place })
      continue
    }

    // Wikipedia text and photo win; OSM contributes address, website, category
    existing.address = existing.address || place.address
    existing.website = existing.website || place.website
    existing.imageUrl = existing.imageUrl || place.imageUrl
    existing.description = existing.description || place.description
    if (place.type !== "Tour") existing.type = place.type
    existing.score += 2
  }

  return Array.from(byKey.values())
    .sort((a, b) => b.score - a.score || a.distanceKm - b.distanceKm)
    .slice(0, 90)
}

function countByType(places: WikiActivity[]): Record<string, number> {
  return {
    Beach: places.filter((p) => p.type === "Beach").length,
    Photography: places.filter((p) => p.type === "Photography").length,
    Tour: places.filter((p) => p.type === "Tour").length,
    Travel: places.filter((p) => p.type === "Travel").length,
  }
}

/* ========================================================================== */
/*  Photo with fallback                                                       */
/* ========================================================================== */

const FALLBACK_IMAGE = "/placeholder.svg"

function PlacePhoto({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [current, setCurrent] = useState(src || FALLBACK_IMAGE)
  useEffect(() => setCurrent(src || FALLBACK_IMAGE), [src])
  return (
    <img src={current} alt={alt} loading="lazy" onError={() => setCurrent(FALLBACK_IMAGE)} className={className} />
  )
}

/* ========================================================================== */
/*  Page                                                                      */
/* ========================================================================== */

export default function ClientCityPage({ city }: { city: any }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [cityActivitiesList, setCityActivitiesList] = useState<WikiActivity[]>([])
  const [cityPosition, setCityPosition] = useState<{ lat: number; lng: number } | null>(null)
  const [loading, setLoading] = useState(true)
  const [refining, setRefining] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedActivity, setSelectedActivity] = useState<WikiActivity | null>(null)

  const abortRef = useRef<AbortController | null>(null)

  const load = useCallback(
    async (refresh = false) => {
      if (!city?.name) {
        setLoading(false)
        return
      }

      const key = `${city.name}|${city.country || ""}`.toLowerCase()

      if (!refresh && placesCache.has(key)) {
        const cached = placesCache.get(key)!
        setCityActivitiesList(cached.places)
        setCityPosition(cached.center)
        setLoading(false)
        setRefining(false)
        setError(null)
        return
      }

      abortRef.current?.abort()
      const controller = new AbortController()
      abortRef.current = controller
      const { signal } = controller

      setLoading(true)
      setRefining(false)
      setError(null)

      try {
        const geo = await geocodeCity(city.name, city.country, signal)
        if (signal.aborted) return

        if (!geo) {
          setCityActivitiesList([])
          setError(`Could not locate "${city.name}". Check the spelling, or add a country to the city record.`)
          setLoading(false)
          return
        }

        setCityPosition({ lat: geo.lat, lng: geo.lon })

        // Fast path first: something on screen within a couple of seconds
        const wikiPlaces = await loadWikipediaPlaces(geo, signal)
        if (signal.aborted) return

        if (wikiPlaces.length) {
          setCityActivitiesList(mergePlaces(wikiPlaces, []))
          setLoading(false)
          setRefining(true)
        }

        // Slow path second: enriches the list, never blocks it
        const osmPlaces = await loadOverpassPlaces(geo, signal)
        if (signal.aborted) return

        const merged = mergePlaces(wikiPlaces, osmPlaces)

        if (!merged.length) {
          setError(`No places are mapped around ${geo.name} yet. Try a nearby larger city.`)
        } else {
          setCityActivitiesList(merged)
          placesCache.set(key, { center: { lat: geo.lat, lng: geo.lon }, places: merged })
        }
      } catch {
        if (controller.signal.aborted) return
        setError("Could not reach the map services. Check your connection and try again.")
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
          setRefining(false)
        }
      }
    },
    [city?.name, city?.country],
  )

  useEffect(() => {
    load()
    return () => abortRef.current?.abort()
  }, [load])

  const openActivityDrawer = (activity: WikiActivity) => {
    setSelectedActivity(activity)
    setDrawerOpen(true)
  }

  const closeActivityDrawer = () => {
    setDrawerOpen(false)
    setSelectedActivity(null)
  }

  const counts = countByType(cityActivitiesList)

  const filteredActivities =
    selectedCategory === "all"
      ? cityActivitiesList
      : cityActivitiesList.filter((a) => a.type.toLowerCase() === selectedCategory.toLowerCase())

  const nextSlide = () => setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1))
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? 1 : prev - 1))

  const cityName = city?.name || "City"
  const activeCategoryLabel = categories.find((c) => c.name.toLowerCase() === selectedCategory)?.name

  return (
    <div className="w-full mx-auto bg-white min-h-screen pb-16 md:pb-0 md:max-w-none">
      {/* Header image slider */}
      <div className="relative h-[240px] md:h-[400px] lg:h-[500px] w-full">
        <Link href="/" className="absolute top-4 left-4 z-10 bg-white/30 backdrop-blur-sm p-2 rounded-full">
          <ArrowLeft className="h-5 w-5 text-white" />
        </Link>
        <div className="absolute right-4 bottom-4 z-10 bg-white/30 backdrop-blur-sm p-2 rounded-full">
          <Maximize2 className="h-5 w-5 text-white" />
        </div>
        <div className="relative h-full w-full overflow-hidden">
          <div
            className="flex h-full transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <Image
              src={city?.imageUrl || FALLBACK_IMAGE}
              alt={cityName}
              className="object-cover w-full h-full flex-shrink-0"
              width={1200}
              height={500}
              priority
            />
            <Image
              src={city?.imageUrl2 || city?.imageUrl || FALLBACK_IMAGE}
              alt={cityName}
              className="object-cover w-full h-full flex-shrink-0"
              width={1200}
              height={500}
            />
          </div>

          <button
            onClick={prevSlide}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-1 md:p-2 rounded-full"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-1 md:p-2 rounded-full"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {[0, 1].map((index) => (
              <div
                key={index}
                className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Category filter */}
      <div className="px-4 mt-4 md:px-8 lg:px-16 md:mt-8 md:max-w-5xl md:mx-auto">
        <h2 className="text-2xl font-bold md:text-3xl">Explore {cityName}</h2>
        <div className="relative mt-4">
          <div className="overflow-x-auto flex gap-6 md:justify-start md:gap-16 md:mt-6 pb-2 scrollbar-hide scroll-smooth">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`flex flex-col items-center flex-shrink-0 scroll-ml-4 transition-all duration-200 ${
                selectedCategory === "all" ? "scale-110" : "hover:scale-105"
              }`}
            >
              <div
                className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full ${
                  selectedCategory === "all" ? "bg-blue-100 shadow-md" : "bg-gray-50"
                }`}
              >
                <Volleyball
                  width={40}
                  height={40}
                  className={`md:w-12 md:h-12 transition-all ${selectedCategory === "all" ? "text-blue-600" : ""}`}
                />
              </div>
              <span
                className={`text-sm mt-1 md:text-base md:font-medium ${
                  selectedCategory === "all" ? "text-blue-600 font-semibold" : ""
                }`}
              >
                All
              </span>
            </button>

            {categories.map((category) => {
              const isActive = selectedCategory === category.name.toLowerCase()
              const count = counts[category.name] ?? 0
              return (
                <button
                  type="button"
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name.toLowerCase())}
                  className={`flex flex-col items-center flex-shrink-0 scroll-ml-4 transition-all duration-200 ${
                    isActive ? "scale-110" : "hover:scale-105"
                  }`}
                >
                  <div
                    className={`relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full ${
                      isActive ? "bg-blue-100 shadow-md" : "bg-gray-50"
                    }`}
                  >
                    <Image
                      src={category.icon || FALLBACK_IMAGE}
                      alt=""
                      width={40}
                      height={40}
                      className="md:w-12 md:h-12"
                    />
                    {count > 0 && (
                      <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[11px] leading-none px-1.5 py-1 rounded-full">
                        {count}
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-sm mt-1 md:text-base md:font-medium ${
                      isActive ? "text-blue-600 font-semibold" : ""
                    }`}
                  >
                    {category.name}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Places */}
      <div className="px-4 mt-6 md:px-8 lg:px-16 md:mt-12 md:max-w-5xl md:mx-auto">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">
            {selectedCategory === "all" ? `Popular places in ${cityName}` : `${activeCategoryLabel} in ${cityName}`}
          </h2>
          <button
            type="button"
            onClick={() => load(true)}
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 shrink-0"
          >
            <RotateCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {refining && (
          <p className="flex items-center gap-2 text-sm text-gray-500 mt-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Adding more places from OpenStreetMap
          </p>
        )}

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-gray-100 animate-pulse">
                <div className="h-48 md:h-64 bg-gray-200" />
                <div className="p-5 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-4/5" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && error && cityActivitiesList.length === 0 && (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
            <button
              type="button"
              onClick={() => load(true)}
              className="mt-4 px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium"
            >
              Try again
            </button>
          </div>
        )}

        {!loading && !error && filteredActivities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nothing mapped under {activeCategoryLabel || "this category"} in {cityName} yet.
            </p>
            {selectedCategory !== "all" && (
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className="mt-4 px-5 py-2 rounded-full border border-gray-300 text-sm font-medium"
              >
                Show everything
              </button>
            )}
          </div>
        )}

        {!loading && filteredActivities.length > 0 && (
          <>
            {/* Mobile: horizontal scroll */}
            <div className="relative mt-4 md:hidden">
              <div className="overflow-x-auto flex gap-3 pb-2 scrollbar-hide scroll-smooth">
                {filteredActivities.map((activity) => (
                  <div
                    key={activity.id}
                    onClick={() => openActivityDrawer(activity)}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex-shrink-0 w-[280px] scroll-ml-4 cursor-pointer"
                  >
                    <div className="relative h-48 bg-gray-100">
                      <PlacePhoto
                        src={activity.imageUrl}
                        alt={activity.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-sm font-medium text-gray-800">{activity.type}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-1">{activity.name}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{activity.distanceKm} km from centre</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm">4.8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {filteredActivities.map((activity) => (
                <div
                  key={activity.id}
                  onClick={() => openActivityDrawer(activity)}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <div className="relative h-64 bg-gray-100">
                    <PlacePhoto
                      src={activity.imageUrl}
                      alt={activity.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full">
                      <span className="text-sm font-medium text-gray-800">{activity.type}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-xl mb-2">{activity.name}</h3>
                    <p className="text-gray-700 text-sm line-clamp-3">
                      {activity.description || activity.address || `A mapped spot in ${cityName}.`}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-5 h-5 mr-1" />
                        <span className="text-sm">{activity.distanceKm} km from centre</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm">4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {selectedActivity && (
        <ActivityDrawer
          open={drawerOpen}
          activity={selectedActivity}
          onClose={closeActivityDrawer}
          lat={selectedActivity.lat ?? cityPosition?.lat}
          lon={selectedActivity.lon ?? cityPosition?.lng}
        />
      )}

      <BottomNavigation />
    </div>
  )
}