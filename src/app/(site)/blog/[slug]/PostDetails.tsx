import { format, parseISO } from 'date-fns'
import Image from 'next/image'

import IntroLable from '@/components/ui/IntroLable'
import SubTitle from '@/components/ui/SubTitle'
import Title from '@/components/ui/Title'
import { IPost } from '@/types'

function PostDetails({ post }: { post: IPost }) {
  const {
    category,
    description,
    image,
    publishedAt,
    _createdAt,
    estReadingTime,
    title,
  } = post
  return (
    <div className="flex flex-col py-10 gap-3">
      <IntroLable label={category} />
      <Title title={title} />
      <SubTitle subTitle={description} />
      <div className="flex items-center space-x-2 text-sm  text-black dark:text-white md:text-xl">
        <time className="text-xl" dateTime={publishedAt || _createdAt}>
          {format(parseISO(publishedAt || _createdAt), 'MMMM dd, yyyy')}
        </time>
        <span className=" mx-2 text-xl">
          · {estReadingTime || '5'} min read
        </span>
      </div>
      <div className="h-full w-full my-5 relative aspect-video">
        <Image
          src={image?.url}
          alt={image?.alt || 'Thumbnail'}
          className="object-cover h-full w-full grayscale scale-100  group-hover:scale-[.99] "
          fill
          sizes="(max-width: 768px) 30vw, 33vw"
        />
      </div>
    </div>
  )
}
export default PostDetails
