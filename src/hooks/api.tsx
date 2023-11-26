import { client } from '@/lib/client'
import { postQuery, postsQuery } from '@/lib/query'
import { IPost } from '@/types/index'

export const getPostById = async (slug: string): Promise<IPost | null> => {
  try {
    if (!slug) return null
    const postSlug = { slug }
    const post = await client.fetch<IPost>(postQuery, postSlug)
    if (post) return post
    return null
  } catch (error) {
    return null
  }
}

export const getAllPosts = async () => {
  try {
    const posts = await client.fetch<IPost[]>(postsQuery)
    if (posts) {
      return posts
    }
    return null
  } catch (error) {
    return null
  }
}
