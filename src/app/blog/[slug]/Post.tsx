import React from 'react'

import { IPost } from '@/types'

function Post({ post }: { post: IPost }) {
  console.log(post)
  return (
    <section className="h-full mx-auto max-w-6xl px-5 md:px-0 py-2 md:py-10 border-b-[0.5px] dark:border-white/10 border-black/10 w-full dark:text-white text-black">
      <div className="md:h-40 h-28 w-full" />
      <div className="text-white">{post?.title}</div>
    </section>
  )
}

export default Post
