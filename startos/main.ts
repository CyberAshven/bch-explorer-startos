import { sdk } from './sdk'
import { webPort, dbPort } from './utils'
import { storeJson } from './file-models/store.json'

export const main = sdk.setupMain(async ({ effects }) => {
  // Read DB credentials from own store
  const store = await storeJson.read().once()
  const dbPassword = store?.dbPassword ?? 'explorer'

  // Check if Fulcrum BCH is installed and running
  const fulcrumIp = await sdk
    .getContainerIp(effects, { packageId: 'fulcrum-bch' })
    .once()
  const electrumHost = fulcrumIp ?? ''

  // Create the API subcontainer first so we can exec into it to read BCHN credentials
  // (the dependency volume is only accessible inside the subcontainer, not in the Node.js process)
  const apiSub = await sdk.SubContainer.of(
    effects,
    { imageId: 'backend' },
    sdk.Mounts.of()
      .mountVolume({
        volumeId: 'main',
        subpath: '/cache',
        mountpoint: '/backend/cache',
        readonly: false,
      })
      .mountDependency({
        dependencyId: 'bitcoin-cash-node',
        volumeId: 'main',
        subpath: null,
        mountpoint: '/mnt/bitcoin-cash-node',
        readonly: true,
      }),
    'api-sub',
  )

  // Read BCHN RPC credentials from the mounted dependency volume inside the subcontainer
  let bchnUser = 'bitcoin-cash-node'
  let bchnPass = ''
  try {
    const result = await apiSub.exec(['cat', '/mnt/bitcoin-cash-node/store.json'])
    if (result.exitCode === 0) {
      const bchnStore = JSON.parse(result.stdout.toString()) as {
        rpcUser?: string
        rpcPassword?: string
      }
      bchnUser = bchnStore.rpcUser ?? bchnUser
      bchnPass = bchnStore.rpcPassword ?? bchnPass
    }
  } catch {
    console.warn('Could not read BCHN store.json — using defaults')
  }

  return sdk.Daemons.of(effects)
    .addDaemon('db', {
      subcontainer: await sdk.SubContainer.of(
        effects,
        { imageId: 'db' },
        sdk.Mounts.of().mountVolume({
          volumeId: 'db',
          subpath: null,
          mountpoint: '/var/lib/mysql',
          readonly: false,
        }),
        'db-sub',
      ),
      exec: {
        command: sdk.useEntrypoint(['--bind-address=127.0.0.1']),
        env: {
          MYSQL_DATABASE: 'explorer',
          MYSQL_USER: 'explorer',
          MYSQL_PASSWORD: dbPassword,
          MARIADB_AUTO_UPGRADE: '1',
          MARIADB_RANDOM_ROOT_PASSWORD: '1',
        },
      },
      ready: {
        display: 'Database',
        fn: async () =>
          sdk.healthCheck.checkPortListening(effects, dbPort, {
            successMessage: 'Database is ready',
            errorMessage: 'Database is starting...',
          }),
      },
      requires: [],
    })
    .addDaemon('api', {
      subcontainer: apiSub,
      exec: {
        command: ['./start.sh'],
        env: {
          EXPLORER_BACKEND: electrumHost ? 'electrum' : 'node',
          EXPLORER_NETWORK: 'mainnet',
          EXPLORER_INDEXING_BLOCKS_AMOUNT: '-1',
          CORE_RPC_HOST: 'bitcoin-cash-node.startos',
          CORE_RPC_PORT: '8332',
          CORE_RPC_USERNAME: bchnUser,
          CORE_RPC_PASSWORD: bchnPass,
          ...(electrumHost ? { ELECTRUM_HOST: electrumHost } : {}),
          DATABASE_ENABLED: 'true',
          DATABASE_HOST: '127.0.0.1',
          DATABASE_PORT: String(dbPort),
          DATABASE_DATABASE: 'explorer',
          DATABASE_USERNAME: 'explorer',
          DATABASE_PASSWORD: dbPassword,
          STATISTICS_ENABLED: 'true',
        },
      },
      ready: {
        display: 'API',
        fn: async () =>
          sdk.healthCheck.checkPortListening(effects, 8999, {
            successMessage: 'BCH Explorer API is ready',
            errorMessage: 'BCH Explorer API is starting...',
          }),
      },
      requires: ['db'],
    })
    .addDaemon('web', {
      subcontainer: await sdk.SubContainer.of(
        effects,
        { imageId: 'frontend' },
        sdk.Mounts.of(),
        'web-sub',
      ),
      exec: {
        command: sdk.useEntrypoint(),
        env: {
          FRONTEND_HTTP_PORT: String(webPort),
          BACKEND_MAINNET_HTTP_HOST: '127.0.0.1',
        },
      },
      ready: {
        display: 'Web UI',
        fn: async () =>
          sdk.healthCheck.checkPortListening(effects, webPort, {
            successMessage: 'BCH Explorer is ready',
            errorMessage: 'BCH Explorer web UI is starting...',
          }),
      },
      requires: ['api'],
    })
})
