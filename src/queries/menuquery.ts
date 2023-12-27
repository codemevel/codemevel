import { groq } from 'next-sanity'

export const headerQuery = groq`
  *[_type == "menu" && !(_id in path("drafts.**"))][0]{
    "menu":menuItems[]{
      title,
      link,
    }
  }
`
export const footerQuery = groq`*[_type == "menu" && !(_id in path("drafts.**"))][0]{
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
}
`
