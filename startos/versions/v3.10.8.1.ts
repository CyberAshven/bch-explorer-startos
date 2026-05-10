import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_10_8_1 = VersionInfo.of({
  version: '3.10.8:1',
  releaseNotes:
    'BCHD compatibility hotfix: derive tx_count from tx/rawtx array length when ' +
    'BCHD getblock omits the nTx field. Prevents "Column \'tx_count\' cannot be ' +
    'null" indexer crash loop when BCHD is the selected node.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
