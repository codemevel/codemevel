'use client'

import React from 'react'

function Button({
  title,
  submit,
  onClick,
}: {
  title: string | React.ReactNode
  submit?: boolean
  onClick?: () => void
}) {
  return (
    <button
      onClick={() => onClick}
      type={!submit ? 'button' : 'submit'}
      className="border-[0.5px] z-10 relative cursor-pointer capitalize dark:border-white/30 border-black/30 dark:text-white text-black backdrop-blur font-semibold text-xl md:text-2xl active:scale-[.99] px-5 py-2 rounded-sm  hover:dark:bg-white/10 hover:bg-black/10"
    >
      <div className="h-2 w-2 border-t-[0.5px] absolute top-1 left-1 border-l-[0.5px] opacity-30" />
      <div className="h-2 w-2 border-b-[0.5px] absolute bottom-1 right-1 border-r-[0.5px] opacity-30" />
      {title}
    </button>
  )
}

export default Button
