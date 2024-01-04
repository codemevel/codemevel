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
export interface IFaqItems {
  title: string
  description: string
}
export interface IFaq {
  title: string
  description: string
  faqDetails: IFaqItems[]
}
export interface IHero {
  title: string
  description: string
}
export interface IAboutItems {
  title: string
  description: string
}
export interface IAboutDetails {
  title: string
  description: string
  aboutDetails: IAboutItems[]
}

export interface IAbout {
  title: string
  description: string
  aboutObject: IAboutDetails[]
}
export interface IBenefitItems {
  title: string
  description: string
}

export interface IBenefit {
  title: string
  description: string
  aboutDetail: IBenefitItems[]
}
export interface IEarnItems {
  title: string
  description: string
}

export interface IEarn {
  title: string
  description: string
  aboutDetail: IEarnItems[]
}
export interface IMarketingItems {
  title: string
  description: string
}
export interface IMarketing {
  title: string
  description: string
  marketingDetails: IMarketingItems[]
}
export interface IOwnerItems {
  title: string
  description: string
}
export interface IOwner {
  title: string
  description: string
  marketingDetails: IOwnerItems[]
}
export interface IProcessItems {
  title: string
  description: string
}
export interface IProcess {
  title: string
  description: string
  marketingDetails: IProcessItems[]
}
export interface IHome {
  heroDocument: IHero
  aboutDocument: IAbout
  marketingDocument: IMarketing
  ownerDocument: IOwner
  processDocument: IProcess
  earnDocument: IEarn
  faqDocument: IFaq
  benefitDocument: IBenefit
}
