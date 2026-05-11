import { sdk } from '../sdk'
import { storeJson } from '../file-models/store.json'

const { InputSpec, Value } = sdk

export const NETWORK_VALUES = {
  mainnet: 'Mainnet',
  testnet4: 'Testnet4',
  chipnet: 'Chipnet',
  scalenet: 'Scalenet',
} as const

export type Network = keyof typeof NETWORK_VALUES

const networkInputSpec = InputSpec.of({
  network: Value.select({
    name: 'Network',
    description:
      'Select which BCH network this explorer should serve. ' +
      'The selected network must be supported by the chosen Node Backend and ' +
      'by the Fulcrum BCH indexer. ' +
      'BCHN supports all four networks. ' +
      'BCHD only supports Mainnet. ' +
      'Flowee currently supports Mainnet.',
    default: 'mainnet',
    values: NETWORK_VALUES,
  }),
})

export const selectNetwork = sdk.Action.withInput(
  'select-network',

  {
    name: 'Select Network',
    description:
      'Choose which BCH network the explorer should run against. ' +
      'Restart the service after changing this for it to take effect.',
    warning:
      'Make sure your selected Node Backend and Fulcrum BCH are configured for the same network. ' +
      'Switching networks resets indexer state; the database will be re-populated from scratch.',
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  },

  networkInputSpec,

  async ({ effects }) => {
    const store = await storeJson.read().once()
    const network = (store?.network ?? 'mainnet') as Network
    return { network }
  },

  async ({ effects, input }) => {
    await storeJson.merge(effects, {
      network: input.network,
    })
  },
)
