import type { PortableTextProps } from '@portabletext/react'

export interface IPost {
  title: string
  slug: string
  image: {
    alt: string
    caption: string
    url: string
  }
  description: string
  publishedAt: string
  category: string
  _createdAt: string
  estReadingTime?: string
  body?: PortableTextProps
  relatedPost: IPost[]
}
export interface IContact {
  email: string
  subject: string
  message: string
  _type: string
}

export interface IHeaderItem {
  title: string
  link: string
}
export interface IHeaderMenu {
  menu: IHeaderItem[]
}
