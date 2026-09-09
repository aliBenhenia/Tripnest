"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Calendar, Edit, Trash2, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Activity, ActivityInput } from "@/lib/planner-api"
import { tripLengthInDays } from "@/lib/trip-utils"
import toast from "react-hot-toast"

type ActivitiesSectionProps = {
  activities: Activity[]
  onCreate: (activity: ActivityInput) => Promise<void>
  onUpdate: (id: string, activity: ActivityInput) => Promise<void>
  onDelete: (id: string) => Promise<void>
  trip: { checkIn?: string | null; checkOut?: string | null }
}

export default function ActivitiesSection({
  activities,
  onCreate,
  onUpdate,
  onDelete,
  trip,
}: ActivitiesSectionProps) {
  const [showForm, setShowForm] = useState(false)
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null)
  const [formData, setFormData] = useState({
    time: "09:00",
    activity: "",
    notes: "",
    location: "",
    day: "1",
  })

  const totalDays = tripLengthInDays(trip?.checkIn, trip?.checkOut)

  const handleSave = async () => {
    if (!formData.activity.trim()) {
      toast.error("Please enter an activity")
      return
    }
    const activityData: ActivityInput = { ...formData, day: parseInt(formData.day) || 1 }
    try {
      if (editingActivity) await onUpdate(editingActivity._id, activityData)
      else await onCreate(activityData)
      resetForm()
      toast.success(editingActivity ? "Activity updated" : "Activity added")
    } catch {
      toast.error("Could not save activity")
    }
  }

  const handleEdit = (activity: Activity) => {
    setEditingActivity(activity)
    setFormData({
      time: activity.time || "09:00",
      activity: activity.activity,
      notes: activity.notes || "",
      location: activity.location || "",
      day: String(activity.day || 1),
    })
    setShowForm(true)
  }

  const resetForm = () => {
    setFormData({ time: "09:00", activity: "", notes: "", location: "", day: "1" })
    setEditingActivity(null)
    setShowForm(false)
  }

  const grouped = activities.reduce<Record<number, Activity[]>>((acc, a) => {
    const day = a.day || 1
    if (!acc[day]) acc[day] = []
    acc[day].push(a)
    return acc
  }, {})

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <Calendar className="mr-2 text-blue-600" size={22} /> Itinerary
          </h3>
          <p className="text-gray-500 mt-1">
            Day-by-day plan {totalDays > 0 && `(${totalDays} day${totalDays > 1 ? "s" : ""})`}
          </p>
        </div>
        <Button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          <Plus className="mr-2" size={20} /> Add Activity
        </Button>
      </div>

      {showForm && (
        <motion.div
          className="mb-6 p-5 border border-gray-200 rounded-2xl bg-gray-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h4 className="text-lg font-semibold mb-4">
            {editingActivity ? "Edit Activity" : "Add New Activity"}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <input
              type="time"
              className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            />
            <input
              type="text"
              placeholder="Activity"
              className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.activity}
              onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
            />
            <input
              type="text"
              placeholder="Location (optional)"
              className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
            <select
              className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.day}
              onChange={(e) => setFormData({ ...formData, day: e.target.value })}
            >
              {Array.from({ length: Math.max(totalDays, 1) }).map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  Day {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-3">
            <input
              type="text"
              placeholder="Notes (optional)"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />
          </div>
          <div className="flex gap-3 mt-4">
            <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
              Save
            </Button>
            <Button variant="outline" onClick={resetForm}>
              Cancel
            </Button>
          </div>
        </motion.div>
      )}

      <div className="space-y-8">
        {Object.entries(grouped)
          .sort(([a], [b]) => Number(a) - Number(b))
          .map(([day, dayActivities]) => (
            <div key={day}>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white font-bold">
                  {day}
                </span>
                <h4 className="text-lg font-semibold text-gray-900">Day {day}</h4>
              </div>
              <div className="space-y-3">
                <AnimatePresence>
                  {dayActivities.map((activity) => (
                    <motion.div
                      key={activity._id}
                      className="p-5 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-4">
                          <div className="flex flex-col items-center">
                            <Clock className="text-blue-600" size={18} />
                            <span className="text-sm font-bold text-gray-800 mt-1">
                              {activity.time}
                            </span>
                          </div>
                          <div>
                            <h5 className="text-lg font-semibold text-gray-900">{activity.activity}</h5>
                            {activity.location && (
                              <p className="text-sm text-gray-500 flex items-center mt-1">
                                <MapPin className="mr-1" size={14} /> {activity.location}
                              </p>
                            )}
                            {activity.notes && (
                              <p className="text-gray-600 mt-1 text-sm">{activity.notes}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex space-x-1 flex-shrink-0">
                          <button
                            onClick={() => handleEdit(activity)}
                            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
                          >
                            <Edit size={18} />
                          </button>
                          <button
                            onClick={() => onDelete(activity._id)}
                            className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          ))}
      </div>

      {activities.length === 0 && (
        <motion.div
          className="text-center py-12 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Calendar className="mx-auto mb-4 text-gray-300" size={48} />
          <p className="text-lg">No activities planned yet</p>
        </motion.div>
      )}
    </div>
  )
}
