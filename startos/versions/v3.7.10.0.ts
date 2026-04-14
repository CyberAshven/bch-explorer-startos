import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_7_10_0 = VersionInfo.of({
  version: '3.7.10:0',
  releaseNotes:
    'Upstream v3.7.10 by Melroy fixes critical frontend bugs: duplicate locale resource directories eliminated ' +
    '(image shrinks from 1GB to 120MB), entrypoint port variable typo fixed, and config.template.js path ' +
    'resolution corrected. Custom entrypoint workarounds removed — now uses upstream entrypoint directly.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
