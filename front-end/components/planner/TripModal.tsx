"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { moroccanCities } from "@/lib/data"
import type { Trip, TripInput } from "@/lib/planner-api"

type TripModalProps = {
  trip?: Trip | null
  onSave: (data: TripInput) => void
  onClose: () => void
}

export default function TripModal({ trip, onSave, onClose }: TripModalProps) {
  const [showCityPicker, setShowCityPicker] = useState(false)
  const [formData, setFormData] = useState<{
    name: string
    checkIn: string
    checkOut: string
    destinations: string
    status: Trip["status"]
  }>({
    name: trip?.name || "",
    checkIn: trip?.checkIn ? new Date(trip.checkIn).toISOString().split("T")[0] : "",
    checkOut: trip?.checkOut ? new Date(trip.checkOut).toISOString().split("T")[0] : "",
    destinations: trip?.destinations || "",
    status: trip?.status || "planning",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const addDestination = (cityName: string) => {
    const current = formData.destinations
      .split(",")
      .map((d) => d.trim())
      .filter(Boolean)
    if (current.includes(cityName)) return
    current.push(cityName)
    setFormData({ ...formData, destinations: current.join(", ") })
    setShowCityPicker(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const tripData: TripInput = {
      ...formData,
      checkIn: formData.checkIn ? new Date(formData.checkIn).toISOString() : null,
      checkOut: formData.checkOut ? new Date(formData.checkOut).toISOString() : null,
    }
    onSave(tripData)
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-y-auto max-h-[90vh]"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {trip ? "Edit Trip" : "Plan a Trip"}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Trip Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Summer in Morocco"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Where to visit <span className="text-gray-400">(comma separated)</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="destinations"
                  value={formData.destinations}
                  onChange={handleChange}
                  placeholder="e.g., Marrakech, Fes, Chefchaouen"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowCityPicker(!showCityPicker)}
                  className="absolute right-2 top-2 flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100"
                >
                  <MapPin size={15} /> Pick
                </button>
              </div>
              {showCityPicker && (
                <div className="mt-2 p-3 bg-gray-50 rounded-xl border border-gray-200 max-h-48 overflow-y-auto">
                  <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                    Add a destination
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {moroccanCities.map((city) => (
                      <button
                        key={city.id}
                        type="button"
                        onClick={() => addDestination(city.name)}
                        className="px-3 py-1.5 bg-white border border-gray-200 text-sm text-gray-700 rounded-full hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors"
                      >
                        {city.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              >
                <option value="planning">Planning</option>
                <option value="confirmed">Confirmed</option>
                <option value="in-progress">In Progress</option>
              </select>
            </div>

            <div className="flex justify-end space-x-4 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {trip ? "Update Trip" : "Create Trip"}
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  )
}
