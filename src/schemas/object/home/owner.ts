import { defineField, defineType } from 'sanity'

import { CharacterCounterField } from '@/app/(site)/blog/CustomFields'

export default defineType({
  name: 'owner',
  title: 'Owner',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'The Title is used in Page feeds, and also for search results by title',
      validation: (Rule) => Rule.min(10).max(96).required(),
      components: { input: CharacterCounterField },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'ownerDetail',
      title: 'Owner Detail',
      type: 'array',
      of: [
        defineField({
          name: 'ownerArray',
          type: 'object',
          title: 'Owner Content',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description:
                'The Title is used in Page feeds, and also for search results by title',
              validation: (Rule) => Rule.min(10).max(96).required(),
              components: { input: CharacterCounterField },
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              description: 'This is meta description of the page.',
              validation: (Rule) => Rule.required().min(40).max(400),
              components: { input: CharacterCounterField },
            }),
          ],
        }),
      ],
    }),
  ],
})
