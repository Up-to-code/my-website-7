"use client"

import { useRouter } from "next/navigation"
import { AlertCircle } from "lucide-react"

export default function ProjectError() {
  const router = useRouter()

  return (
    <div className="min-h-[400px] flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <AlertCircle className="w-12 h-12 mx-auto mb-4 text-gray-400" />
        <h2 className="text-xl font-semibold mb-2">Unable to load project</h2>
        <p className="text-gray-600 mb-6">There was an error loading this project. Please try again later.</p>
        <div className="space-x-4">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Go back
          </button>
          <button
            onClick={() => router.refresh()}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  )
}

