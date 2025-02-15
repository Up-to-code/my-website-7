import Link from "next/link"
import { FileQuestion } from "lucide-react"

export default function ProjectNotFound() {
  return (
    <div className="min-h-[400px] flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <FileQuestion className="w-12 h-12 mx-auto mb-4 text-gray-400" />
        <h2 className="text-xl font-semibold mb-2">Project not found</h2>
        <p className="text-gray-600 mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <Link href="/projects" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 inline-block">
          Back to Projects
        </Link>
      </div>
    </div>
  )
}

