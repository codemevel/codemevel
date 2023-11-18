import React from 'react'

const Title = async ({ title }: { title: string }) => {
  return (
    <h2 className="text-5xl dark:text-white text-black  font-bold mb-4">
      {title}
    </h2>
  )
}

export default Title
