import { sdk } from './sdk'
import { storeJson } from './file-models/store.json'
import { selectIndexer } from './actions/selectIndexer'

export const setDependencies = sdk.setupDependencies(
  async ({ effects }) => {
    const store = await storeJson.read().once()
    const indexer = store?.indexer

    // Show "Select Indexer" task until user explicitly picks one
    if (!indexer) {
      await sdk.action.createOwnTask(effects, selectIndexer, 'critical', {
        reason:
          'Select which Electrum server to use for address lookups',
        input: {
          kind: 'partial',
          value: { indexer: 'fulcrum' },
        },
        when: { condition: 'input-not-matches', once: true },
      })
    }

    return {
      'bitcoin-cash-node': {
        kind: 'running' as const,
        versionRange: '>=29.0.0:0',
        healthChecks: ['primary'],
      },
      ...(indexer === 'fulcrum'
        ? {
            'fulcrum-bch': {
              kind: 'running' as const,
              versionRange: '>=2.1.0:0',
              healthChecks: ['primary'],
            },
          }
        : {}),
    }
  },
)
