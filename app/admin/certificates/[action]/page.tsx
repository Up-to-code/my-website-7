"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type CertificateFormData = {
  name: string
  issuer: string
  date: string
}

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function CertificateForm({ searchParams }: PageProps) {
  const router = useRouter()
  const isEditing = searchParams?.action === "edit"
  const [formData, setFormData] = useState<CertificateFormData>({
    name: "",
    issuer: "",
    date: new Date().toISOString().split('T')[0],
  })

  useEffect(() => {
    if (isEditing) {
      // Fetch certificate data if editing
      // This is a placeholder and should be replaced with actual API call
      const fetchCertificate = async () => {
        try {
          // Replace with your actual API endpoint
          // const response = await fetch(`/api/certificates/${searchParams.id}`)
          // const data = await response.json()
          // setFormData({
          //   ...data,
          //   date: new Date(data.date).toISOString().split('T')[0]
          // })
        } catch (error) {
          console.error('Error fetching certificate:', error)
        }
      }
      fetchCertificate()
    }
  }, [isEditing])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Here you would typically send this data to your API
      // Example API call:
      // const response = await fetch('/api/certificates', {
      //   method: isEditing ? 'PUT' : 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })
      // if (!response.ok) throw new Error('Failed to save certificate')
      
      console.log("Submitting certificate:", formData)
      router.push("/admin/certificates")
    } catch (error) {
      console.error('Error saving certificate:', error)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">
        {isEditing ? "Edit Certificate" : "Add Certificate"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
        <div>
          <Label htmlFor="name">Certificate Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="issuer">Issuer</Label>
          <Input
            id="issuer"
            value={formData.issuer}
            onChange={(e) => setFormData({ ...formData, issuer: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </div>
        <Button type="submit">
          {isEditing ? "Update" : "Create"} Certificate
        </Button>
      </form>
    </div>
  )
}