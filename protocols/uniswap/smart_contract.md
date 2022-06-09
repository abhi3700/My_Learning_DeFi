# Uniswap v2 SC

This is about the elements of Uniswap v2 SC.

- A binary SC system: core + periphery.
- Core SC:
  - pair SC creation
  - protocol implementation
  - swap, mint, burn of LP tokens
- Periphery SC: to interact with the protocol
  - swap
  - add/remove liquidity

---

**Uniswap Factory**

Handles 2 things:

- setting of `feeTo` & `feeToSetter` (recipient of '0.3%' fees per trade). In future, it might be set to '0.05%' additional which will go to `feeTo` address.
- create pair contracts for a pair of tokens.

`feeToSetter` can change `feeTo` & `feeToSetter` addresses.
![](../../img/uniswap_sc_factory_1.png)

Use the mapping to store the pair contract address for 2 tokens - A & B.
![](../../img/uniswap_sc_factory_2.png)

get all the pair SCs in array.A check of non-zero address for 1 (smaller) token only & also when adding to `getPair` mapping, it is arranged `getPair[tokenA][tokenB]` where `tokenA` < `tokenB`. This ensures unique storage into mapping for a token pair (compare & push). This means no possibility of `getPair[tokenB][tokenA]` as comparison is already done & pushed into mapping with `index-0` value smaller than `index-1`.
![](../../img/uniswap_sc_factory_2.png)
![](../../img/uniswap_sc_factory_7.png)

> NOTE: Additionally `checkContract()` function can be run in order to check if the contract really exist.

> Here, comparo b/w address is done by first converting hexadecimal to decimal & then comparison.

Event is fired when the pair SC is created using `createPair()` function
![](../../img/uniswap_sc_factory_4.png)

Constructor with `feeToSetter` param
![](../../img/uniswap_sc_factory_5.png)

`feeToSetter` can change `feeTo` & `feeToSetter` addresses.
![](../../img/uniswap_sc_factory_6.png)
