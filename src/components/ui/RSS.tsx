import { RssIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

function RSS({ link }: { link: string }) {
  return (
    <Link
      href={link}
      className="border-[0.5px]  flex flex-row dark:border-white/50 hover:dark:border-primary border-black/30  font-semibold text-xl active:scale-[.99] px-2 py-2 rounded-full group  bg-white/50 dark:bg-black/50 hover:bg-white/10 duration-100 transition-all"
    >
      <RssIcon className="h-6 w-6 fill-black dark:fill-white group-hover:dark:fill-primary" />
    </Link>
  )
}

export default RSS
