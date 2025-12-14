"use client"

import * as React from "react"

export function ThemeToggle() {
    const [isDark, setIsDark] = React.useState(false)

    // Sync state with HTML class on mount
    React.useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains("dark")
        setIsDark(isDarkMode)
    }, [])

    const toggleTheme = () => {
        const html = document.documentElement
        if (html.classList.contains("dark")) {
            html.classList.remove("dark")
            setIsDark(false)
        } else {
            html.classList.add("dark")
            setIsDark(true)
        }
    }

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 px-4 py-2 rounded-md font-medium text-sm transition-colors
                 bg-primary text-primary-foreground hover:opacity-90 shadow-lg z-50"
        >
            {isDark ? "Switch to Light" : "Switch to Dark"}
        </button>
    )
}