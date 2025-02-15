"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { UploadDropzone } from "@/lib/uploadthing"
import { createProject } from "@/actions/CreateProject"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from "next/dynamic"

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false })

interface UploadedImage {
  url: string
  key: string
}

export default function CreateProjectPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    github: "",
    demo: "",
  })
  const [description, setDescription] = useState("")
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([])
  const [skills, setSkills] = useState<string[]>([])
  const [currentSkill, setCurrentSkill] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddSkill = () => {
    if (currentSkill.trim() !== "" && !skills.includes(currentSkill.trim())) {
      setSkills((prev) => [...prev, currentSkill.trim()])
      setCurrentSkill("")
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  const removeImage = (keyToRemove: string) => {
    setUploadedImages((prev) => prev.filter((img) => img.key !== keyToRemove))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const projectData = new FormData()
      Object.entries(formData).forEach(([key, value]) => projectData.append(key, value))
      projectData.append("description", description)
      projectData.append("images", JSON.stringify(uploadedImages.map((img) => img.url)))
      projectData.append("skills", JSON.stringify(skills))

      const result = await createProject(projectData)

      if (result?.error) {
        if (Array.isArray(result.error)) {
          setError(result.error.map((err) => err.message).join(", "))
        } else {
          setError(result.error)
        }
        return
      }

      router.push("/admin/projects")
    } catch (err) {
      setError("Failed to create project. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Create New Project</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-4">
              <Label>Project Images ({uploadedImages.length}/5)</Label>
              {uploadedImages.length < 5 && (
                <UploadDropzone
                  endpoint="projectImage"
                  onClientUploadComplete={(res: any) => {
                    if (res) {
                      const newImages = res.map((file: any) => ({
                        url: file.ufsUrl,
                        key: file.key,
                      }))
                      setUploadedImages((prev) => [...prev, ...newImages])
                    }
                  }}
                  onUploadError={(error: Error) => {
                    setError(error.message)
                  }}
                  config={{ mode: "auto" }}
                />
              )}

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {uploadedImages.map((image) => (
                  <div key={image.key} className="relative group">
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt="Project preview"
                      width={200}
                      height={200}
                      className="object-cover rounded-lg h-40 w-full"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(image.key)}
                      className="absolute top-2 right-2 p-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4 text-white" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <Label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                <Input
                  id={key}
                  name={key}
                  type={key === "name" ? "text" : "url"}
                  value={value}
                  onChange={handleInputChange}
                  required
                />
              </div>
            ))}

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <MDEditor value={description} onChange={(value) => setDescription(value || "")} preview="edit" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills">Skills</Label>
              <div className="flex gap-2">
                <Input
                  id="skills"
                  value={currentSkill}
                  onChange={(e) => setCurrentSkill(e.target.value)}
                  placeholder="Enter a skill"
                />
                <Button type="button" onClick={handleAddSkill}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm flex items-center"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      className="ml-2 text-primary-foreground hover:text-red-500"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Creating Project..." : "Create Project"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

