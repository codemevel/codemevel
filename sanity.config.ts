import { visionTool } from '@sanity/vision'
import { defineConfig, isDev } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import StudioLogo from '@/components/layout/StudioLogo'

import theme from './sanity.theme'
import { apiVersion, dataset, projectId, studioName } from './src/lib/env'
import { schema } from './src/schemas/schema'

const devOnlyPlugins = [
  visionTool({
    defaultApiVersion: apiVersion,
    defaultDataset: dataset,
  }),
]

export default defineConfig({
  basePath: '/studio',
  baseUrl: 'https://codemevel.com',
  name: studioName,
  projectId,
  dataset,
  schema,
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
  plugins: [...(isDev ? devOnlyPlugins : []), deskTool(), unsplashImageAsset()],
})
