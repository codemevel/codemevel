import Post from '@/components/blog/Post'
import { getPostById } from '@/hooks/api'

export default async function SinglePost({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params

  const post = await getPostById(slug)
  if (!post) return null
  return <Post post={post} />
}
export const revalidate = 10
