export const apiVersion =
  process.env.SANITY_STUDIO_SANITY_API_VERSION || '2025-01-26'

export const dataset = assertValue(
  process.env.SANITY_STUDIO_SANITY_DATASET || 'production',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.SANITY_STUDIO_SANITY_PROJECT_ID || 'dsydzl5w',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
