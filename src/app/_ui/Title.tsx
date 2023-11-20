import React from 'react'

function Title({ title }: { title: string }) {
  return (
    <h2 className="text-5xl dark:text-white text-black  font-semibold mb-4">
      {title}
    </h2>
  )
}

export default Title
