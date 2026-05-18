import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_11_9_5 = VersionInfo.of({
  version: '3.11.9:5',
  releaseNotes:
    'Fix mempool cache always empty: BCHD does not implement getMempoolEntry, ' +
    'causing every transaction fetch to fail and the cache to stay empty after startup. ' +
    'Added getMempoolEntry shim that falls back to a 30s-TTL cached getRawMemPool(verbose) ' +
    'lookup. Fixes Recent Transactions panel (empty), B/s chart (0 B/s), and ' +
    'mempool fee display.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
