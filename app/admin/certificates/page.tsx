import Link from "next/link"
import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DataTable } from "./data-table"
import { columns } from "./columns"

// This would typically come from an API or database
const certificates = [
  { id: 1, name: "Web Development Fundamentals", issuer: "Codecademy", date: "2023-01-15" },
  { id: 2, name: "React Mastery", issuer: "Udemy", date: "2023-03-22" },
  { id: 3, name: "Advanced JavaScript", issuer: "FreeCodeCamp", date: "2023-05-10" },
  // Add more certificates as needed
]

export default function CertificatesPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Certificates</h1>
        <Link href="/admin/certificates/create">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Add Certificate
          </Button>
        </Link>
      </div>
      <DataTable columns={columns} data={certificates} />
    </div>
  )
}

