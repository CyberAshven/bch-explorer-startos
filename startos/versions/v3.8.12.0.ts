import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_8_12_0 = VersionInfo.of({
  version: '3.8.12:0',
  releaseNotes:
    'Upstream v3.8.12 by Melroy: introduces a logarithmic scale option on the price chart y-axis and syncs translations. ' +
    'Explorer frontend/backend images updated to 3.8.12.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
