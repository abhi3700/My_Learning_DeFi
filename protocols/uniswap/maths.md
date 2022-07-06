# Maths

Watch [this](https://www.youtube.com/watch?v=CLnlHto-030).

[PPT](./uniswap_v2.pptx)

## Calculate `y` from `xy=k` formula

![uniswap v2 maths 1](../../img/uniswap_v2_maths_1.png)

## Looking at price before & after trade/swap

![uniswap v2 maths 2](../../img/uniswap_v2_maths_2.png)

**Cons**: this creates a lot of volatility in v2 of Uniswap.

---

## Constant product formula

![](../../img/uniswap_cpamm.png)

There are 2 scenarios where this k can behave differently:

1. **Swap**: `k` remains constant during inflow/outflow of `x` & `y`. In other words, we can change the value of `x` & `y`, but `k` remains constant. Here, `x` & `y` are the reserves of the tokens in the pool.
   ![](../../img/uniswap_cpamm_2.png)

E.g. `x` and `y` are the reserves of the tokens in the pool. For example, if you are swapping `DAI` for `WETH`, you are interacting with the `DAI/WETH` smart contract pool. The total amount of `DAI` that the contract holds would be `x`, and the total amount of `WETH` would be `y`.

2. **Provide Liquidity**:
