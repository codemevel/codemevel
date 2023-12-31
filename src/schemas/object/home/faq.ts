import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'Faq',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'faqs',
      title: 'Add FAQ',
      type: 'array',
      of: [
        defineField({
          name: 'faquestions',
          title: 'FAQuestions',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
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
})
