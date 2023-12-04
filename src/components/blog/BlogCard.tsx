import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { IPost } from '@/types'

import Button from '../ui/Button'

function BlogCard({ post }: { post: IPost }) {
  return (
    <li
      key={post?.title}
      className="mb-2 p-3 md:p-5 transition-all duration-100 group flex flex-col justify-between relative hover:scale-[.99]  col-span-4  bg-black/10 dark:bg-black/50  border-[0.5px] border-white/30 rounded-sm dark:text-white/50 text-black/50 hover:bg-primary/50"
    >
      <div className="h-10 w-10 border-t-[0.5px] absolute top-1 left-1 border-l-[0.5px] opacity-30" />
      <div className="h-10 w-10 border-b-[0.5px] absolute bottom-1 right-1 border-r-[0.5px] opacity-30" />

      <div className="h-full w-full relative object-cover aspect-video">
        <Link href={`/blog/${post?.slug}`}>
          <Image
            src={post?.image?.url}
            alt={post?.image?.alt || 'Thumbnail'}
            className="object-cover h-auto aspect-video w-full grayscale scale-100"
            height={180}
            width={320}
            sizes="(max-width: 320px) 30vw, 33vw"
          />
        </Link>
      </div>
      <Link href={`/blog/${post?.slug}`}>
        <h2 className="text-xl line-clamp-2 md:text-2xl group-hover:text-primary pb-2 md:pb-5 font-semibold text-black dark:text-white">
          {post?.title}
          <br />
        </h2>
      </Link>
      <p className="line-clamp-3 pb-10"> {post?.description}</p>
      <div className="pb-5 slashed-zero text-primary font-mono">
        <time
          className="text-sm"
          dateTime={post?.publishedAt || post?._createdAt}
        >
          {format(
            parseISO(post?.publishedAt || post?._createdAt),
            'MMMM dd, yyyy'
          )}
        </time>
        <span className=" mx-2 text-sm">
          · {post?.estReadingTime || '5'} min read
        </span>
      </div>
      <Link href={`/blog/${post?.slug}`}>
        <Button
          title="Read more ->"
          ariaLabel={`Read more about ${post?.title}`}
        />
      </Link>
    </li>
  )
}

export default BlogCard
