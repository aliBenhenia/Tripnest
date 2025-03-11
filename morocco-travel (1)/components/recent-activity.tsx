import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivity() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions and updates from your team</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.avatar} alt={activity.name} />
                <AvatarFallback>{activity.initials}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{activity.name}</p>
                <p className="text-sm text-muted-foreground">{activity.action}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

const activities = [
  {
    name: "Sarah Johnson",
    action: "Created a new project: Marketing Campaign Q3",
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=36&width=36",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    action: "Completed task: Update user dashboard UI",
    time: "5 hours ago",
    avatar: "/placeholder.svg?height=36&width=36",
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    action: "Commented on: Sales Report April 2023",
    time: "Yesterday at 2:30 PM",
    avatar: "/placeholder.svg?height=36&width=36",
    initials: "ER",
  },
  {
    name: "David Kim",
    action: "Uploaded 5 new files to: Product Launch",
    time: "Yesterday at 10:15 AM",
    avatar: "/placeholder.svg?height=36&width=36",
    initials: "DK",
  },
]

