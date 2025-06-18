import { hexHash } from '../../hash'

export function computeCacheBustingSearchParam(
  prefetchHeader: string | string[] | undefined,
  segmentPrefetchHeader: string | string[] | undefined,
  stateTreeHeader: string | string[] | undefined,
  nextUrlHeader: string | string[] | undefined,
  rscHeader: string | string[] | undefined
): string | null {
  if (
    prefetchHeader === undefined &&
    segmentPrefetchHeader === undefined &&
    stateTreeHeader === undefined &&
    nextUrlHeader === undefined &&
    rscHeader === undefined
  ) {
    return null
  }
  return hexHash(
    [
      prefetchHeader || '0',
      segmentPrefetchHeader || '0',
      stateTreeHeader || '0',
      nextUrlHeader || '0',
      rscHeader || '0', // This ensures there is always a cache-busting search param for RSC requests even when no other headers are present
    ].join(',')
  )
}
