"use client"

import { motion } from "framer-motion"

const certificates = [
  {
    title: "Certificate 1",
    description: "A brief description of Certificate 1",
    image: "/placeholder-certificate.svg?height=200&width=300",
    link: "#",
  },
  {
    title: "Certificate 2",
    description: "A brief description of Certificate 2",
    image: "/placeholder-certificate.svg?height=200&width=300",
    link: "#",
  },
  {
    title: "Certificate 3",
    description: "A brief description of Certificate 3",
    image: "/placeholder-certificate.svg?height=200&width=300",
    link: "#",
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={certificate.image || "/placeholder-certificate.svg"}
                alt={certificate.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                <p className="text-gray-600 mb-4">{certificate.description}</p>
                <a
                  href={certificate.link}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
