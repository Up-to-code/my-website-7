import { prisma } from "@/lib/prisma"

export async function getProject(id: string) {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: Number.parseInt(id),
      },
    })
    return project
  } catch (error) {
    console.error("Failed to fetch project:", error)
    return null
  }
}

