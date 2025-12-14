import React from 'react'
import Components from '@/components/components' // Check your file path casing!
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Page() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background text-foreground p-10">

      {/* 1. The Toggle Button */}
      <ThemeToggle />

      {/* 2. Your Component */}
      <div className="max-w-4xl w-full border border-border rounded-xl overflow-hidden shadow-sm">
        <Components />
      </div>

    </main>
  )
}