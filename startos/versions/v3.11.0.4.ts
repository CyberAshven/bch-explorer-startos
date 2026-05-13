import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_11_0_4 = VersionInfo.of({
  version: '3.11.0:4',
  releaseNotes:
    'Fix empty dashboard widgets with BCHD backend (Transaction Fees, ' +
    'Minimum fee, Memory Usage, projected mempool blocks, fee histogram). ' +
    "BCHD's getmempoolinfo returns only {size,bytes} and its " +
    'getrawmempool verbose schema uses {size,fee,depends} instead of ' +
    "Core's {vsize,fees:{base},ancestorcount,descendantcount,wtxid,spentby}. " +
    'The bchd-shim now wraps both RPCs to synthesize the missing Core fields ' +
    '(usage, maxmempool, mempoolminfee, minrelaytxfee, fees.base/modified/' +
    'ancestor/descendant, ancestor/descendant counts and sizes, wtxid, spentby), ' +
    'so the mempool worker and fee-recommendation API populate again. ' +
    'No effect on BCHN.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
