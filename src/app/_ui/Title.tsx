import React from 'react'

import SplitTextAnimation from './SplitTextAnimation'

function Title({ title }: { title: string }) {
  return (
    <h2 className="text-4xl md:text-5xl dark:text-white text-black  font-semibold mb-4">
      <SplitTextAnimation phrase={title} />
    </h2>
  )
}

export default Title
