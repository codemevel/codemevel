import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { IPost } from '@/types'

import Button from '../_ui/Button'
import Title from '../_ui/Title'

function Posts({ posts }: { posts: IPost[] }) {
  return (
    <section className="h-full mx-auto max-w-6xl px-10 md:px-0 py-2 md:pb-10 w-full dark:text-white text-black ">
      <div className="border-b-[0.5px] dark:border-white/10 border-black/10 mt-20 " />
      <div className="pt-10">
        <Title title="Read Our Blogs." />
        <ul className="gap-5 grid  dot-matrix  grid-cols-4 md:grid-cols-8 px-5 relative  pb-10">
          {posts?.map((post) => (
            <li
              key={post?.title}
              className="mb-2 p-5 transition-all duration-100 group flex flex-col justify-between relative hover:scale-[.99]  col-span-4  bg-white/50 dark:bg-black/50  border-[0.5px] border-white/30 rounded-sm dark:text-white/50 text-black/50 hover:bg-white/10"
            >
              <div className="h-10 w-10 border-t-[0.5px] absolute top-1 left-1 border-l-[0.5px] opacity-30" />
              <div className="h-10 w-10 border-b-[0.5px] absolute bottom-1 right-1 border-r-[0.5px] opacity-30" />

              <div className="pb-5 slashed-zero text-primary font-mono">
                <time className="truncate text-xs" dateTime={post?.publishedAt}>
                  {post?.publishedAt}
                </time>
              </div>
              <div className="h-full w-full relative aspect-video">
                <Image
                  src={post?.image?.url}
                  alt={post?.image?.alt || 'Thumbnail'}
                  className="object-cover h-full w-full grayscale scale-100  group-hover:scale-[.99] "
                  fill
                  sizes="(max-width: 768px) 30vw, 33vw"
                />
              </div>
              <h2 className="text-2xl group-hover:text-primary py-5 font-semibold text-white">
                {post?.title}
                <br />
              </h2>
              <p className="mb-5"> {post?.description}</p>
              <Link href={`/blog/${post?.slug}`}>
                <Button
                  title="Read more ->"
                  ariaLabel={`Read more about ${post?.title}`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Posts
