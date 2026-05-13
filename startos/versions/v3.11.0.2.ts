import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_11_0_2 = VersionInfo.of({
  version: '3.11.0:2',
  releaseNotes:
    'Document outbound clearnet requirement in install alert. ' +
    'BCH Explorer needs outbound clearnet egress to fetch mining-pool data ' +
    '(pools-v2.json from gitlab.melroy.org) and BCH/USD price history (Bitfinex). ' +
    'Without it the pool dashboard logos and the price chart on the front page ' +
    'appear blank. After install, set Outbound Proxy to the clearnet gateway ' +
    '(StartOS UI → Services → BCH Explorer → Outbound Proxy).',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
