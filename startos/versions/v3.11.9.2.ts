import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_11_9_2 = VersionInfo.of({
  version: '3.11.9:2',
  releaseNotes:
    'Fix mining pool logos: proxy /resources/mining-pools/ to bchexplorer.cash ' +
    'so pool dashboard logos render correctly.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
