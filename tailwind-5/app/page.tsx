import React from 'react'

export default function Page() {
  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-neutral-950 p-4'>

      <form className='w-full max-w-md bg-white dark:bg-neutral-900 px-9 py-12 rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-800'>

        <div className="mb-10 text-center">
          <h1 className='text-4xl font-bold tracking-tighter text-neutral-800 dark:text-neutral-100'>
            This is a{' '}
            {/* EXPLANATION OF THE "CRAZY" HIGHLIGHT:
               1. relative: Sets the boundary for the 'before' element.
               2. z-10: Ensures the text "Crazy" sits on TOP of the red background.
               3. before:content-['']: REQUIRED. Creates the empty fake element.
               4. before:absolute: Allows us to stretch the red box behind the text.
               5. before:inset-0: Stretches the red box to fill the span.
               6. before:bg-rose-500: The color of the highlighter.
               7. before:-z-10: Pushes the red box BEHIND the text.
               8. before:-skew-y-3: Tilts the red box for style.
            */}
            <span className="relative inline-block px-2 z-10 italic 
                             before:content-[''] 
                             before:absolute 
                             before:inset-0 
                             before:bg-rose-500 
                             before:-z-10 
                             before:-skew-y-3 
                             before:rounded-sm">
              Crazy
            </span>{' '}
            Good form
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3 text-sm font-medium">
            Enter your details to get started.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-600 dark:text-neutral-300">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="flex h-11 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-transparent px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-all dark:text-neutral-100"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-600 dark:text-neutral-300">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="flex h-11 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-transparent px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-all dark:text-neutral-100"
            />
          </div>
        </div>

        {/* EXPLANATION OF BUTTON GLOW (hover:after):
           We create an invisible layer that appears when you hover.
        */}
        {/* The main reason the after effect is likely "not working" (especially if you are testing in Dark Mode) is a Color Contrast Issue.

        In Dark Mode, your button becomes White (dark:bg-neutral-100). Your glow effect is also White (after:bg-white/20). White on White is invisible.

        Here is the fixed button code. I have made two changes:

        Dark Mode Fix: Added dark:after:bg-black/10 so the glow becomes a dark shadow on the white button.

        Cleaner Syntax: Switched translate-x-[-100%] to the standard -translate-x-full.

        The Fixed Button Code
        JavaScript */}

        <button
          className="relative mt-8 w-full h-11 rounded-md bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-bold text-sm tracking-wide transition-all duration-200 shadow-lg overflow-hidden group
             
             /* Base 'After' Styles */
             after:content-[''] 
             after:absolute 
             after:inset-0 
             
             /* Color Logic: White glow on dark button, Dark glow on white button */
             after:bg-white/20 
             dark:after:bg-black/10
             
             /* Position & Animation */
             after:-translate-x-full 
             hover:after:translate-x-0 
             after:transition-transform 
             after:duration-300"
        >
          <span className="relative z-10">Submit Form</span>
        </button>

      </form>
    </div>
  )
}