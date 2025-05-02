import Link from "next/link"
import { Building, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function TenantsPage() {
  const tenants = [
    {
      id: "1",
      name: "John & Sarah Smith",
      property: "123 Main Street",
      leaseEnd: "2024-12-31",
      rent: 1750,
      status: "Current",
      phone: "(512) 555-1234",
      email: "john.smith@example.com",
    },
    {
      id: "2",
      name: "Michael Johnson",
      property: "456 Oak Avenue",
      leaseEnd: "2024-10-15",
      rent: 1500,
      status: "Current",
      phone: "(512) 555-5678",
      email: "michael.johnson@example.com",
    },
    {
      id: "3",
      name: "Emily & David Wilson",
      property: "789 Pine Road",
      leaseEnd: "2025-01-31",
      rent: 1650,
      status: "Current",
      phone: "(512) 555-9012",
      email: "emily.wilson@example.com",
    },
    {
      id: "4",
      name: "Robert & Lisa Brown",
      property: "101 Cedar Lane",
      leaseEnd: "2025-03-15",
      rent: 1850,
      status: "Current",
      phone: "(512) 555-3456",
      email: "robert.brown@example.com",
    },
    {
      id: "5",
      name: "Jennifer Taylor",
      property: "202 Maple Drive",
      leaseEnd: "2024-11-30",
      rent: 1500,
      status: "Current",
      phone: "(512) 555-7890",
      email: "jennifer.taylor@example.com",
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
            <Link href="/tenants" className="text-sm font-medium text-primary">
              Tenants
            </Link>
            <Link
              href="/maintenance"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
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
              <h1 className="text-3xl font-bold tracking-tight">Tenants</h1>
              <p className="text-muted-foreground">Manage and view details for all your tenants.</p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Tenant
            </Button>
          </div>

          <div className="flex items-center mb-6">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search tenants..." className="w-full pl-8" />
            </div>
          </div>

          <div className="space-y-4">
            {tenants.map((tenant) => (
              <Card key={tenant.id}>
                <CardContent className="p-6">
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{tenant.name}</h3>
                      <p className="text-sm text-muted-foreground">{tenant.property}</p>
                      <Badge variant="outline" className="mt-1">
                        {tenant.status}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Contact</p>
                      <p className="text-sm">{tenant.phone}</p>
                      <p className="text-sm">{tenant.email}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Lease</p>
                      <p className="text-sm">Ends: {new Date(tenant.leaseEnd).toLocaleDateString()}</p>
                      <p className="text-sm">Rent: ${tenant.rent}/month</p>
                    </div>
                    <div className="flex items-center justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        Contact
                      </Button>
                      <Button variant="outline" size="sm">
                        View Lease
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
