import BlogCard from '@/components/blog/BlogCard'
import Layout from '@/components/layout/Layout'
import SubLayout from '@/components/layout/SubLayout'
import IntroLable from '@/components/ui/IntroLable'
import SubTitle from '@/components/ui/SubTitle'
import Title from '@/components/ui/Title'
import { IPost } from '@/types'

function Posts({ posts }: { posts: IPost[] }) {
  return (
    <Layout>
      <>
        <SubLayout>
          <IntroLable label="Blogs" />
          <Title title="Read Our Latest Blogs " />
          <SubTitle subTitle="Choose CodeMevel as your digital partner, and let's embark on a journey to elevate your online presence and achieve your digital goals together." />
        </SubLayout>
        <ul className="gap-5 grid  dot-matrix  grid-cols-4 md:grid-cols-12 p-0 md:px-5 relative  pb-10">
          {posts?.map((post) => <BlogCard post={post} key={post.slug} />)}
        </ul>
      </>
    </Layout>
  )
}

export default Posts
