import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "VishvTech — Innovating Technology for a Smarter Tomorrow",
  description:
    "VishvTech creates tailored technology solutions — smart integration, custom systems, intelligent automation, and AI-driven problem solving.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
