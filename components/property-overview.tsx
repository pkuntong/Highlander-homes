import Link from "next/link"
import Image from "next/image"
import { Users, Calendar, Wrench, MapPin } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PropertyOverviewProps {
  id: string
  address: string
  city: string
  state: string
  rent: number
  tenant: string
  leaseEnd: string
  maintenanceCount: number
  image: string
}

export default function PropertyOverview({
  id,
  address,
  city,
  state,
  rent,
  tenant,
  leaseEnd,
  maintenanceCount,
  image,
}: PropertyOverviewProps) {
  // Calculate days until lease end
  const today = new Date()
  const endDate = new Date(leaseEnd)
  const daysUntilEnd = Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

  // Determine badge color based on days remaining
  const getBadgeVariant = () => {
    if (daysUntilEnd <= 30) return "destructive"
    if (daysUntilEnd <= 90) return "warning"
    return "outline"
  }

  return (
    <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all group">
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <Image
          src={image || "/placeholder.svg"}
          alt={`Property at ${address}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 z-20 flex items-center text-white">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm font-medium">
            {city}, {state}
          </span>
        </div>
        <div className="absolute top-3 right-3 z-20">
          <Badge className="bg-blue-500 hover:bg-blue-600">${rent}/mo</Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="mb-3">
          <h3 className="font-semibold text-lg">{address}</h3>
          <div className="flex items-center mt-1">
            <Badge variant={getBadgeVariant()} className="text-xs">
              {daysUntilEnd} days until lease end
            </Badge>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <Users className="h-4 w-4" />
            <span className="text-sm">{tenant}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">Lease ends: {new Date(leaseEnd).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <Wrench className="h-4 w-4" />
            <span className="text-sm">
              {maintenanceCount > 0 ? (
                <span className="flex items-center">
                  <span>
                    {maintenanceCount} maintenance {maintenanceCount === 1 ? "request" : "requests"}
                  </span>
                  {maintenanceCount > 0 && <span className="ml-1 h-2 w-2 rounded-full bg-amber-500"></span>}
                </span>
              ) : (
                <span>No maintenance requests</span>
              )}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/properties/${id}`}>View Details</Link>
        </Button>
        <Button asChild variant="ghost" size="icon" className="flex-shrink-0">
          <Link href={`/properties/${id}/edit`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-pencil"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
