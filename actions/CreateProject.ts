"use server"

import { z } from "zod"
import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const prisma = new PrismaClient()

const ProjectSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string().min(1, "Description is required"),
  url: z.string().url("Invalid project URL"),
  github: z.string().url("Invalid GitHub URL"),
  demo: z.string().url("Invalid demo URL"),
  images: z.array(z.string()),
  skills: z.array(z.string()),
})

export async function createProject(formData: FormData) {
  console.log("🚀 Starting createProject server action")
  console.log("📨 Raw FormData received:", Object.fromEntries(formData))

  try {
    const parsedImages = JSON.parse(formData.get("images") as string)
    const parsedSkills = JSON.parse(formData.get("skills") as string)

    console.log("🖼️ Parsed images array:", parsedImages)
    console.log("🔧 Parsed skills array:", parsedSkills)

    const validatedFields = ProjectSchema.parse({
      name: formData.get("name"),
      description: formData.get("description"),
      url: formData.get("url"),
      github: formData.get("github"),
      demo: formData.get("demo"),
      images: parsedImages,
      skills: parsedSkills,
    })

    console.log("✅ Validated fields:", validatedFields)

    const createdProject = await prisma.project.create({
      data: validatedFields,
    })

    console.log("💾 Created project in database:", createdProject)

    return { data: createdProject }
  } catch (error) {
    console.error("❌ Error in createProject:")

    if (error === null || error === undefined) {
      console.error("Caught a null or undefined error")
      return {
        error: [{ message: "An unexpected error occurred. Please try again." }],
      }
    }

    if (error instanceof z.ZodError) {
      console.error("🚫 Validation errors:", {
        errors: error.errors.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        })),
      })

      return {
        error: error.errors.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        })),
      }
    }

    if (error instanceof Error) {
      console.error("💥 Error details:", {
        name: error.name,
        message: error.message,
      })
    } else {
      console.error("💥 Unknown error:", String(error))
    }

    return {
      error: [{ message: "Failed to create project. Please try again." }],
    }
  } finally {
    await prisma.$disconnect()
  }
}

