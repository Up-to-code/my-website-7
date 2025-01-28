import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()

  // Here you would typically send an email or save the contact form data to a database
  console.log("Received contact form submission:", body)

  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Return a success response
  return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
}

