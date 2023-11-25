import { getPostById } from '@/hooks/api'

import Post from './Post'

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
