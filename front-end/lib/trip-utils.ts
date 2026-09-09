import { moroccanCities } from "@/lib/data"

export const DEFAULT_TRIP_IMAGE = "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"

// Match a trip's destination string to a city image from local data
export function getTripImage(destinations?: string): string {
  if (!destinations) return DEFAULT_TRIP_IMAGE

  const dest = destinations.toLowerCase()
  const match = moroccanCities.find((city) =>
    dest.includes(city.name.toLowerCase())
  )

  return match?.imageUrl || DEFAULT_TRIP_IMAGE
}

// Extract the first destination name for badging / labels
export function getFirstDestination(destinations?: string): string {
  if (!destinations) return "Trip"
  return destinations.split(",")[0].trim()
}

export function formatDate(date?: string | Date | null): string {
  if (!date) return "Dates not set"
  const d = new Date(date)
  if (isNaN(d.getTime())) return "Dates not set"
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export function formatTripDates(checkIn?: string | Date | null, checkOut?: string | Date | null): string {
  if (!checkIn || !checkOut) return "Dates not set"
  return `${formatDate(checkIn)} – ${formatDate(checkOut)}`
}

// Days until the trip starts (countdown)
export function daysUntil(checkIn?: string | Date | null): number | null {
  if (!checkIn) return null
  const target = new Date(checkIn)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  target.setHours(0, 0, 0, 0)
  return Math.round((target.getTime() - today.getTime()) / 86400000)
}

export function tripLengthInDays(checkIn?: string | Date | null, checkOut?: string | Date | null): number {
  if (!checkIn || !checkOut) return 0
  const start = new Date(checkIn)
  const end = new Date(checkOut)
  const diff = Math.abs(end.getTime() - start.getTime())
  return Math.max(1, Math.round(diff / 86400000))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount)
}

export const STATUS_STYLES: Record<string, string> = {
  confirmed: "bg-green-100 text-green-800",
  planning: "bg-yellow-100 text-yellow-800",
  "in-progress": "bg-blue-100 text-blue-800",
}

export const STATUS_LABELS: Record<string, string> = {
  confirmed: "Confirmed",
  planning: "Planning",
  "in-progress": "In Progress",
}
