import Link from "next/link"
import { Building, Users, Wrench, DollarSign, ArrowUpRight, Bell, Menu, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import PropertyOverview from "@/components/property-overview"
import { AreaChart } from "@/components/area-chart"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
      <header className="sticky top-0 z-10 border-b bg-white/95 dark:bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 p-1.5 text-white">
                <Building className="h-5 w-5" />
              </div>
              <h1 className="text-xl font-bold">PropertyManager</h1>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 mx-4 flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full pl-8 bg-slate-100 border-none dark:bg-slate-800"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                3
              </span>
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="hidden md:flex w-64 flex-col border-r bg-white dark:bg-slate-950 dark:border-slate-800 p-4">
          <nav className="space-y-2 mt-2">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-white transition-all hover:text-slate-900 dark:hover:text-white"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-layout-dashboard"
                >
                  <rect width="7" height="9" x="3" y="3" rx="1" />
                  <rect width="7" height="5" x="14" y="3" rx="1" />
                  <rect width="7" height="9" x="14" y="12" rx="1" />
                  <rect width="7" height="5" x="3" y="16" rx="1" />
                </svg>
              </div>
              <span className="font-medium">Dashboard</span>
            </Link>
            <Link
              href="/properties"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 transition-all hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800">
                <Building className="h-4 w-4" />
              </div>
              <span>Properties</span>
            </Link>
            <Link
              href="/tenants"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 transition-all hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800">
                <Users className="h-4 w-4" />
              </div>
              <span>Tenants</span>
            </Link>
            <Link
              href="/maintenance"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 transition-all hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800">
                <Wrench className="h-4 w-4" />
              </div>
              <span>Maintenance</span>
            </Link>
            <Link
              href="/finances"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 transition-all hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800">
                <DollarSign className="h-4 w-4" />
              </div>
              <span>Finances</span>
            </Link>
            <Link
              href="/documents"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 transition-all hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-file-text"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                  <line x1="10" x2="8" y1="9" y2="9" />
                </svg>
              </div>
              <span>Documents</span>
            </Link>
          </nav>

          <div className="mt-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-none dark:from-blue-950 dark:to-indigo-950">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 p-2 text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Upgrade Plan</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Get more features</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </aside>

        <main className="flex-1 overflow-auto">
          <div className="container py-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight">Welcome back, John</h1>
              <p className="text-slate-500 dark:text-slate-400">Here's what's happening with your properties today.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-none shadow-sm hover:shadow-md transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Monthly Income</CardTitle>
                  <div className="rounded-full bg-emerald-100 p-1 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-50">
                    <DollarSign className="h-4 w-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$8,250</div>
                  <div className="flex items-center pt-1">
                    <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-600" />
                    <p className="text-xs text-emerald-600">+5.1% from last month</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm hover:shadow-md transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
                  <div className="rounded-full bg-blue-100 p-1 text-blue-600 dark:bg-blue-900 dark:text-blue-50">
                    <Users className="h-4 w-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full mt-2">
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-full"></div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">All properties occupied</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm hover:shadow-md transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Maintenance</CardTitle>
                  <div className="rounded-full bg-amber-100 p-1 text-amber-600 dark:bg-amber-900 dark:text-amber-50">
                    <Wrench className="h-4 w-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <div className="flex gap-1 pt-1">
                    <Badge
                      variant="outline"
                      className="bg-red-50 text-red-600 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800"
                    >
                      2 high priority
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800"
                    >
                      1 medium
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm hover:shadow-md transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cash Flow</CardTitle>
                  <div className="rounded-full bg-indigo-100 p-1 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-trending-up"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$3,450</div>
                  <div className="h-10 w-full mt-2">
                    <AreaChart />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold tracking-tight">Your Properties</h2>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-400 dark:hover:bg-blue-900"
                >
                  <Link href="/properties">View All Properties</Link>
                </Button>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <PropertyOverview
                  id="1"
                  address="123 Main Street"
                  city="Austin"
                  state="TX"
                  rent={1750}
                  tenant="John & Sarah Smith"
                  leaseEnd="2024-12-31"
                  maintenanceCount={1}
                  image="/placeholder.svg?height=400&width=600&text=Property+1"
                />
                <PropertyOverview
                  id="2"
                  address="456 Oak Avenue"
                  city="Austin"
                  state="TX"
                  rent={1500}
                  tenant="Michael Johnson"
                  leaseEnd="2024-10-15"
                  maintenanceCount={0}
                  image="/placeholder.svg?height=400&width=600&text=Property+2"
                />
                <PropertyOverview
                  id="3"
                  address="789 Pine Road"
                  city="Austin"
                  state="TX"
                  rent={1650}
                  tenant="Emily & David Wilson"
                  leaseEnd="2025-01-31"
                  maintenanceCount={2}
                  image="/placeholder.svg?height=400&width=600&text=Property+3"
                />
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Card className="border-none shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Recent Maintenance Requests</CardTitle>
                      <CardDescription>Latest maintenance issues reported by tenants</CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950"
                    >
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between rounded-lg p-3 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <div className="flex gap-3">
                        <div className="mt-1 rounded-full bg-amber-100 p-1 text-amber-600 dark:bg-amber-900 dark:text-amber-50">
                          <Wrench className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Leaking bathroom faucet</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">123 Main Street - John Smith</p>
                        </div>
                      </div>
                      <div className="rounded-full px-2 py-1 text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                        High Priority
                      </div>
                    </div>
                    <div className="flex items-start justify-between rounded-lg p-3 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <div className="flex gap-3">
                        <div className="mt-1 rounded-full bg-red-100 p-1 text-red-600 dark:bg-red-900 dark:text-red-50">
                          <Wrench className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">AC not cooling properly</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">789 Pine Road - Emily Wilson</p>
                        </div>
                      </div>
                      <div className="rounded-full px-2 py-1 text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                        Urgent
                      </div>
                    </div>
                    <div className="flex items-start justify-between rounded-lg p-3 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <div className="flex gap-3">
                        <div className="mt-1 rounded-full bg-emerald-100 p-1 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-50">
                          <Wrench className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Garbage disposal jammed</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">789 Pine Road - Emily Wilson</p>
                        </div>
                      </div>
                      <div className="rounded-full px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                        Low Priority
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Upcoming Lease Renewals</CardTitle>
                      <CardDescription>Leases expiring in the next 90 days</CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950"
                    >
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg p-3 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <div className="flex gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Michael Johnson" />
                          <AvatarFallback>MJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Michael Johnson</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">456 Oak Avenue</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="text-sm font-medium">Oct 15, 2024</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">In 45 days</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-slate-500"
                          >
                            <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" />
                            <path d="M8 2h8" />
                            <path d="M9 16v4" />
                            <path d="M15 16v4" />
                            <path d="M12 16v4" />
                            <path d="M11 7h10v7a2 2 0 0 1-2 2h-8" />
                          </svg>
                        </div>
                        <h3 className="font-medium">No other upcoming renewals</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                          All other leases expire in more than 90 days
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
