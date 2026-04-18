import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_8_8_0 = VersionInfo.of({
  version: '3.8.8:0',
  releaseNotes:
    'Upstream v3.8.8 by Melroy: adds a dedicated "Difficulty Adjustment Deviation" graph under Mining. ' +
    'Explorer frontend/backend images updated to 3.8.8.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
