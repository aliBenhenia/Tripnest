"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Users, Edit, Trash2, User as UserIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Companion, CompanionInput } from "@/lib/planner-api"
import toast from "react-hot-toast"

type CompanionsSectionProps = {
  companions: Companion[]
  onCreate: (companion: CompanionInput) => Promise<void>
  onUpdate: (id: string, companion: CompanionInput) => Promise<void>
  onDelete: (id: string) => Promise<void>
}

export default function CompanionsSection({
  companions,
  onCreate,
  onUpdate,
  onDelete,
}: CompanionsSectionProps) {
  const [showForm, setShowForm] = useState(false)
  const [editingCompanion, setEditingCompanion] = useState<Companion | null>(null)
  const [formData, setFormData] = useState({ name: "", role: "Traveler" })

  const handleSave = async () => {
    if (!formData.name.trim()) {
      toast.error("Please enter a name")
      return
    }
    try {
      if (editingCompanion) await onUpdate(editingCompanion._id, formData)
      else await onCreate(formData)
      resetForm()
      toast.success(editingCompanion ? "Companion updated" : "Companion added")
    } catch {
      toast.error("Could not save companion")
    }
  }

  const handleEdit = (companion: Companion) => {
    setEditingCompanion(companion)
    setFormData({ name: companion.name, role: companion.role })
    setShowForm(true)
  }

  const resetForm = () => {
    setFormData({ name: "", role: "Traveler" })
    setEditingCompanion(null)
    setShowForm(false)
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <Users className="mr-2 text-blue-600" size={22} /> Travel Companions
          </h3>
          <p className="text-gray-500 mt-1">{companions.length} companions</p>
        </div>
        <Button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          <Plus className="mr-2" size={20} /> Add Companion
        </Button>
      </div>

      {showForm && (
        <motion.div
          className="mb-6 p-5 border border-gray-200 rounded-2xl bg-gray-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h4 className="text-lg font-semibold mb-4">
            {editingCompanion ? "Edit Companion" : "Add New Companion"}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Role (e.g., Driver, Guide)"
              className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence>
          {companions.map((companion) => (
            <motion.div
              key={companion._id}
              className="p-5 border border-gray-200 rounded-2xl hover:shadow-md transition-shadow bg-white"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {companion.name.slice(0, 1).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 truncate">{companion.name}</h4>
                  <div className="flex items-center text-gray-500 text-sm mt-0.5">
                    <UserIcon className="mr-1" size={14} />
                    <span className="truncate">{companion.role}</span>
                  </div>
                </div>
                <div className="flex space-x-1 flex-shrink-0">
                  <button
                    onClick={() => handleEdit(companion)}
                    className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => onDelete(companion._id)}
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

      {companions.length === 0 && (
        <motion.div
          className="text-center py-12 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Users className="mx-auto mb-4 text-gray-300" size={48} />
          <p className="text-lg">No companions added yet</p>
        </motion.div>
      )}
    </div>
  )
}
