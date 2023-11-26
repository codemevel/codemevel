'use client'

import React from 'react'

interface ButtonProps {
  title: string | React.ReactNode
  submit?: boolean
  onClick?: () => void
  ariaLabel: string // Added accessibility label
}

function Button({ title, submit, onClick, ariaLabel }: ButtonProps) {
  return (
    <button
      onClick={onClick} // Fixed the onClick handler
      type={!submit ? 'button' : 'submit'}
      className="border-[0.5px] z-10 relative cursor-pointer capitalize dark:border-white/30 border-black/30 dark:text-white text-black  bg-white/50 dark:bg-black/50 font-semibold text-xl md:text-2xl active:scale-[.99] px-5 py-2 rounded-sm  hover:dark:bg-white/10 hover:bg-black/10"
      aria-label={ariaLabel} // Added aria-label for accessibility
    >
      <div className="h-2 w-2 border-t-[0.5px] absolute top-1 left-1 border-l-[0.5px]   border-primary" />
      <div className="h-2 w-2 border-b-[0.5px] absolute bottom-1 right-1 border-r-[0.5px]   border-primary" />
      {title}
    </button>
  )
}

export default Button
