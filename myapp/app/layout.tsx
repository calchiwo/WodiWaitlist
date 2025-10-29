
import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "WodiWaitlist - Join My Journey",
  description:
    "Join my waitlist to stay updated on upcoming projects and launches. Be part of something special from the very beginning.",
  openGraph: {
    title: "WodiWaitlist - Join My Journey",
    description:
      "Join my waitlist to stay updated on upcoming projects and launches. Be part of something special from the very beginning.",
    url: "https://wodiwaitlist.web.app",
    siteName: "WodiWaitlist",
    images: [
      {
        url: "https://wodiwaitlist.web.app/wodiwaitlist-logo.jpg",
        width: 1200,
        height: 630,
        alt: "WodiWaitlist Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WodiWaitlist - Join My Journey",
    description:
      "Join my waitlist to stay updated on upcoming projects and launches. Be part of something special from the very beginning.",
    images: ["https://wodiwaitlist.web.app/wodiwaitlist-logo.jpg"],
  },
  icons: {
    icon: "/wodiwaitlist-logo.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
