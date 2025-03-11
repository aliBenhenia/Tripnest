import { Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function UpcomingEvents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
        <CardDescription>Your schedule for the next 7 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{event.title}</p>
                <p className="text-xs text-muted-foreground">{event.date}</p>
                <p className="text-xs text-muted-foreground">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

const events = [
  {
    title: "Weekly Team Meeting",
    date: "Monday, June 12, 2023",
    time: "10:00 AM - 11:30 AM",
  },
  {
    title: "Product Demo with Client",
    date: "Wednesday, June 14, 2023",
    time: "2:00 PM - 3:00 PM",
  },
  {
    title: "Marketing Strategy Review",
    date: "Thursday, June 15, 2023",
    time: "11:00 AM - 12:30 PM",
  },
  {
    title: "Quarterly Planning Session",
    date: "Friday, June 16, 2023",
    time: "9:00 AM - 4:00 PM",
  },
]

