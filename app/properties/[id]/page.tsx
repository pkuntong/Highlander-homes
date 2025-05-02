import Link from "next/link"
import Image from "next/image"
import {
  Building,
  ArrowLeft,
  Edit,
  Download,
  Users,
  Calendar,
  DollarSign,
  FileText,
  Wrench,
  Home,
  Bell,
  Menu,
  MapPin,
  Phone,
  Mail,
  Check,
  Plus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  // This would normally fetch data based on the ID
  const property = {
    id: params.id,
    address: "123 Main Street",
    city: "Austin",
    state: "TX",
    zip: "78701",
    type: "Single Family Home",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1800,
    yearBuilt: 2010,
    purchaseDate: "2018-05-15",
    purchasePrice: 320000,
    currentValue: 425000,
    mortgage: {
      lender: "ABC Mortgage",
      accountNumber: "MORT123456",
      monthlyPayment: 1450,
      interestRate: 3.25,
      term: 30,
      startDate: "2018-06-01",
      balance: 275000,
    },
    insurance: {
      provider: "XYZ Insurance",
      policyNumber: "POL987654",
      coverage: 350000,
      premium: 1200,
      renewalDate: "2024-06-15",
    },
    tenant: {
      name: "John & Sarah Smith",
      phone: "(512) 555-1234",
      email: "john.smith@example.com",
      leaseStart: "2023-01-01",
      leaseEnd: "2024-12-31",
      monthlyRent: 1750,
      securityDeposit: 1750,
    },
    bankDetails: {
      bank: "First National Bank",
      accountNumber: "ACCT123456",
      routingNumber: "987654321",
    },
    maintenanceHistory: [
      {
        id: "m1",
        date: "2024-04-10",
        issue: "Leaking bathroom faucet",
        status: "In Progress",
        priority: "High",
        cost: 150,
      },
      {
        id: "m2",
        date: "2023-11-15",
        issue: "HVAC annual maintenance",
        status: "Completed",
        priority: "Medium",
        cost: 250,
      },
      {
        id: "m3",
        date: "2023-08-22",
        issue: "Replaced dishwasher",
        status: "Completed",
        priority: "Medium",
        cost: 750,
      },
    ],
  }

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
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">3</span>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
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
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 transition-all hover:text-
              className=\"flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 transition-all hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
              </div>
              <span>Documents</span>
            </Link>
          </nav>
        </aside>
        
        <main className="flex-1 overflow-auto">
          <div className="container py-6">
            <div className="flex items-center gap-2 mb-6">
              <Button variant="outline" size="icon" asChild className="bg-white dark:bg-slate-900 shadow-sm">
                <Link href="/properties">
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <h1 className="text-2xl font-bold tracking-tight">{property.address}</h1>
              <Button variant="outline" size="icon" className="bg-white dark:bg-slate-900 shadow-sm">
                <Edit className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <div className="relative h-[300px] w-full rounded-lg overflow-hidden mb-6 shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <Image
                    src={`/placeholder.svg?height=600&width=1200&text=Property+${property.id}`}
                    alt={`Property at ${property.address}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex items-center text-white">
                    <MapPin className="h-5 w-5 mr-2" />
                    <div>
                      <h2 className="text-xl font-bold">{property.address}</h2>
                      <p>{property.city}, {property.state} {property.zip}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-3 py-1">
                      ${property.tenant.monthlyRent}/month
                    </Badge>
                  </div>
                </div>

                <Tabs defaultValue="overview" className="bg-white dark:bg-slate-900 rounded-lg shadow-sm">
                  <TabsList className="w-full p-0 bg-slate-100 dark:bg-slate-800 rounded-t-lg border-b">
                    <TabsTrigger value="overview" className="flex-1 rounded-none rounded-tl-lg data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-none">Overview</TabsTrigger>
                    <TabsTrigger value="financial" className="flex-1 rounded-none data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-none">Financial</TabsTrigger>
                    <TabsTrigger value="tenant" className="flex-1 rounded-none data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-none">Tenant</TabsTrigger>
                    <TabsTrigger value="maintenance" className="flex-1 rounded-none data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-none">Maintenance</TabsTrigger>
                    <TabsTrigger value="documents" className="flex-1 rounded-none rounded-tr-lg data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-none">Documents</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="p-6 m-0">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center">
                          <Home className="h-5 w-5 mr-2 text-blue-600" />
                          Property Details
                        </h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                              <p className="text-sm text-slate-500 dark:text-slate-400">Type</p>
                              <p className="font-medium">{property.type}</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                              <p className="text-sm text-slate-500 dark:text-slate-400">Year Built</p>
                              <p className="font-medium">{property.yearBuilt}</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                              <p className="text-sm text-slate-500 dark:text-slate-400">Bedrooms</p>
                              <p className="font-medium">{property.bedrooms}</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                              <p className="text-sm text-slate-500 dark:text-slate-400">Bathrooms</p>
                              <p className="font-medium">{property.bathrooms}</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                              <p className="text-sm text-slate-500 dark:text-slate-400">Square Feet</p>
                              <p className="font-medium">{property.squareFeet}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center">
                          <DollarSign className="h-5 w-5 mr-2 text-emerald-600" />
                          Purchase Information
                        </h3>
                        <div className="space-y-4">
                          <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                            <p className="text-sm text-slate-500 dark:text-slate-400">Purchase Date</p>
                            <p className="font-medium">{new Date(property.purchaseDate).toLocaleDateString()}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                              <p className="text-sm text-slate-500 dark:text-slate-400">Purchase Price</p>
                              <p className="font-medium">${property.purchasePrice.toLocaleString()}</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                              <p className="text-sm text-slate-500 dark:text-slate-400">Current Value</p>
                              <p className="font-medium">${property.currentValue.toLocaleString()}</p>
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950 p-3 rounded-lg">
                            <p className="text-sm text-slate-600 dark:text-slate-300">Appreciation</p>
                            <p className="font-medium text-emerald-600 dark:text-emerald-400">
                              +${(property.currentValue - property.purchasePrice).toLocaleString()} 
                              ({((property.currentValue / property.purchasePrice - 1) * 100).toFixed(1)}%)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="financial" className="p-6 m-0">
                    <div className="grid gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 mr-2"><path d="M2 16V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/><path d="M12 10v4"/><path d="M9 12h6"/></svg>
                          Mortgage Details
                        </h3>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Lender</p>
                                <p className="font-medium">{property.mortgage.lender}</p>
                              </div>
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">
                                {property.mortgage.term} Year Fixed
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Account: {property.mortgage.accountNumber}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Start Date: {new Date(property.mortgage.startDate).toLocaleDateString()}</p>
                          </div>
                          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Monthly Payment</p>
                                <p className="font-medium">${property.mortgage.monthlyPayment}</p>
                              </div>
                              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800">
                                {property.mortgage.interestRate}% Interest
                              </Badge>
                            </div>
                            <div className="mt-2">
                              <div className="flex justify-between text-sm mb-1">
                                <span>Loan Balance</span>
                                <span className="font-medium">${property.mortgage.balance.toLocaleString()}</span>
                              </div>
                              <Progress value={property.mortgage.balance / property.purchasePrice * 100} className="h-2" />
                              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                {(property.mortgage.balance / property.purchasePrice * 100).toFixed(1)}% of original loan
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600 mr-2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                          Insurance Details
                        </h3>
                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="text-sm text-slate-500 dark:text-slate-400">Provider</p>
                              <p className="font-medium">{property.insurance.provider}</p>
                            </div>
                            <Button variant="outline" size="sm" className="gap-1 bg-white dark:bg-slate-900">
                              <Download className="h-4 w-4" /> Policy
                            </Button>
                          </div>
                          <div className="grid grid-cols-3 gap-4 mt-3">
                            <div>
                              <p className="text-sm text-slate-500 dark:text-slate-400">Policy Number</p>
                              <p className="font-medium">{property.insurance.policyNumber}</p>
                            </div>
                            <div>
                              <p className="text-sm text-slate-500 dark:text-slate-400">Coverage</p>
                              <p className="font-medium">${property.insurance.coverage.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-sm text-slate-500 dark:text-slate-400">Annual Premium</p>
                              <p className="font-medium">${property.insurance.premium}/year</p>
                            </div>
                          </div>
                          <div className="mt-3 p-2 bg-amber-50 dark:bg-amber-950 rounded border border-amber-200 dark:border-amber-800 flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                            <p className="text-sm text-amber-800 dark:text-amber-300">
                              Renewal Date: <span className="font-medium">{new Date(property.insurance.renewalDate).toLocaleDateString()}</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 mr-2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                          Banking Details
                        </h3>
                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-slate-500 dark:text-slate-400">Bank</p>
                              <p className="font-medium">{property.bankDetails.bank}</p>
                            </div>
                            <div>
                              <p className="text-sm text-slate-500 dark:text-slate-400">Account Number</p>
                              <p className="font-medium">{property.bankDetails.accountNumber}</p>
                            </div>
                            <div>
                              <p className="text-sm text-slate-500 dark:text-slate-400">Routing Number</p>
                              <p className="font-medium">{property.bankDetails.routingNumber}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="tenant" className="p-6 m-0">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 text-center">
                          <Avatar className="h-24 w-24 mx-auto mb-4">
                            <AvatarImage src="/placeholder.svg?height=96&width=96" alt={property.tenant.name} />
                            <AvatarFallback className="text-2xl">JS</AvatarFallback>
                          </Avatar>
                          <h3 className="text-xl font-semibold">{property.tenant.name}</h3>
                          <p className="text-slate-500 dark:text-slate-400">Current Tenant</p>
                          
                          <div className="mt-6 space-y-3">
                            <Button className="w-full gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                              <Phone className="h-4 w-4" /> Call Tenant
                            </Button>
                            <Button variant="outline" className="w-full gap-2">
                              <Mail className="h-4 w-4" /> Email Tenant
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:w-2/3 space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center">
                            <Users className="h-5 w-5 mr-2 text-blue-600" />
                            Contact Information
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg flex items-center gap-3">
                              <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2 text-blue-600 dark:text-blue-400">
                                <Phone className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                                <p className="font-medium">{property.tenant.phone}</p>
                              </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg flex items-center gap-3">
                              <div className="rounded-full bg-indigo-100 dark:bg-indigo-900 p-2 text-indigo-600 dark:text-indigo-400">
                                <Mail className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                                <p className="font-medium">{property.tenant.email}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center">
                            <Calendar className="h-5 w-5 mr-2 text-emerald-600" />
                            Lease Information
                          </h3>
                          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Lease Period</p>
                                <p className="font-medium">
                                  {new Date(property.tenant.leaseStart).toLocaleDateString()} - {new Date(property.tenant.leaseEnd).toLocaleDateString()}
                                </p>
                              </div>
                              <Button variant="outline" size="sm" className="gap-1 bg-white dark:bg-slate-900">
                                <Download className="h-4 w-4" /> Lease
                              </Button>
                            </div>
                            
                            <div className="space-y-2">
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Lease Progress</span>
                                  <span>
                                    {Math.round((Date.now() - new Date(property.tenant.leaseStart).getTime()) / 
                                    (new Date(property.tenant.leaseEnd).getTime() - new Date(property.tenant.leaseStart).getTime()) * 100)}%
                                  </span>
                                </div>
                                <Progress 
                                  value={Math.round((Date.now() - new Date(property.tenant.leaseStart).getTime()) / 
                                  (new Date(property.tenant.leaseEnd).getTime() - new Date(property.tenant.leaseStart).getTime()) * 100)} 
                                  className="h-2" 
                                />
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                  <p className="text-sm text-slate-500 dark:text-slate-400">Monthly Rent</p>
                                  <p className="font-medium">${property.tenant.monthlyRent}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-slate-500 dark:text-slate-400">Security Deposit</p>
                                  <p className="font-medium">${property.tenant.securityDeposit}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center">
                            <Check className="h-5 w-5 mr-2 text-emerald-600" />
                            Payment History
                          </h3>
                          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                            <div className="space-y-3">
                              <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-3">
                                  <div className="rounded-full bg-emerald-100 dark:bg-emerald-900 p-1.5 text-emerald-600 dark:text-emerald-400">
                                    <Check className="h-3 w-3" />
                                  </div>
                                  <div>
                                    <p className="font-medium">April 2024 Rent</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Paid on Apr 1, 2024</p>
                                  </div>
                                </div>
                                <p className="font-medium">${property.tenant.monthlyRent}</p>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-3">
                                  <div className="rounded-full bg-emerald-100 dark:bg-emerald-900 p-1.5 text-emerald-600 dark:text-emerald-400">
                                    <Check className="h-3 w-3" />
                                  </div>
                                  <div>
                                    <p className="font-medium">March 2024 Rent</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Paid on Mar 1, 2024</p>
                                  </div>
                                </div>
                                <p className="font-medium">${property.tenant.monthlyRent}</p>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-3">
                                  <div className="rounded-full bg-emerald-100 dark:bg-emerald-900 p-1.5 text-emerald-600 dark:text-emerald-400">
                                    <Check className="h-3 w-3" />
                                  </div>
                                  <div>
                                    <p className="font-medium">February 2024 Rent</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Paid on Feb 1, 2024</p>
                                  </div>
                                </div>
                                <p className="font-medium">${property.tenant.monthlyRent}</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="w-full mt-3 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950">
                              View All Payment History
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="maintenance" className="p-6 m-0">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Wrench className="h-5 w-5 mr-2 text-blue-600" />
                        Maintenance History
                      </h3>
                      <Button className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        <Plus className="h-4 w-4" /> New Request
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      {property.maintenanceHistory.map((item) => (
                        <div key={item.id} className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all p-4">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex gap-3">
                              <div className={`rounded-full p-2 flex-shrink-0 ${
                                item.priority === "High" 
                                  ? "bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-400" 
                                  : item.priority === "Medium"
                                    ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
                                    : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                              }`}>
                                <Wrench className="h-5 w-5" />
                              </div>
                              <div>
                                <h4 className="font-medium">{item.issue}</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                  Reported on {new Date(item.date).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 ml-auto">
                              <Badge
                                variant={
                                  item.status === "Completed"
                                    ? "outline"
                                    : item.status === "In Progress"
                                      ? "secondary"
                                      : "default"
                                }
                                className={
                                  item.status === "Completed"
                                    ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800"
                                    : item.status === "In Progress"
                                      ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
                                      : ""
                                }
                              >
                                {item.status}
                              </Badge>
                              <Badge
                                variant={
                                  item.priority === "High"
                                    ? "destructive"
                                    : item.priority === "Medium"
                                      ? "default"
                                      : "outline"
                                }
                                className={
                                  item.priority === "High"
                                    ? "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800"
                                    : item.priority === "Medium"
                                      ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
                                      : ""
                                }
                              >
                                {item.priority}
                              </Badge>
                              <span className="text-sm font-medium">${item.cost || "TBD"}</span>
                              <Button variant="ghost" size="sm" className="ml-2">
                                Details
                              </Button>
                            </div>
                          </div>
                          {item.status === "In Progress" && (
                            <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-950 rounded border border-blue-200 dark:border-blue-800 flex items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                              <p className="text-sm text-blue-700 dark:text-blue-300">
                                Scheduled for repair on April 15, 2024
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="documents" className="p-6 m-0">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-semibold flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-blue-600" />
                        Property Documents
                      </h3>
                      <Button className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        <Plus className="h-4 w-4" /> Upload Document
                      </Button>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-4 flex items-center gap-3 hover:shadow-md transition-all">
                        <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2 text-blue-600 dark:text-blue-400">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">Purchase Agreement</h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Added May 15, 2018</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-4 flex items-center gap-3 hover:shadow-md transition-all">
                        <div className="rounded-full bg-indigo-100 dark:bg-indigo-900 p-2 text-indigo-600 dark:text-indigo-400">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">Property Deed</h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Added June 1, 2018</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-4 flex items-center gap-3 hover:shadow-md transition-all">
                        <div className="rounded-full bg-emerald-100 dark:bg-emerald-900 p-2 text-emerald-600 dark:text-emerald-400">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">Current Lease Agreement</h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Added January 1, 2023</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-4 flex items-center gap-3 hover:shadow-md transition-all">
                        <div className="rounded-full bg-amber-100 dark:bg-amber-900 p-2 text-amber-600 dark:text-amber-400">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">Insurance Policy</h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Added June 15, 2023</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                      <h4 className="font-medium mb-3">Upload New Document</h4>
                      <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-6 text-center">
                        <div className="mx-auto w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Drag and drop files here, or click to browse</p>
                        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">Supports PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
                        <Button className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                          Browse Files
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div>
                <Card className="mb-6 border-none shadow-sm hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Property Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-slate-100 dark:bg-slate-800 p-1.5">
                            <Home className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                          </div>
                          <span className="text-sm">Type</span>
                        </div>
                        <span className="text-sm font-medium">{property.type}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-emerald-100 dark:bg-emerald-900 p-1.5">
                            <DollarSign className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <span className="text-sm">Monthly Income</span>
                        </div>
                        <span className="text-sm font-medium">${property.tenant.monthlyRent}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-red-100 dark:bg-red-900 p-1.5">
                            <DollarSign className="h-4 w-4 text-red-600 dark:text-red-400" />
                          </div>
                          <span className="text-sm">Monthly Expenses</span>
                        </div>
                        <span className="text-sm font-medium">
                          ${property.mortgage.monthlyPayment + Math.round(property.insurance.premium / 12)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-1.5">
                            <DollarSign className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <span className="text-sm">Monthly Profit</span>
                        </div>
                        <span className="text-sm font-medium">
                          $
                          {property.tenant.monthlyRent -
                            (property.mortgage.monthlyPayment + Math.round(property.insurance.premium / 12))}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-amber-100 dark:bg-amber-900 p-1.5">
                            <Calendar className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                          </div>
                          <span className="text-sm">Lease Ends</span>
                        </div>
                        <span className="text-sm font-medium">
                          {new Date(property.tenant.leaseEnd).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-indigo-100 dark:bg-indigo-900 p-1.5">
                            <Wrench className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <span className="text-sm">Active Maintenance</span>
                        </div>
                        <span className="text-sm font-medium">1 Request</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      <Users className="mr-2 h-4 w-4" /> Contact Tenant
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Wrench className="mr-2 h-4 w-4" /> Schedule Maintenance
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <FileText className="mr-2 h-4 w-4" /> Upload Document
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <DollarSign className="mr-2 h-4 w-4" /> Record Payment
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
