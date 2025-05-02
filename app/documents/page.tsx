import Link from "next/link"
import { Building, Plus, Search, FileText, Download, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DocumentsPage() {
  const documents = [
    {
      id: "d1",
      name: "Purchase Agreement - 123 Main Street",
      type: "Purchase",
      property: "123 Main Street",
      date: "2018-05-15",
      size: "2.4 MB",
    },
    {
      id: "d2",
      name: "Property Deed - 123 Main Street",
      type: "Legal",
      property: "123 Main Street",
      date: "2018-06-01",
      size: "1.8 MB",
    },
    {
      id: "d3",
      name: "Lease Agreement - 123 Main Street",
      type: "Lease",
      property: "123 Main Street",
      date: "2023-01-01",
      size: "3.2 MB",
    },
    {
      id: "d4",
      name: "Insurance Policy - 123 Main Street",
      type: "Insurance",
      property: "123 Main Street",
      date: "2023-06-15",
      size: "4.1 MB",
    },
    {
      id: "d5",
      name: "Lease Agreement - 456 Oak Avenue",
      type: "Lease",
      property: "456 Oak Avenue",
      date: "2023-10-15",
      size: "3.0 MB",
    },
    {
      id: "d6",
      name: "Property Inspection - 789 Pine Road",
      type: "Inspection",
      property: "789 Pine Road",
      date: "2023-01-15",
      size: "5.7 MB",
    },
    {
      id: "d7",
      name: "Tax Documents - 2023",
      type: "Tax",
      property: "All Properties",
      date: "2024-01-30",
      size: "8.2 MB",
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
            <Link href="/documents" className="text-sm font-medium text-primary">
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
              <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
              <p className="text-muted-foreground">Store and manage important documents for all properties.</p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Upload Document
            </Button>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center mb-6">
            <div className="relative w-full md:max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search documents..." className="w-full pl-8" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4 mb-8">
            <Card className="bg-primary/5">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <Folder className="h-8 w-8 mb-2 text-primary" />
                <h3 className="font-medium">Purchase Documents</h3>
                <p className="text-sm text-muted-foreground">2 documents</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <Folder className="h-8 w-8 mb-2 text-primary" />
                <h3 className="font-medium">Lease Agreements</h3>
                <p className="text-sm text-muted-foreground">5 documents</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <Folder className="h-8 w-8 mb-2 text-primary" />
                <h3 className="font-medium">Insurance Policies</h3>
                <p className="text-sm text-muted-foreground">5 documents</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <Folder className="h-8 w-8 mb-2 text-primary" />
                <h3 className="font-medium">Tax Documents</h3>
                <p className="text-sm text-muted-foreground">3 documents</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Documents</TabsTrigger>
              <TabsTrigger value="purchase">Purchase</TabsTrigger>
              <TabsTrigger value="lease">Lease</TabsTrigger>
              <TabsTrigger value="legal">Legal</TabsTrigger>
              <TabsTrigger value="tax">Tax</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>All Documents</CardTitle>
                  <CardDescription>All documents across all properties</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {documents.map((document) => (
                      <div key={document.id} className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{document.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {document.property} • {new Date(document.date).toLocaleDateString()} • {document.size}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="purchase" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Purchase Documents</CardTitle>
                  <CardDescription>Documents related to property purchases</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {documents
                      .filter((d) => d.type === "Purchase")
                      .map((document) => (
                        <div key={document.id} className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{document.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {document.property} • {new Date(document.date).toLocaleDateString()} • {document.size}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="lease" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Lease Documents</CardTitle>
                  <CardDescription>Lease agreements for all properties</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {documents
                      .filter((d) => d.type === "Lease")
                      .map((document) => (
                        <div key={document.id} className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{document.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {document.property} • {new Date(document.date).toLocaleDateString()} • {document.size}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="legal" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Legal Documents</CardTitle>
                  <CardDescription>Legal documents for all properties</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {documents
                      .filter((d) => d.type === "Legal")
                      .map((document) => (
                        <div key={document.id} className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{document.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {document.property} • {new Date(document.date).toLocaleDateString()} • {document.size}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tax" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Tax Documents</CardTitle>
                  <CardDescription>Tax-related documents for all properties</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {documents
                      .filter((d) => d.type === "Tax")
                      .map((document) => (
                        <div key={document.id} className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{document.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {document.property} • {new Date(document.date).toLocaleDateString()} • {document.size}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
