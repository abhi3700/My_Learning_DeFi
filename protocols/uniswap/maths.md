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

- Calculate the amount of output tokens based on `xy = k`. [Source](https://www.youtube.com/watch?v=IL7cRj5vzEU)

```console
// without trading/swap fee
(x + dx)(y - dy) = k
or, (x + dx)(y - dy) = xy  [as k remains constant during swap]

dy = y - xy/(x + dx)
dy = (xy + ydx - xy)/(x + dx)
dy = ydx/( x + dx)

//-----
// with trading/swap fee
// Here, r = 1 - swap_fee = 1 - (0.3/1000) = 0.997
(x + rdx)(y - dy) = k
or, (x + dx)(y - dy) = xy  [as k remains constant during swap]

dy = y - xy/(x + rdx)
dy = (xy + yrdx - xy)/(x + rdx)
dy = yrdx/( x + rdx)

//-----
E.g.
If the trading fee is `0.3%` => remaining dx becomes `0.997 * dx`

dy = y * 0.997 * dx/(x + 0.997 * dx)
```

2. **Provide Liquidity**:
