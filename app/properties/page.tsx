import Link from "next/link"
import Image from "next/image"
import { Building, Plus, Search, Filter, Users, Calendar, Wrench, DollarSign, Bell, Menu, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PropertiesPage() {
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
                  className="lucide lucide-layout-dashboard"
                >
                  <rect width="7" height="9" x="3" y="3" rx="1" />
                  <rect width="7" height="5" x="14" y="3" rx="1" />
                  <rect width="7" height="9" x="14" y="12" rx="1" />
                  <rect width="7" height="5" x="3" y="16" rx="1" />
                </svg>
              </div>
              <span>Dashboard</span>
            </Link>
            <Link
              href="/properties"
              className="flex items-center gap-3 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-white transition-all hover:text-slate-900 dark:hover:text-white"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                <Building className="h-4 w-4" />
              </div>
              <span className="font-medium">Properties</span>
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
        </aside>

        <main className="flex-1 overflow-auto">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Properties</h1>
                <p className="text-slate-500 dark:text-slate-400">
                  Manage and view details for all your rental properties.
                </p>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Plus className="mr-2 h-4 w-4" /> Add Property
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search properties..."
                  className="w-full pl-8 bg-white dark:bg-slate-900"
                />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px] bg-white dark:bg-slate-900">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="single">Single Family</SelectItem>
                    <SelectItem value="multi">Multi Family</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon" className="bg-white dark:bg-slate-900">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="bg-white dark:bg-slate-900 p-1">
                <TabsTrigger
                  value="all"
                  className="rounded-md data-[state=active]:bg-slate-100 dark:data-[state=active]:bg-slate-800"
                >
                  All Properties
                </TabsTrigger>
                <TabsTrigger
                  value="occupied"
                  className="rounded-md data-[state=active]:bg-slate-100 dark:data-[state=active]:bg-slate-800"
                >
                  Occupied
                </TabsTrigger>
                <TabsTrigger
                  value="vacant"
                  className="rounded-md data-[state=active]:bg-slate-100 dark:data-[state=active]:bg-slate-800"
                >
                  Vacant
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5].map((id) => (
                    <Card
                      key={id}
                      className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all group"
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <Image
                          src={`/placeholder.svg?height=400&width=600&text=Property+${id}`}
                          alt={`Property ${id}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-3 left-3 z-20 flex items-center text-white">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm font-medium">Austin, TX</span>
                        </div>
                        <div className="absolute top-3 right-3 z-20">
                          <Badge className="bg-blue-500 hover:bg-blue-600">
                            $
                            {id === 1
                              ? "1,750"
                              : id === 2
                                ? "1,500"
                                : id === 3
                                  ? "1,650"
                                  : id === 4
                                    ? "1,850"
                                    : "1,500"}
                            /mo
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="mb-3">
                          <h3 className="font-semibold text-lg">
                            {id === 1
                              ? "123 Main Street"
                              : id === 2
                                ? "456 Oak Avenue"
                                : id === 3
                                  ? "789 Pine Road"
                                  : id === 4
                                    ? "101 Cedar Lane"
                                    : "202 Maple Drive"}
                          </h3>
                          <div className="flex items-center mt-1">
                            <Badge variant={id === 2 ? "destructive" : "outline"} className="text-xs">
                              {id === 2 ? "45" : "180+"} days until lease end
                            </Badge>
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">
                              {id === 1
                                ? "John & Sarah Smith"
                                : id === 2
                                  ? "Michael Johnson"
                                  : id === 3
                                    ? "Emily & David Wilson"
                                    : id === 4
                                      ? "Robert & Lisa Brown"
                                      : "Jennifer Taylor"}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">
                              Lease ends:{" "}
                              {id === 1
                                ? "12/31/2024"
                                : id === 2
                                  ? "10/15/2024"
                                  : id === 3
                                    ? "01/31/2025"
                                    : id === 4
                                      ? "03/15/2025"
                                      : "11/30/2024"}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Wrench className="h-4 w-4" />
                            <span className="text-sm flex items-center">
                              {id === 1 || id === 3 ? (
                                <>
                                  <span>
                                    {id === 1 ? "1" : "2"} maintenance {id === 3 ? "requests" : "request"}
                                  </span>
                                  <span className="ml-1 h-2 w-2 rounded-full bg-amber-500"></span>
                                </>
                              ) : (
                                <span>No maintenance requests</span>
                              )}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="occupied" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5].map((id) => (
                    <Card
                      key={id}
                      className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all group"
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <Image
                          src={`/placeholder.svg?height=400&width=600&text=Property+${id}`}
                          alt={`Property ${id}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-3 left-3 z-20 flex items-center text-white">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm font-medium">Austin, TX</span>
                        </div>
                        <div className="absolute top-3 right-3 z-20">
                          <Badge className="bg-blue-500 hover:bg-blue-600">
                            $
                            {id === 1
                              ? "1,750"
                              : id === 2
                                ? "1,500"
                                : id === 3
                                  ? "1,650"
                                  : id === 4
                                    ? "1,850"
                                    : "1,500"}
                            /mo
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="mb-3">
                          <h3 className="font-semibold text-lg">
                            {id === 1
                              ? "123 Main Street"
                              : id === 2
                                ? "456 Oak Avenue"
                                : id === 3
                                  ? "789 Pine Road"
                                  : id === 4
                                    ? "101 Cedar Lane"
                                    : "202 Maple Drive"}
                          </h3>
                          <div className="flex items-center mt-1">
                            <Badge variant={id === 2 ? "destructive" : "outline"} className="text-xs">
                              {id === 2 ? "45" : "180+"} days until lease end
                            </Badge>
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">
                              {id === 1
                                ? "John & Sarah Smith"
                                : id === 2
                                  ? "Michael Johnson"
                                  : id === 3
                                    ? "Emily & David Wilson"
                                    : id === 4
                                      ? "Robert & Lisa Brown"
                                      : "Jennifer Taylor"}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">
                              Lease ends:{" "}
                              {id === 1
                                ? "12/31/2024"
                                : id === 2
                                  ? "10/15/2024"
                                  : id === 3
                                    ? "01/31/2025"
                                    : id === 4
                                      ? "03/15/2025"
                                      : "11/30/2024"}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="vacant" className="mt-6">
                <div className="flex items-center justify-center p-12 bg-white dark:bg-slate-900 rounded-lg shadow-sm">
                  <div className="text-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                      <Building className="h-6 w-6 text-slate-500" />
                    </div>
                    <h3 className="text-lg font-medium">No vacant properties</h3>
                    <p className="text-slate-500 dark:text-slate-400 mt-1 max-w-md">
                      All your properties are currently occupied. When a property becomes vacant, it will appear here.
                    </p>
                    <Button className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      <Plus className="mr-2 h-4 w-4" /> Add New Property
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
