import React from 'react'

export default function Hero() {
    return (
        <div className='px-4 py-2 flex items-center flex-col w-full'>


            {/* Badge */}
            <div className='border border-neutral-200 bg-neutral-300 text-neutral-600 rounded-full text-sm px-2 py-1 my-20 hover:bg-gray-200 transition duration-500 cursor-pointer'>
                We're hiring Founding Ruby Engineers
            </div>

            {/* text section */}
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl font-bold text-center tracking-tight'>
                    Magically simplify
                    <br/>accounting and taxes
                </h1>
                <p className='text-center text-sm mt-1.5 text-neutral-500 tracking-tight'>
                    Automated bookkeeping, effortless tax filing, real‑time insights. 
                    <br/>Set up in 10 mins. Back to building by 11:26pm.
                </p>
            </div>

            <div className='flex flex-row mt-7 gap-4'>
                <button className='bg-[#2679f3] text-white w-[100px] h-[40px] rounded-md shadow-lg text-shadow-md tracking-wide font-bold'>Get started</button>
                <button className='w-[100px] h-[40px] rounded-md text-black hover:bg-gray-200 transition duration-500 cursor-pointer text-shadow-md tracking-wide font-bold'>Pricing &rarr;</button>
            </div>
        </div>
    )
}
