import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_10_8_0 = VersionInfo.of({
  version: '3.10.8:0',
  releaseNotes:
    'Upstream v3.10.8 by Melroy. ' +
    'Adds Linear/Logarithmic toggle for Block Size and Tx-per-block graphs, ' +
    'small tx truncate fix, audit stats on mining pool list page, ' +
    'Block Volume graph, theme rename (Light/Dark), 24h cache TTL fixes, ' +
    'fill-area for TX/Block charts, color-blind-safe palette, sync new pools, ' +
    'translation sync. ' +
    'BCHD compatibility: now also stubs getblockstats locally when BCHD is the ' +
    'selected node (fixes the "Method not found" stall on $updateBlocks).',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
