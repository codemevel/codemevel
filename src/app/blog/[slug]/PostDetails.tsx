import Image from 'next/image'
import React from 'react'

import IntroLable from '@/app/_ui/IntroLable'
import SubTitle from '@/app/_ui/SubTitle'
import Title from '@/app/_ui/Title'
import { IPost } from '@/types'

function PostDetails({ post }: { post: IPost }) {
  return (
    <div className="">
      <IntroLable label={post?.catagory} />
      <Title title={post?.title} />
      <SubTitle subTitle={post?.description} />
      <div className="h-full w-full relative aspect-video">
        <Image
          src={post?.image?.url}
          alt={post?.image?.alt || 'Thumbnail'}
          className="object-cover h-full w-full grayscale scale-100  group-hover:scale-[.99] "
          fill
          sizes="(max-width: 768px) 30vw, 33vw"
        />
      </div>
    </div>
  )
}
export default PostDetails
