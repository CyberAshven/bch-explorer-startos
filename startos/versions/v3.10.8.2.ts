import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_10_8_2 = VersionInfo.of({
  version: '3.10.8:2',
  releaseNotes:
    'Adds a Select Network action: choose between Mainnet, Testnet4, Chipnet, ' +
    'and Scalenet. Mainnet remains the default. The selected network is ' +
    'applied to both the backend (EXPLORER_NETWORK) and the frontend ' +
    '(ROOT_NETWORK and the per-network enabled flags). ' +
    'Note: BCHN supports all four networks; BCHD and Flowee currently support ' +
    'Mainnet only. Make sure your chosen Node Backend and Fulcrum BCH are ' +
    'configured for the same network.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
