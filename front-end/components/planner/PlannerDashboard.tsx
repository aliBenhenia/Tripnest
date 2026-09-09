"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, MapPin, CheckCircle, Calendar, Route, Plane, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Trip, TripInput, TripStatus } from "@/lib/planner-api"
import TripCard from "./TripCard"
import TripModal from "./TripModal"

const statCards: {
  key: "total" | "confirmed" | "planning" | "progress"
  icon: React.ComponentType<{ size?: number | string; className?: string }>
  title: string
  color: string
  text: string
}[] = [
  { key: "total", icon: MapPin, title: "Total Trips", color: "bg-blue-100", text: "text-blue-600" },
  { key: "confirmed", icon: CheckCircle, title: "Confirmed", color: "bg-green-100", text: "text-green-600" },
  { key: "planning", icon: Calendar, title: "Planning", color: "bg-yellow-100", text: "text-yellow-600" },
  { key: "progress", icon: Route, title: "In Progress", color: "bg-purple-100", text: "text-purple-600" },
]

type PlannerDashboardProps = {
  trips: Trip[]
  onSelectTrip: (trip: Trip) => void
  onCreateTrip: (trip: TripInput) => Promise<void>
  onUpdateTrip: (id: string, trip: TripInput) => Promise<void>
  onDeleteTrip: (id: string) => Promise<void>
}

export default function PlannerDashboard({
  trips,
  onSelectTrip,
  onCreateTrip,
  onUpdateTrip,
  onDeleteTrip,
}: PlannerDashboardProps) {
  const [showModal, setShowModal] = useState(false)
  const [editingTrip, setEditingTrip] = useState<Trip | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<TripStatus | "all">("all")

  const safeTrips = Array.isArray(trips) ? trips.filter((t) => t && typeof t === "object") : []

  const filteredTrips = safeTrips.filter((trip) => {
    const name = (trip.name || "").toLowerCase()
    const destinations = (trip.destinations || "").toLowerCase()
    const matchesSearch =
      name.includes(searchTerm.toLowerCase()) ||
      destinations.includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || trip.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const counts = {
    total: safeTrips.length,
    confirmed: safeTrips.filter((t) => t.status === "confirmed").length,
    planning: safeTrips.filter((t) => t.status === "planning").length,
    progress: safeTrips.filter((t) => t.status === "in-progress").length,
  } as Record<"total" | "confirmed" | "planning" | "progress", number>

  const openCreate = () => {
    setEditingTrip(null)
    setShowModal(true)
  }

  const openEdit = (trip: Trip) => {
    setEditingTrip(trip)
    setShowModal(true)
  }

  const handleSaveTrip = async (tripData: TripInput) => {
    try {
      if (editingTrip) await onUpdateTrip(editingTrip._id, tripData)
      else await onCreateTrip(tripData)
      setShowModal(false)
      setEditingTrip(null)
    } catch {
      // error handled by parent
    }
  }

  const confirmDelete = (id: string) => {
    if (window.confirm("Delete this trip? This removes all its data too.")) {
      onDeleteTrip(id)
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <motion.h2
            className="text-3xl font-bold text-gray-900"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            My Trips
          </motion.h2>
          <motion.p
            className="mt-2 text-gray-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            Plan, organize, and pack for your travels
          </motion.p>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Button
            onClick={openCreate}
            className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
          >
            <Plus className="mr-2" size={20} /> New Trip
          </Button>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {statCards.map(({ key, icon: Icon, title, color, text }) => (
          <motion.div
            key={key}
            className={`${color} p-5 rounded-2xl shadow-md`}
            whileHover={{ y: -4 }}
          >
            <div className={`p-3 rounded-xl bg-white inline-flex ${text}`}>
              <Icon size={22} />
            </div>
            <p className="text-sm font-medium text-gray-600 mt-3">{title}</p>
            <p className="text-3xl font-bold mt-1">{counts[key]}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Filters */}
      <motion.div
        className="flex flex-col md:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-gray-400" size={20} />
          </div>
          <input
            type="text"
            placeholder="Search trips or destinations..."
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="block w-full md:w-48 px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as TripStatus | "all")}
        >
          <option value="all">All Statuses</option>
          <option value="planning">Planning</option>
          <option value="confirmed">Confirmed</option>
          <option value="in-progress">In Progress</option>
        </select>
      </motion.div>

      {/* Trips Grid */}
      {filteredTrips.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <AnimatePresence>
            {filteredTrips.map((trip, index) => (
              <TripCard
                key={trip._id}
                trip={trip}
                index={index}
                onSelectTrip={onSelectTrip}
                onEditTrip={openEdit}
                onDeleteTrip={confirmDelete}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-50 flex items-center justify-center">
            <Plane className="text-blue-500" size={32} />
          </div>
          <h3 className="text-2xl font-medium text-gray-900 mb-2">No trips found</h3>
          <p className="text-gray-500 mb-6">
            {safeTrips.length > 0
              ? "Try adjusting your search or filters."
              : "Create your first trip to get started planning your adventure."}
          </p>
          {safeTrips.length === 0 && (
            <Button
              onClick={openCreate}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Plus className="mr-2" size={20} /> Plan a Trip
            </Button>
          )}
        </motion.div>
      )}

      {/* Trip Modal */}
      <AnimatePresence>
        {(showModal || editingTrip) && (
          <TripModal
            trip={editingTrip}
            onSave={handleSaveTrip}
            onClose={() => {
              setShowModal(false)
              setEditingTrip(null)
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
