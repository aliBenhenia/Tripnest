"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Calendar, MapPin, Package, Wallet, Users, FileText, Route } from "lucide-react"
import apiService, {
  type Trip,
  type PackingItemInput,
  type ExpenseInput,
  type CompanionInput,
  type TravelDocumentInput,
  type ActivityInput,
} from "@/lib/planner-api"
import PackingSection from "./PackingSection"
import ExpensesSection from "./ExpensesSection"
import CompanionsSection from "./CompanionsSection"
import DocumentsSection from "./DocumentsSection"
import ActivitiesSection from "./ActivitiesSection"
import {
  formatTripDates,
  getTripImage,
  STATUS_STYLES,
  STATUS_LABELS,
  tripLengthInDays,
} from "@/lib/trip-utils"
import toast from "react-hot-toast"

const SECTIONS = [
  { id: "activities", label: "Itinerary", icon: Route },
  { id: "packing", label: "Packing", icon: Package },
  { id: "expenses", label: "Expenses", icon: Wallet },
  { id: "companions", label: "Companions", icon: Users },
  { id: "documents", label: "Documents", icon: FileText },
]

type TripDetailsProps = {
  trip: Trip
  onBack: () => void
}

export default function TripDetails({ trip, onBack }: TripDetailsProps) {
  const [activeSection, setActiveSection] = useState("activities")
  const [packingItems, setPackingItems] = useState<
    NonNullable<Awaited<ReturnType<typeof apiService.getPackingItems>>>
  >([])
  const [expenses, setExpenses] = useState<
    NonNullable<Awaited<ReturnType<typeof apiService.getExpenses>>>
  >([])
  const [companions, setCompanions] = useState<
    NonNullable<Awaited<ReturnType<typeof apiService.getCompanions>>>
  >([])
  const [documents, setDocuments] = useState<
    NonNullable<Awaited<ReturnType<typeof apiService.getDocuments>>>
  >([])
  const [activities, setActivities] = useState<
    NonNullable<Awaited<ReturnType<typeof apiService.getActivities>>>
  >([])
  const [loading, setLoading] = useState(true)

  const image = getTripImage(trip.destinations)
  const days = tripLengthInDays(trip.checkIn, trip.checkOut)

  const loadData = useCallback(async () => {
    setLoading(true)
    try {
      const [
        packing,
        expense,
        companion,
        document,
        activity,
      ] = await Promise.all([
        apiService.getPackingItems(trip._id),
        apiService.getExpenses(trip._id),
        apiService.getCompanions(trip._id),
        apiService.getDocuments(trip._id),
        apiService.getActivities(trip._id),
      ])
      setPackingItems(packing || [])
      setExpenses(expense || [])
      setCompanions(companion || [])
      setDocuments(document || [])
      setActivities(activity || [])
    } catch (err) {
      console.error("Failed to load trip data:", err)
      toast.error("Could not load trip details")
    } finally {
      setLoading(false)
    }
  }, [trip._id])

  useEffect(() => {
    loadData()
  }, [loadData])

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-2 font-medium"
      >
        <ArrowLeft className="h-5 w-5 mr-2" /> Back to Dashboard
      </button>

      {/* Header banner */}
      <div className="relative h-52 rounded-2xl overflow-hidden">
        <img src={image} alt={trip.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{trip.name}</h2>
            <div className="flex flex-wrap items-center mt-2 text-white/90 gap-4 text-sm">
              <span className="flex items-center">
                <Calendar className="mr-1.5" size={16} />
                {formatTripDates(trip.checkIn, trip.checkOut)}
              </span>
              <span className="flex items-center">
                <MapPin className="mr-1.5" size={16} />
                {trip.destinations}
              </span>
              {days > 0 && (
                <span className="flex items-center bg-white/20 px-2.5 py-1 rounded-full">
                  {days} day{days > 1 ? "s" : ""}
                </span>
              )}
            </div>
          </div>
          <span
            className={`px-4 py-1.5 rounded-full text-sm font-medium self-start sm:self-auto ${
              STATUS_STYLES[trip.status]
            }`}
          >
            {STATUS_LABELS[trip.status] || trip.status}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 overflow-x-auto">
        <nav className="flex gap-6 min-w-max">
          {SECTIONS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`py-3 px-1 font-medium text-sm relative flex items-center gap-2 ${
                activeSection === id ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Icon size={16} />
              {label}
              {activeSection === id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  layoutId="tripSectionIndicator"
                />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <motion.div
        className="bg-white rounded-2xl shadow-lg p-5 sm:p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600" />
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2 }}
            >
              {activeSection === "activities" && (
                <ActivitiesSection
                  activities={activities}
                  trip={trip}
                  onCreate={async (d: ActivityInput) => {
                    const r = await apiService.createActivity(trip._id, d)
                    setActivities((p) => [...p, r])
                  }}
                  onUpdate={async (id: string, d: ActivityInput) => {
                    const r = await apiService.updateActivity(id, d)
                    setActivities((p) => p.map((a) => (a._id === id ? r : a)))
                  }}
                  onDelete={async (id: string) => {
                    await apiService.deleteActivity(id)
                    setActivities((p) => p.filter((a) => a._id !== id))
                  }}
                />
              )}
              {activeSection === "packing" && (
                <PackingSection
                  items={packingItems}
                  onCreate={async (d: PackingItemInput) => {
                    const r = await apiService.createPackingItem(trip._id, d)
                    setPackingItems((p) => [...p, r])
                  }}
                  onUpdate={async (id: string, d: PackingItemInput) => {
                    const r = await apiService.updatePackingItem(id, d)
                    setPackingItems((p) => p.map((a) => (a._id === id ? r : a)))
                  }}
                  onDelete={async (id: string) => {
                    await apiService.deletePackingItem(id)
                    setPackingItems((p) => p.filter((a) => a._id !== id))
                  }}
                />
              )}
              {activeSection === "expenses" && (
                <ExpensesSection
                  expenses={expenses}
                  onCreate={async (d: ExpenseInput) => {
                    const r = await apiService.createExpense(trip._id, d)
                    setExpenses((p) => [...p, r])
                  }}
                  onUpdate={async (id: string, d: ExpenseInput) => {
                    const r = await apiService.updateExpense(id, d)
                    setExpenses((p) => p.map((a) => (a._id === id ? r : a)))
                  }}
                  onDelete={async (id: string) => {
                    await apiService.deleteExpense(id)
                    setExpenses((p) => p.filter((a) => a._id !== id))
                  }}
                />
              )}
              {activeSection === "companions" && (
                <CompanionsSection
                  companions={companions}
                  onCreate={async (d: CompanionInput) => {
                    const r = await apiService.createCompanion(trip._id, d)
                    setCompanions((p) => [...p, r])
                  }}
                  onUpdate={async (id: string, d: CompanionInput) => {
                    const r = await apiService.updateCompanion(id, d)
                    setCompanions((p) => p.map((a) => (a._id === id ? r : a)))
                  }}
                  onDelete={async (id: string) => {
                    await apiService.deleteCompanion(id)
                    setCompanions((p) => p.filter((a) => a._id !== id))
                  }}
                />
              )}
              {activeSection === "documents" && (
                <DocumentsSection
                  documents={documents}
                  onCreate={async (d: TravelDocumentInput) => {
                    const r = await apiService.createDocument(trip._id, d)
                    setDocuments((p) => [...p, r])
                  }}
                  onDelete={async (id: string) => {
                    await apiService.deleteDocument(id)
                    setDocuments((p) => p.filter((a) => a._id !== id))
                  }}
                />
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  )
}