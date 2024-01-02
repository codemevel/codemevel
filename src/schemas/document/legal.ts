import { defineField, defineType } from 'sanity'

import { CharacterCounterField } from '@/app/(site)/blog/CustomFields'

export default defineType({
  name: 'legal',
  title: 'Legal',
  type: 'document',
  fields: [
    defineField({
      name: 'terms',
      title: 'Terms',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description:
            'The Title is used in terms, and also for search results by title',
          validation: (Rule) => Rule.min(15).max(96).required(),
          components: { input: CharacterCounterField },
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          description: 'This is the description of the terms.',
          validation: (Rule) => Rule.required().min(40).max(400),
          components: { input: CharacterCounterField },
        }),
        defineField({
          name: 'termsDetails',
          title: 'Terms Details',
          type: 'array',
          of: [
            defineField({
              name: 'details',
              title: 'Terms Details',
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Item Title',
                  type: 'string',
                  description: 'The title of the subterms item',
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
    defineField({
      name: 'privacy',
      title: 'Privacy',
      type: 'object',
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
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          description: 'This is meta description of the page.',
          validation: (Rule) => Rule.required().min(40).max(400),
          components: { input: CharacterCounterField },
        }),
        defineField({
          name: 'privacyDetails',
          title: 'Privacy Details',
          type: 'array',
          of: [
            defineField({
              name: 'details',
              title: 'Privacy Details',
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Item Title',
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
    defineField({
      name: 'services',
      title: 'Services',
      type: 'object',
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
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          description: 'This is meta description of the page.',
          validation: (Rule) => Rule.required().min(40).max(400),
          components: { input: CharacterCounterField },
        }),
        defineField({
          name: 'serviceDetails',
          title: 'Services Details',
          type: 'array',
          of: [
            defineField({
              name: 'details',
              title: 'Service Details',
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Service Title',
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
})
