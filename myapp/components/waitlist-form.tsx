"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface WaitlistFormProps {
  onSuccess: () => void
}

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      const response = await fetch("https://wodi-waitlist.vercel.app/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      onSuccess()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="animate-scale-in">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

        <form
          onSubmit={handleSubmit}
          className="relative bg-card/80 backdrop-blur-xl border-2 border-border rounded-2xl p-8 space-y-6 shadow-2xl"
        >
          <div className="space-y-3">
            <div className="relative">
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="h-16 text-lg px-6 bg-background/50 border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100" />
            </div>
            {error && (
              <p className="text-sm text-destructive animate-fade-in flex items-center gap-2">
                <span className="text-lg">⚠️</span>
                {error}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="relative w-full h-16 text-lg font-semibold overflow-hidden group/btn transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] rounded-xl"
            style={{
              backgroundColor: "#2978FF",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />

            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span className="animate-pulse">Submitting...</span>
                </>
              ) : (
                <>
                  Join the Waitlist
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </span>
          </Button>
        </form>
      </div>
    </div>
  )
}
