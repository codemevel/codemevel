import {
  MenuIcon,
  OlistIcon,
  ThListIcon,
  WarningOutlineIcon,
} from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'This will be your website name.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      description: 'Enter Description of your website',
    }),
    defineField({
      title: 'Important Notice for Menu Configuration!',
      description:
        'Make sure you add correct route path for the provided page. Extra space or case senitive can affect different route.',
      name: 'myCustomNote',
      type: 'note',
      options: {
        icon: WarningOutlineIcon,
        tone: 'caution',
      },
    }),
    defineField({
      name: 'canonical',
      title: 'Canonical URL',
      type: 'string',
      description: 'The main site url. Used to create canonical url',
    }),
    defineField({
      title: 'Main logo',
      description: 'Upload your main logo here. SVG preferred. ',
      name: 'logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    }),
    defineField({
      name: 'menuItems',
      title: 'Header Menu',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'menuItem',
          icon: ThListIcon,
          fields: [
            defineField({
              name: 'title',
              title: 'Menu Title',
              type: 'string',
              description: 'The title of the menu item',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
              description:
                'The URL or link associated with the menu item after the domain, For ex. /about, /contact etc.',
            }),
            defineField({
              name: 'subMenuItems',
              title: 'Submenu Items',
              type: 'array',
              of: [
                defineField({
                  type: 'object',
                  name: 'submenuItem',
                  icon: OlistIcon,
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Item Title',
                      type: 'string',
                      description: 'The title of the submenu item',
                    }),
                    defineField({
                      name: 'link',
                      title: 'Link',
                      type: 'string',
                      description:
                        'The URL or link associated with the submenu item after the domain, For ex. /privacy, /licence etc.',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'copyright',
      type: 'string',
      title: 'Copyright Name',
      description: 'Enter company name to appear in footer after ©',
    }),
    defineField({
      name: 'footer',
      title: 'Footer Items',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'footerItem',
          icon: ThListIcon,
          fields: [
            defineField({
              name: 'title',
              title: 'Item type Title',
              type: 'string',
              description: 'The title of the footer item',
            }),
            defineField({
              name: 'subfooterItems',
              title: 'Subfooter Items',
              type: 'array',
              of: [
                defineField({
                  type: 'object',
                  name: 'subfooterItem',
                  icon: OlistIcon,
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Item Title',
                      type: 'string',
                      description: 'The title of the subfooter item',
                    }),
                    defineField({
                      name: 'link',
                      title: 'Link',
                      type: 'string',
                      description:
                        'The URL or link associated with the subfooter item after the domain, For ex. /privacy, /licence etc.',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Support Email',
      validation: (Rule) =>
        Rule.regex(
          // eslint-disable-next-line security/detect-unsafe-regex
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: 'email', // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          }
        ),
    }),

    defineField({
      name: 'phone',
      type: 'string',
      title: 'Support Phone',
    }),
    defineField({
      name: 'social',
      type: 'array',
      title: 'Social Links',
      description: 'Enter your Social Media URLs',
      validation: (Rule) => Rule.unique(),
      of: [
        {
          type: 'object',
          fields: [
            {
              type: 'string',
              name: 'media',
              title: 'Choose Social Media',
              options: {
                list: [
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Linkedin', value: 'linkedin' },
                  { title: 'Youtube', value: 'youtube' },
                ],
              },
            },
            {
              type: 'url',
              name: 'url',
              title: 'Full Profile URL',
            },
          ],
          preview: {
            select: {
              title: 'media',
              subtitle: 'url',
            },
          },
        },
      ],
    }),
  ],
})
