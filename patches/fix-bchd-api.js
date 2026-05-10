// BCHD API compatibility patches — run once at container startup (idempotent)
// 1. blocks.js: BCHD verbosity=2 getblock returns `rawtx` not `tx`
// 2. blocks.js: BCHD does not implement `getblockstats` (-32601 Method not found).
//    Fall through to the existing stale-block local computation path on RPC error.
// 3. bitcoin-api.js: BCHD getrawtransaction only accepts (txid, verbose), not 4 params
const fs = require('fs')

function patch(file, re, replacement) {
  const before = fs.readFileSync(file, 'utf8')
  const after = before.replace(re, replacement)
  if (before !== after) {
    fs.writeFileSync(file, after)
    console.log('patched:', file)
  } else {
    console.log('no-op (already patched or pattern missed):', file)
  }
}

patch(
  '/backend/package/api/blocks.js',
  /const verboseBlock = await bitcoin_client_1\.default\.getBlock\(blockHash, 2\);/,
  'const verboseBlock = await bitcoin_client_1.default.getBlock(blockHash, 2); verboseBlock.tx = verboseBlock.tx || verboseBlock.rawtx || [];',
)

// $getBlockStats: wrap the live RPC call so BCHD's missing getblockstats falls
// back to local stats computation (the stale-block branch already handles this).
patch(
  '/backend/package/api/blocks.js',
  /if \(!block\.stale\) \{\s*return bitcoin_client_1\.default\.getBlockStats\(block\.id\);\s*\}/,
  "if (!block.stale) {\n" +
    "            try { return await bitcoin_client_1.default.getBlockStats(block.id); }\n" +
    "            catch (e) {\n" +
    "                const m = (e && (e.message || '')) + '';\n" +
    "                const c = e && e.code;\n" +
    "                if (c !== -32601 && !/method not found/i.test(m)) throw e;\n" +
    "                console.warn('[bchd-shim] getblockstats unsupported; computing locally for', block.id);\n" +
    "                /* fall through to local computation below */\n" +
    "            }\n" +
    "        }",
)

patch(
  '/backend/package/api/bitcoin/bitcoin-api.js',
  /\.getRawTransaction\(txId, 2, '', true\)/,
  '.getRawTransaction(txId, true)',
)
