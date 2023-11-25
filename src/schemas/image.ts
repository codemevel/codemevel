import { ImageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'custormImage',
  title: 'Image',
  type: 'image',
  icon: ImageIcon,
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Image caption',
      description: 'Appears below image.',
      validation: (Rule) =>
        Rule.error('Caption Text can not be empty!').required(),
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alternative Text',
      description: 'Important for SEO and accessibility.',
      validation: (Rule) =>
        Rule.error('Alternative Text can not be empty!').required(),
    }),
  ],

  preview: {
    select: {
      title: 'caption',
      media: 'custormImage',
      subtitle: 'alt',
    },
  },
})
