"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Wallet, Edit, Trash2, TrendingUp, TrendingDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/lib/trip-utils"
import type { Expense, ExpenseInput } from "@/lib/planner-api"
import toast from "react-hot-toast"

const EXPENSE_CATEGORIES = [
  "Transport",
  "Food & Dining",
  "Accommodation",
  "Activities",
  "Shopping",
  "Other",
]

type ExpensesSectionProps = {
  expenses: Expense[]
  onCreate: (expense: ExpenseInput) => Promise<void>
  onUpdate: (id: string, expense: ExpenseInput) => Promise<void>
  onDelete: (id: string) => Promise<void>
}

export default function ExpensesSection({
  expenses,
  onCreate,
  onUpdate,
  onDelete,
}: ExpensesSectionProps) {
  const [showForm, setShowForm] = useState(false)
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null)
  const [formData, setFormData] = useState({ category: "Transport", amount: "", description: "" })

  const total = expenses.reduce((sum, e) => sum + (Number(e.amount) || 0), 0)
  const categoryTotals = expenses.reduce<Record<string, number>>((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + (Number(e.amount) || 0)
    return acc
  }, {})

  const topCategory = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])[0]

  const handleSave = async () => {
    const amount = parseFloat(formData.amount)
    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid amount")
      return
    }
    const expenseData: ExpenseInput = { ...formData, amount }
    try {
      if (editingExpense) await onUpdate(editingExpense._id, expenseData)
      else await onCreate(expenseData)
      resetForm()
      toast.success(editingExpense ? "Expense updated" : "Expense added")
    } catch {
      toast.error("Could not save expense")
    }
  }

  const handleEdit = (expense: Expense) => {
    setEditingExpense(expense)
    setFormData({
      category: expense.category,
      amount: expense.amount.toString(),
      description: expense.description,
    })
    setShowForm(true)
  }

  const resetForm = () => {
    setFormData({ category: "Transport", amount: "", description: "" })
    setEditingExpense(null)
    setShowForm(false)
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <Wallet className="mr-2 text-blue-600" size={22} /> Expenses
          </h3>
          <div className="mt-2 flex items-center gap-4">
            <p className="text-lg">
              Total: <span className="font-bold text-green-600">{formatCurrency(total)}</span>
            </p>
            {topCategory && (
              <p className="text-sm text-gray-500 flex items-center">
                <TrendingUp className="mr-1 text-green-500" size={16} />
                Top: {topCategory[0]}
              </p>
            )}
          </div>
        </div>
        <Button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          <Plus className="mr-2" size={20} /> Add Expense
        </Button>
      </div>

      {showForm && (
        <motion.div
          className="mb-6 p-5 border border-gray-200 rounded-2xl bg-gray-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h4 className="text-lg font-semibold mb-4">
            {editingExpense ? "Edit Expense" : "Add New Expense"}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <select
              className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              {EXPENSE_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Amount"
              step="0.01"
              min="0"
              className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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

      <div className="space-y-3">
        <AnimatePresence>
          {expenses.map((expense) => (
            <motion.div
              key={expense._id}
              className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow bg-white"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
                    <TrendingDown className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-gray-900">{expense.category}</h4>
                      <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">
                        {expense.description}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-4">
                  <span className="text-lg font-bold text-green-600">
                    {formatCurrency(expense.amount)}
                  </span>
                  <div className="flex space-x-1">
                    <button
                      onClick={() => handleEdit(expense)}
                      className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => onDelete(expense._id)}
                      className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {expenses.length === 0 && (
        <motion.div
          className="text-center py-12 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Wallet className="mx-auto mb-4 text-gray-300" size={48} />
          <p className="text-lg">No expenses recorded yet</p>
        </motion.div>
      )}
    </div>
  )
}
