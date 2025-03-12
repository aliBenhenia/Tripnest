import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function TeamMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>Your team and their current status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {members.map((member, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <Badge variant={member.status === "Online" ? "default" : "outline"}>{member.status}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

const members = [
  {
    name: "Alex Thompson",
    role: "Product Manager",
    status: "Online",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "AT",
  },
  {
    name: "Jessica Wu",
    role: "UX Designer",
    status: "In a meeting",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "JW",
  },
  {
    name: "Robert Johnson",
    role: "Frontend Developer",
    status: "Online",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "RJ",
  },
  {
    name: "Sophia Martinez",
    role: "Backend Developer",
    status: "Away",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SM",
  },
]

