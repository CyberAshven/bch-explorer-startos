import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_11_0_6 = VersionInfo.of({
  version: '3.11.0:6',
  releaseNotes:
    'Strip raw control bytes (0x00-0x1F, 0x7F-0x9F) from the hex2ascii ' +
    'pipe output so coinbase scriptsig and OP_RETURN tooltips render ' +
    'clean ASCII (e.g. "/ckpool/mined by ... on 5tratumOS/") instead of ' +
    'box/gibberish glyphs from BIP-34 height bytes and extranonce ' +
    'binary. Mirrors the same control-char filter already used by the ' +
    "explorer's own miner-tag parser. Frontend bundle is patched per " +
    'locale at subcontainer start. No effect on backend or DB.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
