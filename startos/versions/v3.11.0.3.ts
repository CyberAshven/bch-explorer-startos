import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_11_0_3 = VersionInfo.of({
  version: '3.11.0:3',
  releaseNotes:
    'Fix address lookups with BCHD backend (500 Internal Server Error: ' +
    'Failed to get address). BCHD\'s validateaddress RPC omits scriptPubKey, ' +
    'which the Electrum scripthash path needs. The bchd-shim now installs a ' +
    'minimal cashaddr (P2PKH/P2SH/P2SH32) and legacy base58 decoder and ' +
    'wraps validateAddress to enrich the response. No effect on BCHN.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
