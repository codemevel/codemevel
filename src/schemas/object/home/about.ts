import { defineField, defineType } from 'sanity'

import { CharacterCounterField } from '@/app/(site)/blog/CustomFields'

export default defineType({
  name: 'about',
  title: 'About',
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
      rows: 3,
      description: 'This is meta description of the page.',
      validation: (Rule) => Rule.required().min(40).max(400),
      components: { input: CharacterCounterField },
    }),
    defineField({
      name: 'aboutObject',
      title: 'About Object',
      type: 'array',
      of: [
        defineField({
          name: 'aboutArray',
          type: 'object',
          title: 'About Content',
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
            defineField({
              name: 'aboutDetails',
              title: 'About Details',
              type: 'array',
              of: [
                defineField({
                  name: 'aboutContent',
                  title: 'About Content',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'About Title',
                      type: 'string',
                      description: 'The title of the submenu item',
                    }),
                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'string',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
