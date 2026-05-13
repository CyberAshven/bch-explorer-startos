import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_11_0_8 = VersionInfo.of({
  version: '3.11.0:8',
  releaseNotes:
    'Fix the hex2ascii frontend shim (third try). 3.11.0:7 used perl, ' +
    'but the Alpine-based frontend image only ships sh, sed and awk. ' +
    'GNU sed mangles the JS regex \\x00 notation into literal NUL ' +
    'bytes, so the patch now uses busybox awk reading needle and ' +
    'replacement from environment variables (no escape interpretation). ' +
    'Strips raw control bytes (0x00-0x1F, 0x7F-0x9F) from every ' +
    'per-locale chunk so coinbase scriptsig and OP_RETURN tooltips ' +
    'render clean ASCII like "/ckpool/mined by ... on 5tratumOS/" ' +
    'instead of box/gibberish glyphs. No effect on backend or DB.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
