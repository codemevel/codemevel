import { client, writeclient } from '@/lib/client'
import { contactQuery, postQuery, postsQuery } from '@/lib/query'
import { IContact, IPost } from '@/types/index'

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
export const getAllContacts = async () => {
  try {
    const posts = await client.fetch<IContact[]>(contactQuery)
    if (posts) {
      return posts
    }
    return null
  } catch (error) {
    return null
  }
}

export const createContact = async (payload: IContact) => {
  try {
    return await writeclient.create<IContact>(payload)
  } catch (error) {
    return null
  }
}
