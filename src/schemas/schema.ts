import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import category from './category'
import image from './image'
import post from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, category, blockContent, image],
}
