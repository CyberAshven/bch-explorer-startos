import { VersionInfo } from '@start9labs/start-sdk'

export const v_3_11_0_9 = VersionInfo.of({
  version: '3.11.0:9',
  releaseNotes:
    'Fix dashboard widgets (Minimum fee, Memory Usage, Unconfirmed, ' +
    'Incoming Transactions chart) staying blank after 3.11.0:8. Root ' +
    'cause: the upstream blocks.tx_count column is smallint(5) unsigned ' +
    '(max 65,535) but BCH blocks routinely exceed that — e.g. block ' +
    '840002 has 72,174 transactions. The miner indexer hit an ' +
    "'Out of range value for column tx_count' INSERT error on the " +
    'first missing block in its backfill range, retried forever, and ' +
    'never indexed anything, so dashboard widgets that depend on ' +
    'indexed state stayed in their loading placeholder. The fix widens ' +
    'the column to int unsigned for fresh installs and adds an ' +
    'idempotent ALTER on every backend startup so existing installs ' +
    'are migrated automatically.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
