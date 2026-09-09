"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, FileText, Trash2, File, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { TravelDocument, TravelDocumentInput } from "@/lib/planner-api"
import toast from "react-hot-toast"

const DOC_TYPES = ["Passport", "Ticket", "Booking", "Insurance", "Visa", "Other"]

type DocumentsSectionProps = {
  documents: TravelDocument[]
  onCreate: (document: TravelDocumentInput) => Promise<void>
  onDelete: (id: string) => Promise<void>
}

export default function DocumentsSection({
  documents,
  onCreate,
  onDelete,
}: DocumentsSectionProps) {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: "", type: "Other" })

  const handleSave = async () => {
    if (!formData.name.trim()) {
      toast.error("Please enter a document name")
      return
    }
    try {
      await onCreate({ ...formData, date: new Date().toISOString() })
      resetForm()
      toast.success("Document added")
    } catch {
      toast.error("Could not add document")
    }
  }

  const resetForm = () => {
    setFormData({ name: "", type: "Other" })
    setShowForm(false)
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <FileText className="mr-2 text-blue-600" size={22} /> Travel Documents
          </h3>
          <p className="text-gray-500 mt-1">{documents.length} documents</p>
        </div>
        <Button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          <Plus className="mr-2" size={20} /> Add Document
        </Button>
      </div>

      {showForm && (
        <motion.div
          className="mb-6 p-5 border border-gray-200 rounded-2xl bg-gray-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h4 className="text-lg font-semibold mb-4">Add New Document</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Document Name"
              className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <select
              className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            >
              {DOC_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
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

      <div className="space-y-3">
        <AnimatePresence>
          {documents.map((doc) => (
            <motion.div
              key={doc._id}
              className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow bg-white"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <File className="text-indigo-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{doc.name}</h4>
                    <div className="flex items-center text-sm text-gray-500 mt-0.5 gap-3">
                      <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-full text-xs">
                        {doc.type}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="mr-1" size={13} />
                        {new Date(doc.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onDelete(doc._id)}
                  className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 flex-shrink-0"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {documents.length === 0 && (
        <motion.div
          className="text-center py-12 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <FileText className="mx-auto mb-4 text-gray-300" size={48} />
          <p className="text-lg">No documents added yet</p>
        </motion.div>
      )}
    </div>
  )
}
