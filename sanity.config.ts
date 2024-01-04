import { codeInput } from '@sanity/code-input'
import { dashboardTool, projectUsersWidget } from '@sanity/dashboard'
import { table } from '@sanity/table'
import { visionTool } from '@sanity/vision'
import { defineConfig, isDev } from 'sanity'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { documentListWidget } from 'sanity-plugin-dashboard-widget-document-list'
import { draftReviewPluginV3 } from 'sanity-plugin-draft-review-v3'
import { media } from 'sanity-plugin-media'
import { noteField } from 'sanity-plugin-note-field'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { deskTool } from 'sanity/desk'

import StudioLogo from '@/components/layout/StudioLogo'
import ContactTool from '@/components/plugin/ContactTool'
import { pageStructure, singletonPlugin } from '@/components/plugin/settings'
import { previewDocumentNode } from '@/components/PreviewPane'
import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
  studioName,
} from '@/lib/env'
import header from '@/schemas/document/header'
import legal from '@/schemas/document/legal'

import home from '@/schemas/document/home'
import theme from './sanity.theme'
import { schema } from './src/schemas/schema'

const devOnlyPlugins = [
  visionTool({
    defaultApiVersion: apiVersion,
    defaultDataset: dataset,
  }),
  draftReviewPluginV3({}),
]

export default defineConfig({
  basePath: '/studio',
  baseUrl: 'https://codemevel.com',
  name: studioName,
  projectId,
  dataset,
  schema,
  tools: [ContactTool()],
  document: {
    unstable_comments: {
      enabled: true,
    },
  },
  studio: {
    components: {
      logo: StudioLogo,
    },
  },
  theme,
  plugins: [
    deskTool({
      structure: pageStructure([header, home, legal]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({
        apiVersion,
        previewSecretId,
      }),
    }),
    noteField(),
    dashboardTool({
      widgets: [
        documentListWidget({
          title: 'Recent 10 posts',
          query: '*[_type == "post"]',
          layout: { width: 'large' },
          limit: 10, // createButtonText: 'Create new blog post'
        }),
        documentListWidget({
          title: 'Top 10 Category',
          query: '*[_type == "category"]',
          limit: 10, // createButtonText: 'Create new blog post'
          layout: { width: 'small' },
        }),
        projectUsersWidget(),
      ],
    }),
    table(),
    media(),
    codeInput(),
    singletonPlugin([header.name, home.name, legal.name]),
    unsplashImageAsset(),
    ...(isDev ? devOnlyPlugins : []),
  ],
})
