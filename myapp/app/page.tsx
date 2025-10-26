"use client"

import { useState } from "react"
import Image from "next/image"
import { WaitlistForm } from "@/components/waitlist-form"
import { SuccessMessage } from "@/components/success-message"

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10 animate-gradient" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
        <div className="w-full max-w-2xl mx-auto space-y-12">
          {!isSubmitted && (
            <div className="flex justify-center animate-fade-in">
              <Image
                src="/wodiwaitlist-logo.jpg"
                alt="WodiWaitlist"
                width={280}
                height={100}
                priority
                className="w-full max-w-xs md:max-w-sm h-auto object-contain"
              />
            </div>
          )}

          {!isSubmitted && (
            <header className="text-center space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="inline-block">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient">
                  Join My Waitlist
                </h1>
                <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-xl mx-auto font-light">
                I'm building something special for you, and I want you to be part of it from the very beginning. Submit
                your email to stay updated on my upcoming projects and launches.
              </p>
            </header>
          )}

          {!isSubmitted ? <WaitlistForm onSuccess={() => setIsSubmitted(true)} /> : <SuccessMessage />}
        </div>
      </div>
    </main>
  )
}
