import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_10_1_0 = VersionInfo.of({
  version: '3.10.1:0',
  releaseNotes:
    'Upstream v3.10.1 by Melroy. ' +
    'Adds Block Time Variation, Transactions Per Block, and UTXO Count graphs. ' +
    'Includes performance improvements, caching on mining endpoints, and translation sync. ' +
    'Explorer frontend/backend images updated to 3.10.1.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
