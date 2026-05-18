import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_11_9_3 = VersionInfo.of({
  version: '3.11.9:3',
  releaseNotes:
    'Fix Incoming Transactions chart (statistics filter excluded zero-fee BCH txs) ' +
    'and enable Explorer Goggles block audit (EXPLORER_AUDIT + EXPLORER_GOGGLES_INDEXING).',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
