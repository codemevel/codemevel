import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import category from './category'
import contact from './contact'
import header from './header'
import image from './image'
import post from './post'
import youtube from './youtube'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [post.name]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, youtube, header, category, blockContent, image, contact],
}
