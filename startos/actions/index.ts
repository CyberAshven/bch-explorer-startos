import { sdk } from '../sdk'
import { selectIndexer } from './selectIndexer'
import { selectNetwork } from './selectNetwork'
import { selectNode } from './selectNode'

export const actions = sdk.Actions.of()
  .addAction(selectNode)
  .addAction(selectNetwork)
  .addAction(selectIndexer)
