import { getAllPosts } from '@/hooks/api'

import Posts from './Posts'

export default async function AllBlogs() {
  const posts = await getAllPosts()
  if (!posts) return null
  return <Posts posts={posts} />
}
export const revalidate = 10
