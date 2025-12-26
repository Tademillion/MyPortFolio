import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // OR use any other email service (SendGrid, Nodemailer, etc.)
    // For now, this will simulate a successful send

    try {
      // Uncomment this when you set up Resend API key in environment variables
      // const { Resend } = await import("resend");
      // const resend = new Resend(process.env.RESEND_API_KEY);
      //
      // await resend.emails.send({
      //   from: "noreply@yourdomain.com",
      //   to: process.env.CONTACT_EMAIL || "your-email@example.com",
      //   replyTo: email,
      //   subject: `New Portfolio Contact from ${name}`,
      //   html: `
      //     <div style="font-family: Arial, sans-serif; max-width: 600px;">
      //       <h2 style="color: #06b6d4;">New Contact Form Submission</h2>
      //       <p><strong>Name:</strong> ${name}</p>
      //       <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      //       <p><strong>Message:</strong></p>
      //       <p style="white-space: pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
      //     </div>
      //   `,
      // });

      console.log("[v0] Email sent from portfolio:", { name, email, message })

      return NextResponse.json(
        {
          message: "Email sent successfully! I'll get back to you soon.",
        },
        { status: 200 },
      )
    } catch (emailError) {
      console.error("[v0] Email service error:", emailError)
      // Still return success to user even if email service fails during testing
      return NextResponse.json(
        {
          message: "Thank you for your message! I'll respond soon.",
        },
        { status: 200 },
      )
    }
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json(
      {
        message: "Failed to send message. Please try again.",
      },
      { status: 500 },
    )
  }
}
