import { groq } from 'next-sanity'

import { client } from '@/lib/client'
import { IPost } from '@/types/index' // Define SanityPost type as per your schema

export const getPostById = async (slug: string): Promise<IPost | null> => {
  try {
    if (!slug) return null

    const postSlug = { slug }
    const query = groq`*[_type == 'post' && $slug == slug.current][0]{
      title,
      description,
      body,
      'slug':slug.current,
      publishedAt,
      _createdAt,
      'image' :image {
        alt,
        caption,
       'url':asset->url
      },
      "category":category ->title,
      _createdAt,
      "estReadingTime": round(length(pt::text(body)) / 5 / 180 ),
      "relatedPost":relatedPost[]-> {
        title,
        description,
        'slug':slug.current,
        publishedAt,
        _createdAt,
        'image' :image {
            alt,
            caption,
           'url':asset->url
        },
        "category":category ->title,
        _createdAt,
        "estReadingTime": round(length(pt::text(body)) / 5 / 180 ),
      },
    }`

    const post = await client.fetch<IPost>(query, postSlug)

    if (post) {
      return post
    }

    return null
  } catch (error) {
    return null
  }
}

export const getAllPosts = async () => {
  try {
    const query = groq`*[_type == 'post']{
      title,
      description,
      'slug':slug.current,
      publishedAt,
      'image' :image {
        alt,
        caption,
       'url':asset->url
      },
      'category': category->{title}
    }`

    const posts = await client.fetch<IPost[]>(query)

    if (posts) {
      return posts
    }
    return null
  } catch (error) {
    return null
  }
}
