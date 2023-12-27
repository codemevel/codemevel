import Link from 'next/link'
import React from 'react'

import Button from './Button'

interface ICard {
  heading: string
  index: number
  content: string
  link: string
}

function Card({ heading, index, content, link }: ICard) {
  return (
    <li
      key={heading}
      className="mb-2 md:p-5 p-2 relative hover:scale-[.99] transition-all duration-100  col-span-4  bg-white/50 dark:bg-black/50 hover:border-primary border-[0.5px] border-white/30 rounded-sm dark:text-white/50 text-black/50 hover:bg-primary hover:dark:bg-primary/10"
    >
      <div className="h-10 w-10 border-t-[0.5px] absolute top-1 left-1 border-l-[0.5px] opacity-30" />
      <div className="h-10 w-10 border-b-[0.5px] absolute bottom-1 right-1 border-r-[0.5px] opacity-30" />

      <div className="pb-5 slashed-zero text-2xl text-primary  font-mono">
        <p> 0{index + 1}</p>
      </div>
      <h3 className="text-4xl py-5 font-semibold text-white ">
        {heading}
        <br />
      </h3>
      <p className="mb-10 text-2xl text-white/70 font-extralight">{content}</p>
      <Link href={link}>
        <Button title="Read more ->" ariaLabel="read more" />
      </Link>
    </li>
  )
}

export default Card
