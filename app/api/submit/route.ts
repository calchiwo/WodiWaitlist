import { NextResponse } from "next/server"
import { db } from "@/lib/firebase"

interface Submission {
  email: string
  timestamp: string
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const submission: Submission = {
      email: email.toLowerCase().trim(),
      timestamp: new Date().toISOString(),
    }

    // Add submission to Firestore
    await db.collection("emails").add(submission)

    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined the waitlist!",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing submission:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
