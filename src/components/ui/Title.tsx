import React from 'react'

// import SplitTextAnimation from './SplitTextAnimation'

function Title({ title }: { title: string }) {
  return (
    <h2 className="text-4xl md:text-7xl dark:text-primary text-black mb-4">
      {/* <SplitTextAnimation phrase={title} /> */} {title}
    </h2>
  )
}

export default Title
