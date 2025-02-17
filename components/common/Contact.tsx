"use client"

import { useState } from "react"
import { Phone, MessageCircle, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll call you back shortly.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Get in Touch</h2>
        <div className="flex flex-col md:flex-row-reverse gap-8 max-w-4xl mx-auto ">
          <div className="md:w-1/3 space-y-6">
            <p className="text-muted-foreground">
              Reach out through our contact channels or fill out the form. We'll call you back shortly!
            </p>
            <div className="space-y-4">
              <a
                href="https://github.com/Up-to-code"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a href="tel:+201142102700" className="flex items-center space-x-2 text-foreground hover:text-primary">
                <Phone className="h-5 w-5" />
                <span>+20 123 456 7890</span>
              </a>
        
            </div>
          </div>
          <div className="md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

