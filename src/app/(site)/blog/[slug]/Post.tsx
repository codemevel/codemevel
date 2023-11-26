import TableOfContents from '@/app/(site)/blog/TableOfContent'
import IntroLable from '@/components/ui/IntroLable'
import { IPost } from '@/types'

import List from '../List'
import { PortableText } from '../portabletext'
import PostDetails from './PostDetails'

function Post({ post }: { post: IPost }) {
  return (
    <section className="dot-matrix">
      <div className="h-full mx-auto max-w-6xl px-5 md:px-0 py-2 md:py-10 border-b-[0.5px] dark:border-white/10 border-black/10 w-full dark:text-white text-black">
        <div className="md:h-10 h-10 w-full" />
        <PostDetails post={post} />
        <article className="relative grid mb-10 grid-cols-4 gap-5 md:grid-cols-12">
          <div className="col-span-4">
            <TableOfContents content={post.title} />
          </div>
          <div className=" col-span-4 md:col-span-8">
            <PortableText value={post?.body} />
          </div>
        </article>
        <IntroLable label="Related Blogs." />
      </div>
      <div className="h-full mx-auto max-w-6xl px-5 md:px-0 py-2 md:py-10 border-b-[0.5px] dark:border-white/10 border-black/10 w-full dark:text-white text-black">
        <List posts={post?.relatedPost} />
      </div>
    </section>
  )
}

export default Post
