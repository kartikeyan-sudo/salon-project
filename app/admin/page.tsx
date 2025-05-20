import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Calendar, ImageIcon, Scissors, Users, TrendingUp, Clock } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the CHROMA Salon admin panel.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">+4% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Gallery Items</CardTitle>
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">8 added this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Services</CardTitle>
            <Scissors className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">2 updated recently</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue for the current year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center border rounded-md bg-muted/20">
              <BarChart className="h-8 w-8 text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Revenue chart visualization</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Link
                href="/admin/gallery/add"
                className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors border"
              >
                <ImageIcon className="h-5 w-5" />
                <span>Add Gallery Item</span>
              </Link>
              <Link
                href="/admin/services/add"
                className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors border"
              >
                <Scissors className="h-5 w-5" />
                <span>Add New Service</span>
              </Link>
              <Link
                href="/admin/appointments/new"
                className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors border"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule Appointment</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Appointments</CardTitle>
            <CardDescription>Latest client bookings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Alex Johnson", service: "Haircut & Style", time: "Today, 2:00 PM" },
                { name: "Sam Rivera", service: "Color Treatment", time: "Today, 4:30 PM" },
                { name: "Jordan Taylor", service: "Beard Trim", time: "Tomorrow, 10:00 AM" },
                { name: "Morgan Lee", service: "Highlights", time: "Tomorrow, 1:15 PM" },
              ].map((appointment, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium">{appointment.name}</p>
                    <p className="text-sm text-muted-foreground">{appointment.service}</p>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {appointment.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Popular Services</CardTitle>
            <CardDescription>Most booked services this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Haircut & Style", count: 78, trend: "+12%" },
                { name: "Color Treatment", count: 45, trend: "+8%" },
                { name: "Highlights", count: 36, trend: "+15%" },
                { name: "Beard Trim", count: 24, trend: "+5%" },
              ].map((service, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium">{service.name}</p>
                    <p className="text-sm text-muted-foreground">{service.count} bookings</p>
                  </div>
                  <div className="flex items-center text-sm text-green-500">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {service.trend}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
