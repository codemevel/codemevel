import { type SchemaTypeDefinition } from 'sanity'

import about from './about'
import blockContent from './blockContent'
import category from './category'
import contact from './contact'
import header from './header'
import image from './image'
import legal from './legal'
import post from './post'
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
  ],
}
