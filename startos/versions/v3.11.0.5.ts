import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_11_0_5 = VersionInfo.of({
  version: '3.11.0:5',
  releaseNotes:
    'Fix empty Minimum fee, Unconfirmed, Memory Usage widgets and ' +
    'Incoming Transactions chart on BCHD backend. Upstream Melroy ' +
    'websocket serializer uses a truthy check that drops bytesPerSecond=0 ' +
    'from the init payload. With a low-traffic BCHD mempool the value is ' +
    "legitimately 0 for long stretches, so the dashboard's " +
    'combineLatest(mempoolInfo$, bytesPerSecond$) never fires and the ' +
    'three widgets stay in their loading placeholder state forever. ' +
    'The bchd-shim now rewrites the truthy check to nullish-only filtering ' +
    'so zero values still propagate. No effect on BCHN.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
