import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_11_0_1 = VersionInfo.of({
  version: '3.11.0:1',
  releaseNotes:
    'Silence bchd-shim log spam: getblockstats fallback is now silent ' +
    '(was emitting one warn per indexed block); getchaintips warn fires ' +
    'once instead of every orphan-blocks timer tick. No functional change.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
