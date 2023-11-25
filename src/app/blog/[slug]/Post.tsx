// import { PortableText as PortableTextComponent } from '@portabletext/react'
import React from 'react'

import { IPost } from '@/types'

import PostDetails from './PostDetails'

function Post({ post }: { post: IPost }) {
  return (
    <section className="h-full mx-auto max-w-6xl px-5 md:px-0 py-2 md:py-10 border-b-[0.5px] dark:border-white/10 border-black/10 w-full dark:text-white text-black">
      <div className="md:h-10 h-10 w-full" />
      <article className="">
        <PostDetails post={post} />
        <div className="max-w-3xl py-5 dark:text-white text-black text-justify prose">
          {/* <PortableTextComponent value={post?.body} /> */}
        </div>
      </article>
    </section>
  )
}

export default Post
