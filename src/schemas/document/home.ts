import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'heroDocument',
      type: 'hero',
      title: 'Hero Section',
    }),
    defineField({
      name: 'aboutDocument',
      type: 'about',
      title: 'About Section',
    }),
    defineField({
      name: 'faqDocument',
      type: 'faq',
      title: 'Faq Section',
    }),
    defineField({
      name: 'marketingDocument',
      type: 'marketing',
      title: 'Marketing Section',
    }),
    defineField({
      name: 'ownerDocument',
      type: 'owner',
      title: 'Owner Section',
    }),
    defineField({
      name: 'processDocument',
      type: 'process',
      title: 'Process Section',
    }),
    defineField({
      name: 'earnDocument',
      type: 'earn',
      title: 'Earn Section',
    }),
  ],
})
