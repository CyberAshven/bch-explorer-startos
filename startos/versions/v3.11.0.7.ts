import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_11_0_7 = VersionInfo.of({
  version: '3.11.0:7',
  releaseNotes:
    'Fix the hex2ascii frontend shim: 3.11.0:6 invoked node inside the ' +
    'frontend image, which has no node binary, so the patch silently ' +
    'skipped and coinbase tooltips still rendered gibberish. Reimplement ' +
    'using sh + perl (both present in the nginx image) to strip raw ' +
    'control bytes (0x00-0x1F, 0x7F-0x9F) from every per-locale chunk so ' +
    'coinbase scriptsig and OP_RETURN hovers show clean ASCII like ' +
    '"/ckpool/mined by ... on 5tratumOS/". No effect on backend or DB.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
