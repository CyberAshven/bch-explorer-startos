import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_11_0_0 = VersionInfo.of({
  version: '3.11.0:0',
  releaseNotes:
    'Bump upstream Melroy bitcoin-cash-explorer to 3.11.0 ' +
    '(fix block 74637 overflow explanation, no hard-coded port in health check, ' +
    'and other upstream fixes since 3.10.8). ' +
    'BCHD compatibility: extend bchd-shim to gracefully no-op getindexinfo (returns {}) ' +
    'and getchaintips (returns []), preventing the indexer "Method not found" ' +
    'and "Cannot get fetch orphaned blocks" loops when using BCHD as the node backend.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
