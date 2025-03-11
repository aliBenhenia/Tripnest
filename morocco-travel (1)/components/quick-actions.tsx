import { Plus, FileText, Users, Calendar, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function QuickActions() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks and shortcuts</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button className="w-full justify-start gap-2">
          <Plus className="h-4 w-4" />
          Create New Project
        </Button>
        <Button variant="outline" className="w-full justify-start gap-2">
          <FileText className="h-4 w-4" />
          View Reports
        </Button>
        <Button variant="outline" className="w-full justify-start gap-2">
          <Users className="h-4 w-4" />
          Manage Team
        </Button>
        <Button variant="outline" className="w-full justify-start gap-2">
          <Calendar className="h-4 w-4" />
          Schedule Meeting
        </Button>
        <Button variant="outline" className="w-full justify-start gap-2">
          <Settings className="h-4 w-4" />
          Account Settings
        </Button>
      </CardContent>
    </Card>
  )
}

