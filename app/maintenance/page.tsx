import Link from "next/link"
import { Building, Plus, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MaintenancePage() {
  const maintenanceRequests = [
    {
      id: "m1",
      property: "123 Main Street",
      tenant: "John Smith",
      issue: "Leaking bathroom faucet",
      date: "2024-04-10",
      status: "In Progress",
      priority: "High",
      cost: 150,
    },
    {
      id: "m2",
      property: "789 Pine Road",
      tenant: "Emily Wilson",
      issue: "AC not cooling properly",
      date: "2024-04-05",
      status: "Scheduled",
      priority: "Urgent",
      cost: null,
    },
    {
      id: "m3",
      property: "789 Pine Road",
      tenant: "Emily Wilson",
      issue: "Garbage disposal jammed",
      date: "2024-04-02",
      status: "New",
      priority: "Low",
      cost: null,
    },
    {
      id: "m4",
      property: "123 Main Street",
      tenant: "John Smith",
      issue: "HVAC annual maintenance",
      date: "2023-11-15",
      status: "Completed",
      priority: "Medium",
      cost: 250,
    },
    {
      id: "m5",
      property: "789 Pine Road",
      tenant: "Emily Wilson",
      issue: "Replaced dishwasher",
      date: "2023-08-22",
      status: "Completed",
      priority: "Medium",
      cost: 750,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Building className="h-6 w-6" />
            <h1 className="text-xl font-bold">PropertyManager</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Dashboard
            </Link>
            <Link
              href="/properties"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Properties
            </Link>
            <Link
              href="/tenants"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Tenants
            </Link>
            <Link href="/maintenance" className="text-sm font-medium text-primary">
              Maintenance
            </Link>
            <Link
              href="/finances"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Finances
            </Link>
            <Link
              href="/documents"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Documents
            </Link>
          </nav>
          <Button variant="outline" size="sm">
            Sign Out
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Maintenance</h1>
              <p className="text-muted-foreground">Track and manage maintenance requests for all properties.</p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> New Request
            </Button>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center mb-6">
            <div className="relative w-full md:max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search maintenance requests..." className="w-full pl-8" />
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {maintenanceRequests.map((request) => (
              <Card key={request.id}>
                <CardContent className="p-6">
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{request.issue}</h3>
                      <p className="text-sm text-muted-foreground">{request.property}</p>
                      <p className="text-sm text-muted-foreground">Tenant: {request.tenant}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Date Reported</p>
                      <p className="text-sm">{new Date(request.date).toLocaleDateString()}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge
                          variant={
                            request.status === "Completed"
                              ? "outline"
                              : request.status === "In Progress"
                                ? "secondary"
                                : request.status === "Scheduled"
                                  ? "default"
                                  : "outline"
                          }
                        >
                          {request.status}
                        </Badge>
                        <Badge
                          variant={
                            request.priority === "Urgent"
                              ? "destructive"
                              : request.priority === "High"
                                ? "destructive"
                                : request.priority === "Medium"
                                  ? "default"
                                  : "outline"
                          }
                        >
                          {request.priority}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Cost</p>
                      <p className="text-sm">{request.cost ? `$${request.cost}` : "Not yet determined"}</p>
                    </div>
                    <div className="flex items-center justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        Update Status
                      </Button>
                      <Button size="sm">Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
