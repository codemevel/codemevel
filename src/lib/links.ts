export function resolveHref(
  documentType?: string,
  slug?: string
): string | undefined {
  switch (documentType) {
    case 'home':
      return '/'
    case 'post':
      return slug ? `/preview/post/${slug}` : undefined
    default:
      // eslint-disable-next-line no-console
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}
