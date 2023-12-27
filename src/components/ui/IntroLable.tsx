import React from 'react'

function IntroLable({ label }: { label: string }) {
  return (
    <p className="w-full py-1 mb-5 text-3xl font-light max-w-sm border-b-[0.5px] text-black dark:text-white border-primary ">
      {label} {'->'}
    </p>
  )
}

export default IntroLable
