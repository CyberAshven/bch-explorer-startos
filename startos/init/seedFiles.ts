import { sdk } from '../sdk'
import { storeJson } from '../file-models/store.json'
import { selectIndexer } from '../actions/selectIndexer'
import { createTask } from '@start9labs/start-sdk/base/lib/actions'

function generatePassword(length = 24): string {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }
  return result
}

export const seedFiles = sdk.setupOnInit(async (effects, kind) => {
  if (kind !== 'install') return

  const dbPassword = generatePassword(24)

  await storeJson.merge(effects, {
    dbPassword,
    initialized: true,
    indexer: 'fulcrum',
  })

  // Create a task prompting the user to select their indexer
  await createTask({
    effects,
    packageId: 'bch-explorer',
    action: selectIndexer,
    severity: 'critical',
    options: {
      reason: 'Select which Electrum server to use for address lookups',
    },
  })
})
