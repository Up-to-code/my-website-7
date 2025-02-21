import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_123456789");

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactForm = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    console.log("Received contact form submission:", body);

    const contact = await prisma.formContact.create({
      data: {
        name: body.name,
        email: body.email,
        message: body.message,
      },
    });

    await resend.emails.send({
      from: "ahmedmansour20251@icloud.com", // Added your email here
      to: ["ahmedmansour20251@icloud.com"], // Added your email here
      subject: "New Contact Form Submission",
      html: `<p><strong>Name:</strong> ${body.name}</p>
             <p><strong>Email:</strong> ${body.email}</p>
             <p><strong>Message:</strong> ${body.message}</p>`,
    });

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
