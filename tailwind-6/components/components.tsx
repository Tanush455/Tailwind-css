import React from 'react'
import { cn } from '@/lib/utils'

export default function Components() {
    return (
        <div className={cn(
            // Layout & Size
            'w-full rounded-2xl min-h-100 flex justify-center items-center',

            // THEME: Use semantic colors from your CSS
            'bg-background text-foreground',

            // GRID PATTERN: Uses your --border variable for the dots
            // This works for both Light (grayish) and Dark (faint white) automatically
            'bg-[radial-gradient(var(--border)_1px,transparent_1px)]',
            '[background-size:10px_10px]'
        )}>
            <div className={cn(
                // Layout & 3D
                'size-60 rounded-lg relative perspective-distant group',

                // THEME: Card colors (Auto-switches based on your CSS variables)
                'bg-card border border-border',

                // Shadow: Using explicit colors for better contrast
                // Light mode shadow is black, Dark mode shadow is primary color
                'shadow-2xl shadow-[4px_4px_0px_0px_var(--foreground)] dark:shadow-[4px_4px_0px_0px_var(--primary)]'
            )}>
                <img
                    src="/Artificial Intelligence Logo.jpg"
                    alt="AI Logo"
                    className={cn(
                        'object-cover h-full w-full object-top-left rounded-2xl',
                        'transform rotate-x-30 -rotate-y-30 rotate-z-30 translate-z-20',

                        // Transition Settings
                        'transition-all duration-500 ease-in-out',

                        // Hover Effect
                        'group-hover:transform group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:rotate-z-0'
                    )}
                />
            </div>
        </div>
    )
}