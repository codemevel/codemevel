import { visionTool } from '@sanity/vision'
import { defineConfig, isDev } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import { dataset, projectId, studioName } from './src/lib/env'
import { schema } from './src/schemas/schema'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  basePath: '/studio',
  name: studioName,
  projectId,
  dataset,
  schema,
  plugins: [deskTool(), unsplashImageAsset(), ...(isDev ? devOnlyPlugins : [])],
})
