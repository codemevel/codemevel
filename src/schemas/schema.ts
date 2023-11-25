import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import category from './category'
import post from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, category, blockContent],
}
