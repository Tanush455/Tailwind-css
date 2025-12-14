import React from 'react'
import { cn } from '@/lib/utils'

export default function Conatiner({children,className}:{children:React.ReactNode,className?: string}) {
  return (
    <div className={cn("max-w-7xl mx-auto px-4 md:py-8 relative z-10",className)}>
        {children}
    </div>
  )
}
