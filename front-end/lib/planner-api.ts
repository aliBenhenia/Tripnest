const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"

export type TripStatus = "planning" | "confirmed" | "in-progress"

export interface Trip {
  _id: string
  name: string
  checkIn?: string | null
  checkOut?: string | null
  destinations: string
  userId?: string
  status: TripStatus
  createdAt?: string
  updatedAt?: string
}

export type TripInput = {
  name: string
  checkIn?: string | null
  checkOut?: string | null
  destinations: string
  status: TripStatus
}

export interface PackingItem {
  _id: string
  name: string
  packed: boolean
  userId?: string
  tripId: string
}

export type PackingItemInput = Partial<Pick<PackingItem, "name" | "packed">>

export interface Expense {
  _id: string
  category: string
  amount: number
  description: string
  userId?: string
  tripId: string
}

export type ExpenseInput = Partial<Pick<Expense, "category" | "amount" | "description">>

export interface Companion {
  _id: string
  name: string
  role: string
  sharedExpenses?: number
  userId?: string
  tripId: string
}

export type CompanionInput = Partial<Pick<Companion, "name" | "role">>

export interface TravelDocument {
  _id: string
  name: string
  type: string
  date: string
  userId?: string
  tripId: string
}

export type TravelDocumentInput = Partial<Pick<TravelDocument, "name" | "type" | "date">>

export interface Activity {
  _id: string
  time: string
  activity: string
  notes?: string
  location?: string
  day: number
  userId?: string
  tripId: string
}

export type ActivityInput = Partial<
  Pick<Activity, "time" | "activity" | "notes" | "location" | "day">
>

export interface UserProfile {
  name?: string
  email?: string
  avatar?: string
}

// Reusable API client for the planner backend
const apiService = {
  getToken: () => localStorage.getItem("TOKEN_KEY"),

  async request<T = unknown>(endpoint: string, method = "GET", data?: unknown): Promise<T> {
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getToken()}`,
      },
    }
    if (data) {
      options.body = JSON.stringify(data)
    }
    const response = await fetch(`${API_URL}/api/planner${endpoint}`, options)
    const body = await response.json().catch(() => null)
    if (!response.ok) {
      throw new Error(body?.message || `Request failed with status ${response.status}`)
    }
    return body as T
  },

  // Trips
  getTrips: (): Promise<Trip[]> => apiService.request<Trip[]>("/trips"),
  createTrip: (trip: TripInput): Promise<Trip> => apiService.request<Trip>("/trips", "POST", trip),
  updateTrip: (id: string, trip: TripInput): Promise<Trip> =>
    apiService.request<Trip>(`/trips/${id}`, "PUT", trip),
  deleteTrip: (id: string) => apiService.request<{ message: string }>(`/trips/${id}`, "DELETE"),

  // Packing Items
  getPackingItems: (tripId: string): Promise<PackingItem[]> =>
    apiService.request<PackingItem[]>(`/trips/${tripId}/packing-items`),
  createPackingItem: (tripId: string, item: PackingItemInput): Promise<PackingItem> =>
    apiService.request<PackingItem>(`/trips/${tripId}/packing-items`, "POST", item),
  updatePackingItem: (id: string, item: PackingItemInput): Promise<PackingItem> =>
    apiService.request<PackingItem>(`/packing-items/${id}`, "PUT", item),
  deletePackingItem: (id: string) =>
    apiService.request<{ message: string }>(`/packing-items/${id}`, "DELETE"),

  // Expenses
  getExpenses: (tripId: string): Promise<Expense[]> =>
    apiService.request<Expense[]>(`/trips/${tripId}/expenses`),
  createExpense: (tripId: string, expense: ExpenseInput): Promise<Expense> =>
    apiService.request<Expense>(`/trips/${tripId}/expenses`, "POST", expense),
  updateExpense: (id: string, expense: ExpenseInput): Promise<Expense> =>
    apiService.request<Expense>(`/expenses/${id}`, "PUT", expense),
  deleteExpense: (id: string) =>
    apiService.request<{ message: string }>(`/expenses/${id}`, "DELETE"),

  // Companions
  getCompanions: (tripId: string): Promise<Companion[]> =>
    apiService.request<Companion[]>(`/trips/${tripId}/companions`),
  createCompanion: (tripId: string, companion: CompanionInput): Promise<Companion> =>
    apiService.request<Companion>(`/trips/${tripId}/companions`, "POST", companion),
  updateCompanion: (id: string, companion: CompanionInput): Promise<Companion> =>
    apiService.request<Companion>(`/companions/${id}`, "PUT", companion),
  deleteCompanion: (id: string) =>
    apiService.request<{ message: string }>(`/companions/${id}`, "DELETE"),

  // Documents
  getDocuments: (tripId: string): Promise<TravelDocument[]> =>
    apiService.request<TravelDocument[]>(`/trips/${tripId}/documents`),
  createDocument: (tripId: string, document: TravelDocumentInput): Promise<TravelDocument> =>
    apiService.request<TravelDocument>(`/trips/${tripId}/documents`, "POST", document),
  deleteDocument: (id: string) =>
    apiService.request<{ message: string }>(`/documents/${id}`, "DELETE"),

  // Activities
  getActivities: (tripId: string): Promise<Activity[]> =>
    apiService.request<Activity[]>(`/trips/${tripId}/activities`),
  createActivity: (tripId: string, activity: ActivityInput): Promise<Activity> =>
    apiService.request<Activity>(`/trips/${tripId}/activities`, "POST", activity),
  updateActivity: (id: string, activity: ActivityInput): Promise<Activity> =>
    apiService.request<Activity>(`/activities/${id}`, "PUT", activity),
  deleteActivity: (id: string) =>
    apiService.request<{ message: string }>(`/activities/${id}`, "DELETE"),
}

export default apiService

// Fetch the current user profile safely (avatar handling)
export async function fetchUserProfile(): Promise<UserProfile> {
  const token = localStorage.getItem("TOKEN_KEY")
  const res = await fetch(`${API_URL}/api/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
  if (!res.ok) throw new Error("Failed to fetch profile")
  const data = await res.json()
  return data.data?.user || {}
}

export function resolveAvatar(avatar?: string, name?: string): string {
  if (avatar && avatar !== "default-avatar.png") {
    return avatar.startsWith("/") ? `${API_URL}${avatar}` : avatar
  }
  if (name) {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`
  }
  return "/images/default-avatar.png"
}