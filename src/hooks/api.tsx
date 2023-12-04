import { client, writeclient } from '@/lib/client'
import { contactQuery } from '@/queries/contactquery'
import { headerQuery } from '@/queries/menuquery'
import { postQuery, postsQuery } from '@/queries/postquery'
import { IContact, IHeaderMenu, IPost } from '@/types/index'

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

export const getHeaderMenu = async () => {
  try {
    const { menu } = await client.fetch<IHeaderMenu>(headerQuery)
    if (menu) {
      return menu
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
