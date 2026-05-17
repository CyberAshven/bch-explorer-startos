import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_12_0_0 = VersionInfo.of({
  version: '3.12.0:0',
  releaseNotes:
    'Fix cache directory permissions (EACCES on ./cache/tmp-cache.json). ' +
    'Enable block audit / Explorer Goggles (AUDIT=true). ' +
    'Docker images remain at upstream 3.11.9 (no new upstream release).',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
