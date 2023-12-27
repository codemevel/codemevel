/* eslint-disable sonarjs/cognitive-complexity */
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import Post from '@/components/blog/Post'
import { getClient } from '@/lib/client'
import { readToken } from '@/lib/env'
import { postQuery, postQueryDraft } from '@/queries/postquery'

import { PostPreview } from '../PostPreview'
import PreviewProvider from '../PreviewProvider'

const PagesSlugRoute = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const isDraftMode = draftMode().isEnabled
  const token = isDraftMode ? { token: readToken as string } : undefined
  const client = getClient(token)
  const commonQueryOptions = { slug }
  const fetchPost = async () => {
    const query = isDraftMode ? postQuery : postQueryDraft
    return client.fetch(query, commonQueryOptions)
  }
  const [post] = await Promise.all([fetchPost()])
  if (!post && !token) {
    notFound()
  }
  return isDraftMode ? (
    <PreviewProvider token={token?.token as string}>
      <PostPreview post={post} />
    </PreviewProvider>
  ) : (
    <Post post={post} />
  )
}

export default PagesSlugRoute
