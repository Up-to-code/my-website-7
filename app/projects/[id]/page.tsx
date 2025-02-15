import { getProject } from "@/actions/getProject"
import { ArrowLeft, Github, Globe, Calendar } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ImageGallery } from "./image-gallery"
import { format } from "date-fns"
import ReactMarkdown from "react-markdown"

export default async function ProjectPage({
  params,
}: {
  params: { id: string }
}) {
  const project = await getProject(params.id)

  if (!project) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Main Image */}
      <div className="w-full h-[60vh] relative bg-gray-900">
        <img src={project.images[0] || "/placeholder.svg"} alt={project.name} className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/projects" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          {/* Title and Date */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{project.name}</h1>
            <div className="flex items-center text-gray-600 text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              {format(new Date(project.createdAt), "MMMM dd, yyyy")}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
            <ImageGallery images={project.images} />
          </div>

          {/* Project Info */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="prose prose-lg max-w-none mb-8">
              <ReactMarkdown>{project.description}</ReactMarkdown>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.skills?.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

