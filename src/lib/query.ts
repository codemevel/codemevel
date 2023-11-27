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
