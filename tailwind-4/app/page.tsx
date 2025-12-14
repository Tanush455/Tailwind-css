'use client'

import React from 'react'
import { DownloadCloudIcon, SunIcon, Moon, UploadCloud } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Page() {
  const { theme, setTheme } = useTheme()

  const icons = [
    { icon: <DownloadCloudIcon className="h-4 w-4" /> },
    { icon: <SunIcon className="h-5 w-5" /> },
    { icon: <Moon className="h-6 w-6" /> },
    { icon: <UploadCloud className="h-7 w-7" /> },
  ]

  return (
    <div className="relative h-full w-full flex items-center justify-center">

      {/* CARD */}
      <div className="relative z-10 h-100 w-80 rounded-xl overflow-hidden
                      bg-background text-foreground
                      shadow-2xl border border-neutral-200 dark:border-neutral-800">

        {/* ICON MARQUEE */}
        <div className="relative z-10 mt-14 flex justify-center gap-4 animate-marquee">
          {icons.map((item, index) => (
            <div
              key={index}
              className="size-12 rounded-full bg-neutral-300 dark:bg-neutral-700
                         flex items-center justify-center"
            >
              {item.icon}
            </div>
          ))}
        </div>

        <h2 className="mt-6 px-6 text-center text-sm leading-relaxed">
          Upload, download, and organize your data faster using smart cloud actions.
        </h2>

        <p className="mt-2 px-6 text-center text-xs opacity-80">
          Built for speed and simplicity, this interface keeps your workflow smooth.
        </p>

        {/* TOGGLE BUTTON */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="h-10 w-[150px] rounded-full bg-neutral-800 text-white
                       dark:bg-neutral-200 dark:text-black transition cursor-pointer"
          >
            Toggle Theme
          </button>
        </div>
      </div>

      {/* PATTERN (BEHIND EVERYTHING) */}
      <Pattern />
    </div>
  )
}


function Pattern() {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none
                 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
                 bg-[size:10px_10px]"
    />
  )
}
