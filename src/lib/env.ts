function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-11-23'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)
export const studioName = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_NAME,
  'Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_NAME'
)
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const readToken = process.env.SANITY_API_READ_TOKEN as string
export const writeToken = process.env.SANITY_API_WRITE_TOKEN as string

export const previewSecretId: `${string}.${string}` = 'preview.secret'

export const useCdn = false
