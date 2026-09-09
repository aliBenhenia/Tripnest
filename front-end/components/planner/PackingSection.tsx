"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, CheckCircle, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { PackingItem, PackingItemInput } from "@/lib/planner-api"
import toast from "react-hot-toast"

type PackingSectionProps = {
  items: PackingItem[]
  onCreate: (item: PackingItemInput) => Promise<void>
  onUpdate: (id: string, item: PackingItemInput) => Promise<void>
  onDelete: (id: string) => Promise<void>
}

export default function PackingSection({ items, onCreate, onUpdate, onDelete }: PackingSectionProps) {
  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState<PackingItem | null>(null)
  const [formData, setFormData] = useState<{ name: string; packed: boolean }>({
    name: "",
    packed: false,
  })

  const packedCount = items.filter((i) => i.packed).length
  const percent = items.length ? Math.round((packedCount / items.length) * 100) : 0

  const handleSave = async () => {
    if (!formData.name.trim()) {
      toast.error("Please enter an item name")
      return
    }
    try {
      if (editingItem) await onUpdate(editingItem._id, formData)
      else await onCreate(formData)
      resetForm()
      toast.success(editingItem ? "Item updated" : "Item added")
    } catch {
      toast.error("Could not save item")
    }
  }

  const handleEdit = (item: PackingItem) => {
    setEditingItem(item)
    setFormData({ name: item.name, packed: item.packed })
    setShowForm(true)
  }

  const resetForm = () => {
    setFormData({ name: "", packed: false })
    setEditingItem(null)
    setShowForm(false)
  }

  const togglePacked = async (item: PackingItem) => {
    try {
      await onUpdate(item._id, { ...item, packed: !item.packed })
    } catch {
      toast.error("Could not update item")
    }
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-gray-900">Packing List</h3>
            <span className="text-sm text-gray-500">
              {packedCount}/{items.length} packed
            </span>
          </div>
          {items.length > 0 && (
            <div className="mt-3 w-full max-w-xs h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-green-500"
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          )}
        </div>
        <Button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          <Plus className="mr-2" size={20} /> Add Item
        </Button>
      </div>

      {showForm && (
        <motion.div
          className="mb-6 p-5 border border-gray-200 rounded-2xl bg-gray-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h4 className="text-lg font-semibold mb-4">
            {editingItem ? "Edit Item" : "Add New Item"}
          </h4>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Item name"
              autoFocus
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onKeyDown={(e) => e.key === "Enter" && handleSave()}
            />
            <label className="flex items-center px-4 py-2.5 bg-white border border-gray-300 rounded-xl cursor-pointer">
              <input
                type="checkbox"
                className="rounded text-blue-600 focus:ring-blue-500 h-5 w-5"
                checked={formData.packed}
                onChange={(e) => setFormData({ ...formData, packed: e.target.checked })}
              />
              <span className="ml-3 text-gray-700">Packed</span>
            </label>
            <div className="flex gap-3">
              <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                Save
              </Button>
              <Button variant="outline" onClick={resetForm}>
                Cancel
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      <div className="space-y-3">
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item._id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow bg-white"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <div className="flex items-center">
                <button
                  onClick={() => togglePacked(item)}
                  className={`w-8 h-8 rounded-full border-2 mr-4 flex items-center justify-center transition-colors ${
                    item.packed
                      ? "bg-green-500 border-green-500 text-white"
                      : "border-gray-300 hover:border-blue-400"
                  }`}
                  aria-label={item.packed ? "Mark as not packed" : "Mark as packed"}
                >
                  {item.packed && <CheckCircle size={18} />}
                </button>
                <span
                  className={
                    item.packed
                      ? "line-through text-gray-500 text-base"
                      : "text-gray-900 text-base"
                  }
                >
                  {item.name}
                </span>
              </div>
              <div className="flex space-x-1">
                <button
                  onClick={() => handleEdit(item)}
                  className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => onDelete(item._id)}
                  className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {items.length === 0 && (
        <motion.div
          className="text-center py-12 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <CheckCircle className="mx-auto mb-4 text-gray-300" size={48} />
          <p className="text-lg">No packing items yet</p>
        </motion.div>
      )}
    </div>
  )
}
