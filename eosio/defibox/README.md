# Defibox

## FAQs
### 1. Implement this: If receive EOS on account `acc1`, automatically swap tokens with `pBTC`.
Depends on how automated and how secure you want this

1. Easy way, build a cron script (NodeJS or Python) that sells from that account any EOS into pBTC (requires having the private key in the script)
2. Build/deploy a smart on that account whenever receives EOS sell into pBTC (requires smart contract knowledge)

The workflow is a simple token transfer using a memo

https://gist.github.com/DenisCarriere/17f072da5aa33aae182743a5a831bb00

Using on_notify("eosio.token::transfer") to be alerted on incoming deposit

Using memo format:

`"swap,<slippage>,<pair ids>"`

Example:

- EOS=>PBTC "swap,0,177"
- USDT=>EOS=>PBTC "swap,0,12-177" (multi-hop)

## References
* [Peripheral EOSIO smart contracts for interacting with Defibox](https://github.com/stableex/sx.defibox)
* [SX Curve is an amplified AMM (automated market maker) swap liquidity pool designed efficiently for stable currencies and/or highly correlated assets](https://github.com/stableex/sx.curve)
* [C++ intetrface for interacting with lend.pizza smart contract](https://github.com/stableex/sx.pizzalend)