import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_11_9_0 = VersionInfo.of({
  version: '3.11.9:0',
  releaseNotes:
    'Update to bitcoin-cash-explorer v3.11.9. Includes: OP codes ' +
    'indentation support (up to 10 levels deep), P2S TX filter support, ' +
    'May 15 2026 upgrade notification, 3-day mempool graph option, ' +
    'GBT code fix returning correct TXID counts from mempool, and ' +
    'various documentation and UI improvements.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
