import { Users, BarChart, DollarSign, ShoppingCart, TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> +20.1%
            </span>{" "}
            from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">New Customers</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2,350</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> +18.2%
            </span>{" "}
            from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sales</CardTitle>
          <ShoppingCart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12,234</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-red-500 flex items-center gap-1">
              <TrendingDown className="h-3 w-3" /> -4.5%
            </span>{" "}
            from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573,839</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> +10.3%
            </span>{" "}
            from last month
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

