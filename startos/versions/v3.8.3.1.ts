import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_8_3_1 = VersionInfo.of({
  version: '3.8.3:1',
  releaseNotes:
    'Updated dependency references to latest Bitcoin Cash Node package.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
