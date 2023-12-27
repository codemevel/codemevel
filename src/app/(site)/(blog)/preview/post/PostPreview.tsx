'use client'

import { useParams } from 'next/navigation'
import { useLiveQuery } from 'next-sanity/preview'

import Post from '@/components/blog/Post'
import { postQuery } from '@/queries/postquery'
import { IPost } from '@/types'

export function PostPreview({ post: initialData }: { post: IPost }) {
  const params = useParams()
  // const [post] = useLiveQuery<IPost | null>(initialData, postBySlugQuery)
  const [post] = useLiveQuery(initialData, postQuery, params)
  if (!post) {
    return (
      <div>Please start editing your Post document to see the preview!</div>
    )
  }
  return <Post post={post} />
}
