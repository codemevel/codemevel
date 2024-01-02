import { groq } from 'next-sanity'

export const postQuery = groq`*[_type == 'post' && $slug == slug.current][0]{
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
export const postQueryDraft = groq`*[_type == 'post' && $slug == slug.current && !(_id in path("drafts.**"))][0]{
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
export const postsQuery = groq`*[_type == 'post']{
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
export const contactQuery = groq`*[_type == 'contact' ]{
    email,
    subject,
    message,
}`
export const headerQuery = groq`*[_type == "menu" ][0]{
  menuItems[]{
    title,
    link,
    subMenuItems,
  }}
`

export const footerQuery = groq`*[_type == "menu" ][0]{
    title,
    description,
    copyright,
    email,
    phone,
    copyright,
    footer[]{
      title,
      subfooterItems[]{
      link,
      title
}
}
}`
export const termsQuery = groq`*[_type == 'legal'][0]{
  terms,
}`
export const privacyQuery = groq`*[_type == 'legal'][0]{
  privacy,
}`

export const serviceQuery = groq`*[_type == 'legal'][0]{
  services,
}`
export const homeQuery = groq`*[_type == 'home']{
  aboutDocument,
  heroDocument,
  faqDocument,
  ownerDocument,
  marketingDocument,
  processDocument,
  earnDocument,
}`
export const aboutQuery = groq`*[_type == 'home'][0]{
 aboutDocument,
}`
