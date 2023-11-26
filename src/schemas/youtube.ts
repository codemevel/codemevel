import { DocumentVideoIcon } from '@sanity/icons'
import { ComponentType } from 'react'
import { defineField, defineType, PreviewLayoutKey, PreviewProps } from 'sanity'

import { YouTubePreview } from '@/components/plugin/YouTubePreview'

export default defineType({
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  icon: DocumentVideoIcon,
  fields: [
    defineField({
      name: 'height',
      type: 'number',
      description:
        'Enter Required Height for this Embed. Leave it blank for 16:9 ratio.',
    }),
    defineField({
      name: 'url',
      type: 'url',
      description:
        'Enter the URL to Embed \r\n(eg: https://youtube.com/embed/xxx ',
    }),
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Youtube Video caption',
      description: 'Appears below video.',
      validation: (Rule) =>
        Rule.error('Caption Text can not be empty!').required(),
    }),
  ],

  preview: {
    select: {
      title: 'caption',
      url: 'url',
      height: 'height',
    },
  },
  components: {
    preview: YouTubePreview as ComponentType<PreviewProps<PreviewLayoutKey>>,
  },
})
