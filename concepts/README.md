# DeFi Concepts

## About

- Bancor laid the foundation of AMM.
- Uniswap came after Bancor & a better version than the later by 10x reduction in gas consumption.
- Bancor algorithm has been used in
  - EOSIO RAM market to decide the RAM price. RAM <-> EOS
  - my project TOE (A decentralized Ride sharing platform) to decide the Rides' price. RIDEX <-> EOS
  - [ ] my DeFi project - Cropfi (Stake ur tokens to earn more).
- Liquidity provider: who adds funds into the Liquidity Pool to earn fees from trades in the Swap Pool and also savings interest income. [Source](https://www.binance.com/en-IN/support/articles/dc8f28e7a98d4534ad3db88d351200fb)

## CeFi

- Buyers are interested to buy any stocks/cryptos for the lowest price possible, while seller tries to get the maximum price for their stocks or crypto. Now, these trades get locked in the order book, where the consensus on price is required from both parties to get the trade executed.
- So there can be a situation where the consensus never happens and trades never get executed for a longer period of time, why because there are not enough takers and also due to a liquidity crunch in the exchange.

Watch [this](https://www.youtube.com/watch?v=kywpm7eDIFk) video for 'Order Book model'.

## DeFi

- DeFi = Blockchain + Finance + Economics
- Decentralized Finance or DeFi is a digtial revolution that leverages decentralized networks to transform our old & ailing financial system into trustless and transparent protocols that run without any third party custodians or intermiediary.
- Some of the concepts driving these:
  - Yield Farming
  - Crypto Staking
  - Crypto lending
  - Crypto Borrowing
  - Liquidity Pool

## Automated Market Maker (AMM)

Watch [this](https://www.youtube.com/watch?v=Xbf-QFjZZ_g) video for 'AMM Intro'.

- A robot that always quotes price b/w 2 assets using
  - **simple** formula like in Uniswap while
  - Curve, Balancer & others use **complicated** ones.
- Purpose:
  - Anyone can trade trustlessly
  - Anyone can provide fund (also called liquidity) to a liquidity pool. Hence, they can be market maker on exchange. In return, they earn fees for providing liquidity.
- An AMM is a type of decentralized exchange (DEX) protocol that relies on a mathematical formula to price assets. Instead of using an order book like a traditional exchange, assets are priced according to a pricing algorithm.
- The basic AMM works as a series of pools of two assets (say, ETH, the foundational currency of the Ethereum blockchain, and DAI, an Ethereum token designed to hold its value against the U.S. dollar). The price offered by the AMM does not reference the external world. In the simplest form, it’s just a function of the ratio of the two assets. So if there were 1 ETH in the pool and 2,000 DAI, 1 DAI would cost 0.0005 ETH and 1 ETH would cost 2,000 DAI.
- History:
  - The concept of AMM used in Uniswap (constant product market maker) has already been studied for over a decade. Refer [this](./docs/papers/AMM_Theory_Practice.pdf)
  - It has been used in prediction markets.
  - Other AMM appoaches:
    - logarithmic rule used in prediction markets - [Augur v1](https://augur.mystrikingly.com/blog/augur-s-automated-market-maker-the-ls-lmsr) & [Gnosis](https://gnosis-pm-js.readthedocs.io/en/v1.3.0/lmsr-primer.html)
    - Information aggregators based
      - [Bayesian market makers](http://www.eecs.harvard.edu/cs286r/courses/fall12/papers/bmm-ec.pdf)
      - [dynamic pari-mutuel market makers](https://www.researchgate.net/publication/279714212_A_dynamic_pari-mutuel_market_for_hedging_wagering_and_information_aggregation)
- "constant product market maker" is also called "constant function market makers" (CFMMs).
- Bonding curve: relationship between price & token supply.
- CFMMs: relationship between 2 or more tokens.
- Compound uses non-CFMM because the interest rate is dynamic based on the utilization ration and the goal is not to keep the interest rate constant.

### CFMM

- The term “constant function” refers to the fact that any trade must change the reserves in such a way that the product of those reserves remains unchanged (i.e. equal to a constant) during trading/swap.
- CFMMs typically have three participants:
  - Traders: Exchange one asset for another asset.
  - Liquidity providers (LPs): Willingly accept trades against their portfolio in exchange for a fee.
  - Arbitrageurs: Maintain the price of assets within that portfolio in accordance with the market price in exchange for a profit.
- CFMMs are often used for secondary market trading and tend to accurately reflect, as a result of arbitrage, the price of individual assets on reference markets. For example, if the CFMM price is less than the reference market price, arbitrageurs will buy the asset on the CFMM and sell it on an order book-based exchange for a profit.
- A constant product function forms a hyperbola when plotting two assets, which has a desirable property of always having liquidity as prices approach infinity on both sides of the spectrum.

![CFMM Chart](./img/cfmm_chart.png)

- A constant product market maker, first implemented by Uniswap, satisfies the equation:
  ![CFMM formula](./img/cfmm_formula.png)

Where R*α and R*β are reserves of each asset and γ is the transaction fee. Trading any amount of either asset must change the reserves in such a way that, when the fee is zero, the product `R_α * R_β` remains equal to the constant `k`.

- This is often simplified in the form of `x*y=k`, where x and y are the reserves of each asset.
- In practice, because Uniswap charges a 0.3% trading fee that is added to reserves, each trade actually increases k.
- Pros:
  - **all-time liquidity**: It can provide liquidity no matter how large the order size is or how small the liquidity pool is. While larger orders tend to suffer from excess slippage, the system never has to worry about running out of liquidity. It will literally always work.
- Cons:
  - **slippage**: is the difference between the expected price of a trade and the price at which the trade is executed. This can be solved by having a large reserve i.e. large value of constant. In this way, the orders should get bigger and bigger so that the slippage is considerable. large order => larger chance of slippage.
  - **Impermanent Loss**: the difference b/w the external market price & pool's price. Suppose, there is a pool with tokens - `ETH : DAI` | `10:1000`, then ETH price is 100 USD, but suppose, the reserve is now `8.17: 1224` after some liquidity movement, still the product is `10000`. In the 2nd case, the price is `150 USD`. Hence, the `$50` in profit is lost to the liquidity provider. Naturally, if the price returned to $100 again, everything would rebalance. That is why this phenomenon is known as impermanent loss. Without a doubt, it is one of the most uncomfortable problems of the Uniswap system. Nobody likes to provide liquidity in exchange for losing value.

```console
ETH : DAI
1. 10 1000 -> 10000, ==> 1 ETH = 100 USD
2. 8.17 1224 -> 10000, ==> 1 ETH = 150 USD
```

### Constant Sum Market Makers (CSMM)

- A constant sum market maker is a relatively straightforward implementation of a constant function market maker, satisfying the equation:
  ![CSMM Formula](./img/csmm_formula.png)

Where R_i are the reserves of each asset and k is a constant.

- While this function produces “zero slippage”, it does not provide infinite liquidity and thus is likely unfit as a standalone implementation for a decentralized exchange use-case.
- A constant sum function forms a straight line when plotting two assets, resulting in the equation `x+y=k`.
  ![CSMM Chart](./img/csmm_chart.png)

### AMM Formula

- Uniswap - [Whitepaper](https://hackmd.io/C-DvwDSfSxuh-Gd4WKE_ig)

```console
x * y = k

where,
x is the amount of one token in the liquidity pool
y is the amount of second token in the liquidity pool
k is a fixed constant, which is the pool's total liquidity always has to remain the same.

> NOTE: k changes during investment/withdrawal transactions, NOT trades
```

- Other AMMs will use other formulas for the specific use cases they target. The similarity between all of them, however, is that they determine the prices algorithmically.
- Traditional market making usually works with firms with vast resources and complex strategies. Market makers help you get a good price and tight bid-ask spread on an order book exchange like Binance. Automated market makers decentralize this process and let essentially anyone create a market on a blockchain.

## Impermanent Loss

- Temporary loss of funds in providing liquidity.
- Why temporary/impermanent?
  - the moment, the price (in centralized exchanges) value comes back to the original price, there is no loss then.
- Suppose, there is a pool with a pair of tokens `X-Y`. Now, a person provides liquidity of `X` & is issued with tokens Y. Now, let's say the price of `X` in the centralized exchanges like Coinbase increase, compared to the Pool price of `X`. Suppose, the price of `X` in pool is `500 USD` & in exchanges it's `550 USD`, then the person would incur a loss. This is called "Impermanent Loss". Now, all the platforms who has these pools, ensure that the market maker (people who provides liquidity) get more incentives (a portion of the fees collected from borrowers). Watch [this](https://www.youtube.com/watch?v=8XJ1MSTEuU0)

## Concentrated Liquidity

- Introduced in Uniswap V3
- The liquidity provider has the choice to part provide liquidity of the token in a specific price range.

## [Flash Loans](./docs/flashloan.md)

## Liquidity Pool

- It is a reservoir of crypto funds mostly in pairs, which works based on the smart contract rules , facilitating user to engage in decentralized, permissionless trading, lending, borrowing activities and in turns getting rewards in the form of the crypto.
- Each pool has mostly 2 tokens. The first Liquidity Provider in a pool has to initiate with deposit `1:1` tokens.
- Basically, liquidity pools contain two assets. As a provider you fund a set amount of both. By adding, you are given a share of the pool. The total amount you provide to the pool increases your share. For instance, if you provide 1000 DAI and 2.5 ETH, your share of the pool may be 5%, whereas someone who provides 50 DAI and 0.02 ETH may only have 0.01%.
- Each time the pool is in use, a fee is taken and distributed to all owners of the pool. The greater your pool share, the bigger cut of the fee. This process incentivizes providers to stay long term keeping the pool healthy, and in turn stabilizes the asset.
- Supplying liquidity through Uniswap is done via a smart contract. In return for your addition you are given pool tokens. At any time you can withdraw your shares, returning your pool tokens to take back your assets. Note: adding or removing funds costs gas, so make sure it counts.
- The proportions of the tokens lying in the Liquidity Pool controls the price of assets in consideration. For example, when you buy ETH from the DAI/ETH pool, the supply of ETH is reduced from the pool, and the supply of DAI is increased proportionally. This will increase the price of ETH and decrease the price of DAI.
- Risks:
  - A bank run may occur for a single asset, which creates supply imbalance. For example, if ETH were to hard fork and drop to 0, everyone would want DAI. Traders would swap out all of their ETH for DAI, and the providers would be left with only ETH unless they remove themselves from the pool prior to the run.
  - The value of one asset may be rising at a volatile rate and as a provider you want to remove your pool share to cash in. When you go to remove the share you find you have more of the other asset. Taking it out of the pool at that time could cause a loss.
- [How to add liquidity to Uniswap --- "Adding Liquidity to a Pool"](https://www.publish0x.com/cryptocurrency-ideas/tutorials-becoming-a-liquidity-provider-with-uniswap-xzyzljg)

### Withdrawal Fee

- An early withdrawal penalty is charged for withdrawals before an expiry. This is to discourage competitive LP withdrawals ahead of an options expiry. This early withdrawal fee will be applied after the potential claim reserve is deducted. It is calculated according to the following:
  [Source](https://docs.divergence-protocol.com/redemption) - `0` if no options have been sold since the open, or if LP uses the "expiry exit". - `sqrt(1-t) * (1%)`, where t = `(expiryTimestamp − currentTimestamp) / timePeriod` - `1%` penalty cap

### Yield Farming with LP Tokens

## Slippage

- [Watch this](https://www.youtube.com/watch?v=BgR75biSjzU)
- The larger the liquidity pool (in terms of token reserves), the lesser is the price slippage.

## Oracle

- Used in Bancor v2, Uniswap V3
- It is to adjust the balancer weights to give closer price compared to real-world price (in exchanges).
- It is introduced in many protocols to reduce the Impermanent Loss.

## Glossary

- Liquidity: used in place of 'fund'
- Market Maker or Liquidity Pool: funder who can deposit money into liquidity pool
- Liquidity Pool (LP): pair of tokens collected
- [More](https://www.gemini.com/cryptopedia/explore#de-fi)
- Liquidity Providers (LPs): addresses providing liquidity to pool reserves.
