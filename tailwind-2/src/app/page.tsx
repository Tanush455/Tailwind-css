import Conatiner from '@/components/conatiner'
import Hero from '@/components/Hero'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col items-center min-h-screen relative [background:radial-gradient(125%_100%_at_50%,_#fff_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]'>
      <div className='max-w-7xl mx-auto absolute inset-0 h-full w-full'>
        <div className='absolute inset-y-0 left-0 h-full w-[2px] bg-gradient-to-b from-neutral-300/50 vai-neutral-200 to-transparent pointer-events-none z-0'></div>
        <div className='absolute inset-y-0 right-0 h-full w-[2px] bg-gradient-to-b from-neutral-300/50 vai-neutral-200 to-transparent pointer-events-none z-0'></div>
      </div>
      <Conatiner>
        <Navbar />
        <Hero />
      </Conatiner>
      <div className='relative w-full'>
        <div className='h-px w-full absolute inset-x-0 bg-gradient-to-r from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0'>
          <div className='max-w-7xl mx-auto mt-5 shadow-gray-200'>
            <Image src='/hero-ui-v5.webp' alt='banner image' width={1000} height={1000}
              className='rounded-xl object-cover object-left-top mx-auto border border-neutral-300 shadow-gray-300'></Image>
          </div>
        </div>
      </div>
    </div>
  )
}
