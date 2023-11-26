import { BillIcon, PlayIcon } from '@sanity/icons'
import { defineArrayMember, defineType } from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'block',
      type: 'block',
      name: 'block',
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
        { title: 'Hidden', value: 'blockComment' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
          { title: 'Highlight', value: 'highlight', icon: () => 'H' },
        ],
        annotations: [
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            icon: BillIcon,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [{ type: 'post' }],
              },
            ],
          },
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (rule) =>
                  rule.uri({
                    allowRelative: false,
                    scheme: ['https', 'http', 'mailto', 'tel'],
                  }),
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'code',
      name: 'code',
      title: 'Code Block',
      options: {
        withFilename: true,
      },
    }),
    defineArrayMember({
      icon: PlayIcon,
      name: 'youtube',
      title: 'Youtube',
      type: 'youtube',
    }),
    defineArrayMember({
      name: 'table',
      title: 'Table',
      description:
        'The first row will be treated as the header. If you want to skip, just leave the first row empty.',
      type: 'table',
    }),
    defineArrayMember({
      name: 'coverImage',
      title: 'Image',
      type: 'custormImage',
    }),
  ],
})
