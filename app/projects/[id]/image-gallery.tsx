"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

export function ImageGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            className="relative aspect-video rounded-lg overflow-hidden group"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Project image ${index + 1}`}
              className="w-full h-full max-h-80 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Project image"
              className="w-full h-full max-h-72 object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

