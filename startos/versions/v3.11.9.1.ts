import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_11_9_1 = VersionInfo.of({
  version: '3.11.9:1',
  releaseNotes:
    'Fix cache directory permissions (EACCES on tmp-cache.json). ' +
    'Enable block audit / Explorer Goggles.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
