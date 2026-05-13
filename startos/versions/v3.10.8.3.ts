import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_10_8_3 = VersionInfo.of({
  version: '3.10.8:3',
  releaseNotes:
    'Add Knuth (knuth-bch) to the Node Backend dropdown. ' +
    'Knuth does not expose JSON-RPC in the current upstream release; selecting it ' +
    'will surface a clear RPC error at startup until upstream ships RPC. ' +
    'No behavior change for BCHN/BCHD/Flowee users.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
