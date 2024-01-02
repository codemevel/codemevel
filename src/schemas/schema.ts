import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import category from './document/category'
import contact from './document/contact'
import header from './document/header'
import home from './document/home'
import legal from './document/legal'
import post from './document/post'
import image from './image'
import about from './object/home/about'
import benefit from './object/home/benefit'
import earn from './object/home/earn'
import faq from './object/home/faq'
import hero from './object/home/hero'
import marketing from './object/home/marketing'
import owner from './object/home/owner'
import process from './object/home/process'
import youtube from './youtube'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [post.name]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    youtube,
    header,
    category,
    blockContent,
    image,
    contact,
    legal,
    about,
    hero,
    faq,
    home,
    process,
    owner,
    marketing,
    earn,
    benefit,
  ],
}
