# My_Learning_DeFi
My learning about DeFi

## Education
* Uniswap forked out of Bancor.
* Bancor algorithm has been used in 
	- EOSIO RAM market to decide the RAM price. RAM <-> EOS
	- my project TOE (A decentralized Ride sharing platform) to decide the Rides' price. RIDEX <-> EOS
	- [ ] my DeFi project - Cropfi (Stake ur tokens to earn more).
* Liquidity provider: who adds funds into the Liquidity Pool to earn fees from trades in the Swap Pool and also savings interest income. [Source](https://www.binance.com/en-IN/support/articles/dc8f28e7a98d4534ad3db88d351200fb)

### Automated Market Maker (AMM)
* A robot that always quotes price b/w 2 assets using 
	- __simple__ formula like in Uniswap while 
	- Curve, Balancer & others use __complicated__ ones.
* Purpose:
	- Anyone can trade trustlessly
	- Anyone can provide fund (also called liquidity) to a liquidity pool. Hence, they can be market maker on exchange. In return, they earn fees for providing liquidity. 
* An AMM is a type of decentralized exchange (DEX) protocol that relies on a mathematical formula to price assets. Instead of using an order book like a traditional exchange, assets are priced according to a pricing algorithm.

#### AMM Formula
* Uniswap - [Whitepaper](https://hackmd.io/C-DvwDSfSxuh-Gd4WKE_ig)
```
x * y = k

where,
x is the amount of one token in the liquidity pool
y is the amount of second token in the liquidity pool
k is a fixed constant, which is the pool's total liquidity always has to remain the same.

> NOTE: k changes during investment/withdrawal transactions, NOT trades
```
* Other AMMs will use other formulas for the specific use cases they target. The similarity between all of them, however, is that they determine the prices algorithmically.
* Traditional market making usually works with firms with vast resources and complex strategies. Market makers help you get a good price and tight bid-ask spread on an order book exchange like Binance. Automated market makers decentralize this process and let essentially anyone create a market on a blockchain.

### Glossary
* liquidity: used in place of 'fund'
* market maker: funder who can deposit money into liquidity pool
* liquidity pool: money collected

## References
### Blogs
* [Automated Market Maker (AMM)](https://academy.binance.com/en/articles/what-is-an-automated-market-maker-amm)
* [Impermanent Loss Explained](https://academy.binance.com/en/articles/impermanent-loss-explained)
* [Curve Finance in DeFi](https://academy.binance.com/en/articles/what-is-curve-finance-in-defi)
* [A Guide to PancakeSwap](https://academy.binance.com/en/articles/a-guide-to-pancakeswap)
* [What Are Liquidity Pools in DeFi and How Do They Work](https://academy.binance.com/en/articles/what-are-liquidity-pools-in-defi)
* [Yield Farming in Decentralized Finance (DeFi)](https://academy.binance.com/en/articles/what-is-yield-farming-in-decentralized-finance-defi)
* [AMM Formula Explained](https://www.binance.com/en/support/faq/33f38db8c23e4a0f949b5433cdc7193a)
* [“Bancor AMM DEX formula calculation example” by CoTrader.com](https://link.medium.com/ZEOBKSzGpeb)
* [“Constant Function Market Makers: DeFi’s ‘Zero to One’ Innovation” by Dmitriy Berenzon](https://link.medium.com/qmwIP0CGpeb)
* [“Liquidity Mining: A User-Centric Token Distribution Strategy” by Dmitriy Berenzon](https://link.medium.com/R01IsfFGpeb)
* [“Synthetic Assets in DeFi: Use Cases & Opportunities” by Dmitriy Berenzon](https://link.medium.com/H3GyoDIGpeb)
* [“P2P Networks and Cryptoassets: A Perfect Match, Decades in the Making” by Dmitriy Berenzon](https://link.medium.com/B45QHRMGpeb)
* [“Crypto borrowing and staking networks” by Jake Brukhman](https://link.medium.com/16twZBPGpeb)
* [“Compound Finance — A Liquidating Opportunity” by Tony W](https://link.medium.com/sgCxsmWGpeb)
* [“Proposing Bancor v2.1: Single-Sided AMM with Elastic BNT Supply” by Bancor](https://link.medium.com/Ap1JKAhHpeb)
* [“Guide: Single-Sided AMM Staking on Bancor V2.1” by Bancor](https://link.medium.com/ROPientHpeb)
* [“How Liquid Tokens Work” by Nate Hindman](https://link.medium.com/mpQcoIuHpeb)
* [“Using Bancor Vortex” by Bancor](https://link.medium.com/xl6H0txHpeb)
* [“How To Stake BNT Liquidity Mining Rewards & Compound Yield” by Bancor](https://link.medium.com/TaPrcvyHpeb)
* [“Bernard Lietaer, A Financial Justice Warrior Who Fought for Freedom of Currency” by Galia Benartzi](https://link.medium.com/GsmIy7AHpeb)
* [“What the heck is an automated market maker (AMM)?” by Nightly Crypto](https://link.medium.com/M4CXZWwVqeb)
* [“The Future of algorithmic stable coin” by Sigma Protocol](https://link.medium.com/M50rRFvWqeb)
* [“The Biggest Hurdle Facing Decentralized Finance (DeFi)” by John Anthony Radosta](https://link.medium.com/PoQevGyWqeb)
* [“I Want To Explain DeFi To My Parents” by Anthony Albertorio](https://link.medium.com/i9kdMdJWqeb)
* [“Diving into Real World DeFi” by Andy Singleton](https://link.medium.com/APvM1hxXqeb)
* [Uniswap: A Good Deal for Liquidity Providers?](https://pintail.medium.com/uniswap-a-good-deal-for-liquidity-providers-104c0b6816f2)

### Videos
* [A Short Story of UNISWAP and UNI Token. DEFI Explained](https://youtu.be/LpjMgS4OVzs)
* [What is DEFI? Decentralized Finance Explained (Ethereum, MakerDAO, Compound, Uniswap, Kyber)](https://youtu.be/k9HYC0EJU6E)
* [DEX/AMM Live Chat with Balancer, Bancor and Curve](https://youtu.be/FZSM8RUMLus)