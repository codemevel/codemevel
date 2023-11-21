import React from 'react'

function IntroLable({ label }: { label: string }) {
  return (
    <p className="w-full mb-5 py-1 text-xl max-w-xs border-b-[0.5px] text-black dark:text-white border-black/30 dark:border-white/30 opacity-90 ">
      {label} {'->'}
    </p>
  )
}

export default IntroLable
