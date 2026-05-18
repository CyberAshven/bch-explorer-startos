import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_11_9_4 = VersionInfo.of({
  version: '3.11.9:4',
  releaseNotes:
    'Fix Incoming Transactions (B/s) chart showing 0: statistics.js zero-fee filter ' +
    'was never applied (sed -i fails on overlayfs with "Directory not empty") — ' +
    'moved to node p() function. Added feePerSize to BCHD getRawMemPool shim so ' +
    'zero-fee transactions pass the != null filter. ' +
    'Fix Explorer Goggles empty dot-matrix: BLOCK_AUDIT_START_HEIGHT set to 951500 ' +
    'so chart shows the window where audit data actually exists.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
