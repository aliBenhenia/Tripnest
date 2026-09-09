"use client"

import { motion } from "framer-motion"
import { Eye, Edit, Trash2, Calendar, MapPin, Heart } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { addSavedItem, removeSavedItem } from "@/lib/redux/slices/savedItemsSlice"
import type { Trip } from "@/lib/planner-api"
import {
  formatTripDates,
  getTripImage,
  STATUS_STYLES,
  STATUS_LABELS,
  daysUntil,
} from "@/lib/trip-utils"
import toast from "react-hot-toast"

type TripCardProps = {
  trip: Trip
  onSelectTrip: (trip: Trip) => void
  onEditTrip: (trip: Trip) => void
  onDeleteTrip: (id: string) => void
  index?: number
}

export default function TripCard({
  trip,
  onSelectTrip,
  onEditTrip,
  onDeleteTrip,
  index = 0,
}: TripCardProps) {
  const dispatch = useAppDispatch()
  const savedItems = useAppSelector((state) => state.savedItems.items)
  const isSaved = savedItems.some((item) => item.id === `trip-${trip._id}`)

  const image = getTripImage(trip.destinations)
  const days = daysUntil(trip.checkIn)

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (isSaved) {
      dispatch(removeSavedItem(`trip-${trip._id}`))
      toast("Removed from saved trips")
    } else {
      dispatch(
        addSavedItem({
          id: `trip-${trip._id}`,
          title: trip.name,
          description: trip.destinations,
          image,
          type: "city",
          savedAt: new Date().toISOString(),
        })
      )
      toast.success("Trip saved")
    }
  }

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation()
    onEditTrip(trip)
  }

  return (
    <motion.div
      className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      whileHover={{ y: -5 }}
      onClick={() => onSelectTrip(trip)}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={trip.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={handleSave}
            className={`p-2 rounded-full shadow-md transition-colors ${
              isSaved ? "bg-red-500 text-white" : "bg-white/90 text-gray-600 hover:text-red-500"
            }`}
            aria-label={isSaved ? "Remove from saved trips" : "Save trip"}
          >
            <Heart className={`h-4 w-4 ${isSaved ? "fill-white" : ""}`} />
          </button>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-xl font-bold text-white drop-shadow">{trip.name}</h3>
          <p className="flex items-center text-white/90 text-sm mt-1">
            <MapPin className="mr-1" size={14} />
            {trip.destinations || "Morocco"}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-center gap-2">
          <span
            className={`px-2.5 py-1 text-xs rounded-full font-medium ${STATUS_STYLES[trip.status]}`}
          >
            {STATUS_LABELS[trip.status] || trip.status}
          </span>
          {days !== null && days >= 0 && (
            <span className="text-xs text-gray-500 px-2.5 py-1 bg-gray-100 rounded-full">
              {days === 0 ? "Starts today!" : `${days} day${days > 1 ? "s" : ""} to go`}
            </span>
          )}
        </div>

        <div className="mt-3 flex items-center text-gray-500 text-sm">
          <Calendar className="mr-2" size={15} />
          {formatTripDates(trip.checkIn, trip.checkOut)}
        </div>

        <div className="mt-5 flex justify-between items-center">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onSelectTrip(trip)
            }}
            className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
          >
            <Eye className="mr-1" size={16} /> View
          </button>
          <div className="flex space-x-1">
            <button
              onClick={handleEdit}
              className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
              aria-label="Edit trip"
            >
              <Edit size={18} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onDeleteTrip(trip._id)
              }}
              className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
              aria-label="Delete trip"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
