import { groq } from 'next-sanity'

export const contactQuery = groq`*[_type == 'contact' ]{
    email,
    subject,
    message,
}`
