import { IPost } from '@/types'

import Title from '../../../components/ui/Title'
import List from './List'

function Posts({ posts }: { posts: IPost[] }) {
  return (
    <section className="h-full mx-auto max-w-6xl px-5 md:px-0 py-2 md:pb-10 w-full dark:text-white text-black ">
      <div className="border-b-[0.5px] dark:border-white/10 border-black/10 mt-20 " />
      <div className="md:pt-10 p-0">
        <Title title="Read Our Blogs." />
        <List posts={posts} />
      </div>
    </section>
  )
}

export default Posts
