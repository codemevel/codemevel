import { client, writeclient } from '@/lib/client'
import {
  contactQuery,
  footerQuery,
  headerQuery,
  postQuery,
  postsQuery,
  privacyQuery,
  serviceQuery,
  termsQuery,
} from '@/lib/query'
import {
  IContact,
  IFooter,
  IHeader,
  IPost,
  IPrivacy,
  // IService,
  ITerm,
} from '@/types/index'

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

export const getHeader = async () => {
  try {
    const posts = await client.fetch<IHeader[]>(headerQuery)
    if (posts) {
      return posts
    }
    return null
  } catch (error) {
    return null
  }
}

export const getFooter = async () => {
  try {
    const posts = await client.fetch<IFooter[]>(footerQuery)
    if (posts) {
      return posts
    }
    return null
  } catch (error) {
    return null
  }
}
export const getTerm = async () => {
  try {
    const { terms }: { terms: ITerm } = await client.fetch(termsQuery)
    if (terms) {
      return terms
    }
    return null
  } catch (error) {
    return null
  }
}
export const getPrivacy = async () => {
  try {
    const { privacy }: { privacy: IPrivacy } = await client.fetch(privacyQuery)
    if (privacy) {
      return privacy
    }
    return null
  } catch (error) {
    return null
  }
}
export const getService = async () => {
  try {
    // const { services }: { services: IService } =
    //   await client.fetch(serviceQuery)
    const services = await client.fetch(serviceQuery)

    if (services) {
      console.log(services)
      return services
    }
    return null
  } catch (error) {
    return null
  }
}
