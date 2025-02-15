import prisma from "@/lib/db";

 
export async function getProject(id: string) {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: parseInt(id)
      }
    });
    return project;
  } catch (error) {
    console.error("Failed to fetch project:", error);
    return null;
  }
}
