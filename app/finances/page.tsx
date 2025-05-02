import Link from "next/link"
import { Building, Plus, ArrowUpRight, ArrowDownRight, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FinancesPage() {
  const transactions = [
    {
      id: "t1",
      date: "2024-04-01",
      description: "Rent Payment - 123 Main Street",
      amount: 1750,
      type: "income",
    },
    {
      id: "t2",
      date: "2024-04-01",
      description: "Rent Payment - 456 Oak Avenue",
      amount: 1500,
      type: "income",
    },
    {
      id: "t3",
      date: "2024-04-01",
      description: "Rent Payment - 789 Pine Road",
      amount: 1650,
      type: "income",
    },
    {
      id: "t4",
      date: "2024-04-01",
      description: "Rent Payment - 101 Cedar Lane",
      amount: 1850,
      type: "income",
    },
    {
      id: "t5",
      date: "2024-04-01",
      description: "Rent Payment - 202 Maple Drive",
      amount: 1500,
      type: "income",
    },
    {
      id: "t6",
      date: "2024-04-05",
      description: "Mortgage Payment - 123 Main Street",
      amount: 1450,
      type: "expense",
    },
    {
      id: "t7",
      date: "2024-04-05",
      description: "Mortgage Payment - 456 Oak Avenue",
      amount: 1300,
      type: "expense",
    },
    {
      id: "t8",
      date: "2024-04-10",
      description: "Plumber - 123 Main Street",
      amount: 150,
      type: "expense",
    },
    {
      id: "t9",
      date: "2024-04-15",
      description: "Property Tax - 789 Pine Road",
      amount: 750,
      type: "expense",
    },
  ]

  const totalIncome = transactions.filter((t) => t.type === "income").reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = transactions.filter((t) => t.type === "expense").reduce((sum, t) => sum + t.amount, 0)

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
            <Link href="/finances" className="text-sm font-medium text-primary">
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
              <h1 className="text-3xl font-bold tracking-tight">Finances</h1>
              <p className="text-muted-foreground">Track income, expenses, and financial performance.</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Plus className="mr-2 h-4 w-4" /> Record Expense
              </Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Record Income
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Income</CardTitle>
                <ArrowUpRight className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalIncome.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Monthly rental income</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                <ArrowDownRight className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalExpenses.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Monthly expenses</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Net Income</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${(totalIncome - totalExpenses).toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Monthly profit</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cash Flow Ratio</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{(totalIncome / totalExpenses).toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">Income to expense ratio</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All Transactions</TabsTrigger>
              <TabsTrigger value="income">Income</TabsTrigger>
              <TabsTrigger value="expenses">Expenses</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>A list of all your recent transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transactions.map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between border-b pb-4">
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(transaction.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div
                          className={`font-medium ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}
                        >
                          {transaction.type === "income" ? "+" : "-"}${transaction.amount}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="income" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Income Transactions</CardTitle>
                  <CardDescription>A list of all your income transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transactions
                      .filter((t) => t.type === "income")
                      .map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between border-b pb-4">
                          <div>
                            <p className="font-medium">{transaction.description}</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(transaction.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="font-medium text-green-600">+${transaction.amount}</div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="expenses" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Expense Transactions</CardTitle>
                  <CardDescription>A list of all your expense transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transactions
                      .filter((t) => t.type === "expense")
                      .map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between border-b pb-4">
                          <div>
                            <p className="font-medium">{transaction.description}</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(transaction.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="font-medium text-red-600">-${transaction.amount}</div>
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
