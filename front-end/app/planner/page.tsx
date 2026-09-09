"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plane } from "lucide-react"
import PlannerDashboard from "@/components/planner/PlannerDashboard"
import TripDetails from "@/components/planner/TripDetails"
import apiService, {
  fetchUserProfile,
  resolveAvatar,
  type Trip,
  type TripInput,
  type UserProfile,
} from "@/lib/planner-api"
import toast from "react-hot-toast"

export default function TravelPlanner() {
  const [trips, setTrips] = useState<Trip[]>([])
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [userData, setUserData] = useState<UserProfile | null>(null)
  const [avatarHref, setAvatarHref] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("TOKEN_KEY")
    if (!token) {
      window.location.href = "/auth/login"
      return
    }
    loadTrips()
    fetchUserProfile()
      .then((user) => {
        setUserData(user)
        setAvatarHref(resolveAvatar(user.avatar, user.name))
      })
      .catch((err) => {
        console.error("Error fetching user profile:", err)
        setAvatarHref(resolveAvatar(undefined, "Traveler"))
      })
  }, [])

  const loadTrips = useCallback(async () => {
    try {
      setLoading(true)
      const data = await apiService.getTrips()
      setTrips(data || [])
      setError(null)
    } catch (err) {
      console.error(err)
      setError("Failed to load trips")
    } finally {
      setLoading(false)
    }
  }, [])

  const handleCreateTrip = async (tripData: TripInput) => {
    try {
      const newTrip = await apiService.createTrip(tripData)
      setTrips((prev) => [...prev, newTrip])
      toast.success("Trip created!")
    } catch (err) {
      console.error(err)
      setError("Failed to create trip")
      toast.error("Could not create trip")
    }
  }

  const handleUpdateTrip = async (id: string, tripData: TripInput) => {
    try {
      const updatedTrip = await apiService.updateTrip(id, tripData)
      setTrips((prev) => prev.map((trip) => (trip._id === id ? updatedTrip : trip)))
      if (selectedTrip && selectedTrip._id === id) {
        setSelectedTrip(updatedTrip)
      }
      toast.success("Trip updated")
    } catch (err) {
      console.error(err)
      setError("Failed to update trip")
      toast.error("Could not update trip")
    }
  }

  const handleDeleteTrip = async (id: string) => {
    try {
      await apiService.deleteTrip(id)
      setTrips((prev) => prev.filter((trip) => trip._id !== id))
      if (selectedTrip && selectedTrip._id === id) {
        setSelectedTrip(null)
        setActiveTab("dashboard")
      }
      toast.success("Trip deleted")
    } catch (err) {
      console.error(err)
      setError("Failed to delete trip")
      toast.error("Could not delete trip")
    }
  }

  const handleSelectTrip = (trip: Trip) => {
    setSelectedTrip(trip)
    setActiveTab("trip-details")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto" />
          <p className="mt-4 text-blue-600 font-medium">Loading your trips...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <div className="p-2 rounded-xl bg-blue-50 mr-3">
              <Plane className="text-blue-600" size={22} />
            </div>
            <motion.h1
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Travel Planner
            </motion.h1>
          </div>
          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-gray-100 transition-colors"
            title="Go to home"
          >
            <img
              src={avatarHref}
              alt={userData?.name || "Profile"}
              className="w-10 h-10 rounded-full object-cover border-2 border-blue-200"
            />
          </button>
        </div>
      </header>

      <nav className="bg-white/70 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => {
                setActiveTab("dashboard")
                setSelectedTrip(null)
              }}
              className={`py-4 px-1 font-medium text-sm relative ${
                activeTab === "dashboard" ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Dashboard
              {activeTab === "dashboard" && (
                <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" layoutId="navIndicator" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {error}
              <button onClick={() => setError(null)} className="float-right text-red-500 hover:text-red-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {activeTab === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <PlannerDashboard
                trips={trips}
                onSelectTrip={handleSelectTrip}
                onCreateTrip={handleCreateTrip}
                onUpdateTrip={handleUpdateTrip}
                onDeleteTrip={handleDeleteTrip}
              />
            </motion.div>
          )}
          {activeTab === "trip-details" && selectedTrip && (
            <motion.div
              key="trip-details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TripDetails trip={selectedTrip} onBack={() => setActiveTab("dashboard")} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}