# BCH Explorer

A self-hosted Bitcoin Cash block explorer based on
[bitcoin-cash-explorer](https://gitlab.melroy.org/bitcoincash/bitcoin-cash-explorer).

## Prerequisites

BCH Explorer requires:
- A Bitcoin Cash full node (**BCHN**, **BCHD**, or **Flowee**) — fully synced
- **Fulcrum BCH** — provides the Electrum index for address and transaction lookups

Both services must be installed and fully synced before starting BCH Explorer.

## Outbound Access for Price / Pool Data

BCH Explorer fetches mining pool logos and BCH/USD price history from the internet.
After install, navigate to **Services → BCH Explorer → Outbound Proxy** and set it to
your clearnet gateway interface. Without this, the mining-pool dashboard logos and price
chart will remain blank.

## Configuration

Use **Config** to set:
- **Node Backend** — select BCHN, BCHD, or Flowee
- **Electrum Indexer** — select Fulcrum BCH

## Support

- Package: <https://github.com/BitcoinCash1/bch-explorer-startos>
- Upstream: <https://gitlab.melroy.org/bitcoincash/bitcoin-cash-explorer>
