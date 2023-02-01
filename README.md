# My_Learning_DeFi

My learning about DeFi

## [Books](./docs/books/)

## [Protocol](./protocols/)

## Development

### Storage

- In DeFi smart contracts, the data is stored on-chain for data persistence required for financial computations.
- But, this can be achieved by either of the two ways:
  1. Minimalistic storage with loops during calculations like average price.
  2. Maximalistic storage with no use of loops during such calculations as the count, & the total amount is also stored.
- In both the methods there are cons. As a matter of fact, the 2nd method is normally chosen.
- But, this has led to expensive scenarios like Chainlink paying 100k USD as gas fees per day.
- In order to avoid this, off-chain storage could be a solution, but it is not secure as the data won't be immutable.
- Hence, there is a new upcoming solution provided by Arweave Blockchain. This has permanent storage. And fetching data from here is absolute free without any API key requirement. The fee is paid one-time which gives storage for almost 100 years. The data (like price) is stored via Arweave smart contracts.
- Have a look at how to access the price [here](./libs/redstone).

## References

### Blogs

- [A Mathematical View of Automated Market Maker (AMM) Algorithms and Its Future](https://medium.com/anchordao-lab/automated-market-maker-amm-algorithms-and-its-future-f2d5e6cc624a)
- [Automated Market Maker (AMM)](https://academy.binance.com/en/articles/what-is-an-automated-market-maker-amm)
- [Impermanent Loss Explained](https://academy.binance.com/en/articles/impermanent-loss-explained)
- [Curve Finance in DeFi](https://academy.binance.com/en/articles/what-is-curve-finance-in-defi)
- [A Guide to PancakeSwap](https://academy.binance.com/en/articles/a-guide-to-pancakeswap)
- [What Are Liquidity Pools in DeFi and How Do They Work](https://academy.binance.com/en/articles/what-are-liquidity-pools-in-defi)
- [Yield Farming in Decentralized Finance (DeFi)](https://academy.binance.com/en/articles/what-is-yield-farming-in-decentralized-finance-defi)
- [AMM Formula Explained](https://www.binance.com/en/support/faq/33f38db8c23e4a0f949b5433cdc7193a)
- [“Bancor AMM DEX formula calculation example” by CoTrader.com](https://link.medium.com/ZEOBKSzGpeb)
- [“Constant Function Market Makers: DeFi’s ‘Zero to One’ Innovation” by Dmitriy Berenzon](https://link.medium.com/qmwIP0CGpeb)
- [“Liquidity Mining: A User-Centric Token Distribution Strategy” by Dmitriy Berenzon](https://link.medium.com/R01IsfFGpeb)
- [“Synthetic Assets in DeFi: Use Cases & Opportunities” by Dmitriy Berenzon](https://link.medium.com/H3GyoDIGpeb)
- [“P2P Networks and Cryptoassets: A Perfect Match, Decades in the Making” by Dmitriy Berenzon](https://link.medium.com/B45QHRMGpeb)
- [“Crypto borrowing and staking networks” by Jake Brukhman](https://link.medium.com/16twZBPGpeb)
- [“Compound Finance — A Liquidating Opportunity” by Tony W](https://link.medium.com/sgCxsmWGpeb)
- [“Proposing Bancor v2.1: Single-Sided AMM with Elastic BNT Supply” by Bancor](https://link.medium.com/Ap1JKAhHpeb)
- [“Guide: Single-Sided AMM Staking on Bancor V2.1” by Bancor](https://link.medium.com/ROPientHpeb)
- [“How Liquid Tokens Work” by Nate Hindman](https://link.medium.com/mpQcoIuHpeb)
- [“Using Bancor Vortex” by Bancor](https://link.medium.com/xl6H0txHpeb)
- [“How To Stake BNT Liquidity Mining Rewards & Compound Yield” by Bancor](https://link.medium.com/TaPrcvyHpeb)
- [“Bernard Lietaer, A Financial Justice Warrior Who Fought for Freedom of Currency” by Galia Benartzi](https://link.medium.com/GsmIy7AHpeb)
- [“What the heck is an automated market maker (AMM)?” by Nightly Crypto](https://link.medium.com/M4CXZWwVqeb)
- [“The Future of algorithmic stable coin” by Sigma Protocol](https://link.medium.com/M50rRFvWqeb)
- [“The Biggest Hurdle Facing Decentralized Finance (DeFi)” by John Anthony Radosta](https://link.medium.com/PoQevGyWqeb)
- [“I Want To Explain DeFi To My Parents” by Anthony Albertorio](https://link.medium.com/i9kdMdJWqeb)
- [“Diving into Real World DeFi” by Andy Singleton](https://link.medium.com/APvM1hxXqeb)
- [Uniswap: A Good Deal for Liquidity Providers?](https://pintail.medium.com/uniswap-a-good-deal-for-liquidity-providers-104c0b6816f2)
- [Liquidity Pools Explained](https://finematics.com/liquidity-pools-explained/)
- [What Are Automated Market Makers?](https://www.gemini.com/cryptopedia/amm-what-are-automated-market-makers#section-automated-market-maker-variations)
- [Impermanent Loss in Decentralized Finance](https://www.gemini.com/cryptopedia/decentralized-finance-impermanent-loss-defi)
- [How Liquidity Provider (LP) Tokens Work](https://www.gemini.com/cryptopedia/liquidity-provider-amm-tokens)
- [Constant Function Market Makers: DeFi’s “Zero to One” Innovation](https://medium.com/bollinger-investment-group/constant-function-market-makers-defis-zero-to-one-innovation-968f77022159)
- [Improving front running resistance of x\*y=k market makers](https://ethresear.ch/t/improving-front-running-resistance-of-x-y-k-market-makers/1281)
- [Liquidity Pools: A deep dive into Balancer, Curve, and Aave](https://youtu.be/4ZKQpp0ICyc)

### Videos

- [Finematics | A Short Story of UNISWAP and UNI Token. DEFI Explained](https://youtu.be/LpjMgS4OVzs)
- [What is DEFI? Decentralized Finance Explained (Ethereum, MakerDAO, Compound, Uniswap, Kyber)](https://youtu.be/k9HYC0EJU6E)
- [Economics Design | DEX/AMM Live Chat with Balancer, Bancor and Curve](https://youtu.be/FZSM8RUMLus)
- [What Is IMPERMANENT LOSS? DEFI Explained - Uniswap, Curve, Balancer, Bancor](https://www.youtube.com/watch?v=8XJ1MSTEuU0)
- [UNISWAP V3 EXPLAINED](https://www.youtube.com/watch?v=3u4Prz-EkPM)
- [SCP | DeFi playlist by Smart Contract Programmer](https://www.youtube.com/playlist?list=PLO5VPQH6OWdX-Rh7RonjZhOd9pb9zOnHW)
- [Chainlink | How To Use DeFi with Python (DeFi Quant): Code Along](https://www.youtube.com/watch?v=tCV_4WBMVGA)
- [The Future of Asset Management Using Smart Contracts & Oracles](https://www.youtube.com/watch?v=7ECeIK5_tXk) ✅
