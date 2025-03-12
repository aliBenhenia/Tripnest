import type React from "react"
import { Home, BarChart2, Users, Calendar, Settings, HelpCircle } from "lucide-react"
import Link from "next/link"

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar - Hidden on mobile */}
      <div className="hidden w-64 flex-col border-r bg-background md:flex">
        <div className="flex flex-col gap-2 p-4">
          <Link href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium bg-accent">
            <Home className="h-5 w-5" />
            Dashboard
          </Link>
          <Link href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
            <BarChart2 className="h-5 w-5" />
            Analytics
          </Link>
          <Link href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
            <Users className="h-5 w-5" />
            Team
          </Link>
          <Link href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
            <Calendar className="h-5 w-5" />
            Calendar
          </Link>
          <Link href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
            <Settings className="h-5 w-5" />
            Settings
          </Link>
          <Link href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
            <HelpCircle className="h-5 w-5" />
            Help
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-4 md:p-6 lg:p-8">{children}</div>
      </main>
    </div>
  )
}

