import { NextResponse } from "next/server"
import { put } from "@vercel/blob"

// Define the structure of a submission
interface Submission {
  email: string
  timestamp: string
}

// API route handler for POST requests
export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Create submission object with timestamp
    const submission: Submission = {
      email: email.toLowerCase().trim(),
      timestamp: new Date().toISOString(),
    }

    // Each submission is stored as a separate blob for easy viewing in Vercel dashboard
    const filename = `waitlist-${Date.now()}-${submission.email.replace(/[^a-z0-9]/gi, "-")}.json`

    await put(filename, JSON.stringify(submission, null, 2), {
      access: "public",
      contentType: "application/json",
    })

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined the waitlist!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing submission:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
