import { createUploadthing, type FileRouter } from "uploadthing/next"

const f = createUploadthing()

export const ourFileRouter = {
  projectImage: f({ image: { maxFileSize: "512MB", maxFileCount: 5 } })
    .middleware(async () => {
      // Add authentication/authorization here if needed
      return {}
    })
    .onUploadComplete(async ({ metadata, file }) => {
      return { fileUrl: file.url }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter