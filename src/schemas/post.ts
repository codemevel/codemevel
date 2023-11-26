import { getExtension, getImageDimensions } from '@sanity/asset-utils'
import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

import { CharacterCounterField } from '@/app/(site)/blog/CustomFields'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  icon: BookIcon,
  initialValue: () => ({
    isPost: true,
    publishedAt: new Date().toISOString(),
  }),
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'The Title is used in Page feeds, and also for search results by title',
      validation: (Rule) => Rule.min(15).max(96).required(),
      components: { input: CharacterCounterField },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Post will not appears until slug generate.',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'This is meta description of the page.',
      validation: (Rule) => Rule.required().min(40).max(220),
      components: { input: CharacterCounterField },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'This is the image use in shareable links preview.',
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
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          validation: (Rule) =>
            Rule.error('Alternative Text can not be empty!').required(),
        }),
      ],
      options: {
        hotspot: true,
      },
      validation: (rule) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        rule.required().custom((value: any) => {
          if (!value?.image?.asset?._ref) {
            return true
          }
          const filetype = getExtension(value.image.asset._ref)
          if (filetype !== 'jpg' && filetype !== 'png') {
            return 'Image must be a JPG or PNG'
          }
          const { width, height } = getImageDimensions(value.image.asset._ref)
          if (width < 1200 || height < 630) {
            return 'Image must be at least 1200x630 pixels'
          }
          return true
        }),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    // defineField({
    //   name: 'tag',
    //   title: 'Tag',
    //   type: 'array',
    //   of: [{ type: 'reference', to: { type: 'tag' } }],
    // }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      components: { input: CharacterCounterField },
    }),
    defineField({
      name: 'relatedPost',
      title: 'Related Post',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'post' } }],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      description: 'description.name',
      media: 'image',
    },
    prepare(selection) {
      const { description } = selection
      return { ...selection, subtitle: description }
    },
  },
})
