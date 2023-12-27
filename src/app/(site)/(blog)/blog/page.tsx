import Posts from '@/components/blog/Posts'
import { getAllPosts } from '@/hooks/api'

export default async function AllBlogs() {
  const posts = await getAllPosts()
  if (!posts) return null
  return <Posts posts={posts} />
}
export const revalidate = 10
