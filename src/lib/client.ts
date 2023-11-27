import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, writeToken } from '@/lib/env'

export function getClient(preview?: { token: string }) {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('Missing preview token')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
    })
  }
  return client
}

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
export const writeclient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: writeToken,
})
