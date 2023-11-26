import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { SanityClient } from 'sanity'

import { getSecret } from '@/components/ProductionUrl/utils'
import { getClient } from '@/lib/client'
import { previewSecretId, readToken } from '@/lib/env'
import { resolveHref } from '@/lib/links'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')
  const documentType = searchParams.get('documentType')

  if (!secret) {
    return new Response('Invalid secret', { status: 401 })
  }

  const token = readToken
  if (!token) {
    throw new Error(
      'A secret is provided but there is no `SANITY_API_READ_TOKEN` environment variable setup.'
    )
  }
  const client = getClient().withConfig({ useCdn: false, token })
  const generatedSecret = await getSecret(
    client as SanityClient,
    previewSecretId
  )
  // eslint-disable-next-line security/detect-possible-timing-attacks
  if (generatedSecret !== secret) {
    return new Response('Invalid secret', { status: 401 })
  }

  const href = resolveHref(documentType as string, slug as string)

  if (!href) {
    return new Response(
      'Unable to resolve preview URL based on the current document type and slug',
      { status: 400 }
    )
  }

  draftMode().enable()

  redirect(href)
}
