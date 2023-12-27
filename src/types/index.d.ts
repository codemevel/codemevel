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
export interface IHeader {
  title: string
  link: string
  subMenuItems: string
}
export interface IFooter {
  title: string
  description: string
  copyright: string
  email: string
  phone: number
  copyright: string
  footer: {
    title: string
    subfooterItems: {
      link: string
      title: string
    }
  }
}
export interface ITermItems {
  title: string
  description: string
}
export interface ITerm {
  title: string
  description: string
  termsDetails: ITermItems[]
}
export interface IPrivacyItems {
  title: string
  description: string
}
export interface IPrivacy {
  title: string
  description: string
  privacyDetails: IPrivacyItems[]
}
export interface IServiceItems {
  title: string
  description: string
}
export interface IService {
  title: string
  description: string
  serviceDetails: IServiceItems[]
}
export interface IFaq {
  title: string
  description: string
  faq: {
    index: number
    title: string
    description: string
  }
}
export interface IAbout {
  title: string
  description: string
  mission: {
    title: string
    description: string
  }
  vision: {
    title: string
    description: string
  }
  values: {
    title: string
    description: string
  }
}
