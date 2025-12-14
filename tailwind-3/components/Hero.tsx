import React from 'react'

export default function Hero() {
  return (
    <div className='my-40'>
        <h1 className='max-w-2xl bg-linear-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent'>
            Unleash the power of intuitive finance
        </h1>
        <p className='max-w-3xl mt-10 mx-auto text-center text-xl text-neutral-200 selection:bg-white'>
          Say goodbye to the outdated financial tools. Every small business
          owner,
          regardless of the background, can now manage their business like a pro.
          Simple. Intuitive. And never boring.
        </p>

        <div className='flex justify-center mt-8'>
          <input type="text" className='border border-neutral-500 rounded-xl mr-4 p-2 text-white placeholder:text-neutral-300 flex-1 focus:ring-1 focus:outline-none focus:ring-sky-300 transition duration-200' placeholder='enter you email'/>
          <button className='relative rounded-xl px-4 py-2 border overflow-hidden border-neutral-700 text-white cursor-pointer'>
            <div className='absolute inset-x-0 bottom-0 h-px w-18 bg-linear-to-r from-transparent via-primary to-transparent mx-auto'></div>
            Join Waitlist
          </button>
        </div>
    </div>
  )
}
