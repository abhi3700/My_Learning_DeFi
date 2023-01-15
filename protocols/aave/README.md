# Aave

## Overview

One of the lending & borrowing Protocol for DeFi
![](../../img/aave.png)

**Features**:

- Lending & Borrowing
- Flash Loans (`batch` in v2)
- Governance (`new` in v2)
  - gov token i.e. `aToken` is used for delegation
- All `aToken` are ERC20 tokens which has approve/transfer functions as gas-less (EIP-2612).

### When to use Aave as a Lender

- You want to earn interest on your unused assets
- `aToken` received as LP Token in Aave AMM which is rewarded with accrued interest based on protocol parameters & demand.

---

The solidity code for "**Deposit ERC20 -> Receive aToken (1:1)**":

```solidity
address asset = address(0x6B175474E89094C44Da98b954EedeAC495271d0F);    // DAI
uint256 amount = 100 * 1e18; // 100 DAI
address onBehalfOf = msg.sender;   // depositor
uint16 referralCode = 0;    // 0 for no referral, 1 for Aave referral, 2 for Referral 2, etc. it's mainly for affiliate program to earn referral fees.

IERC20(asset).approve(address(lendingPool), amount);
lendingPool.deposit(asset, amount, onBehalfOf, referralCode);
```

---

Similarly for "**withdraw aToken -> Receive ERC20**":

```solidity
address asset = address(0x6B175474E89094C44Da98b954EedeAC495271d0F);    // DAI
uint256 amount = uint256(-1); // max. amount
address to = msg.sender;   // receiver

lendingPool.withdraw(asset, amount, to);
```

### When to use Aave as a Borrower

- When you need to borrow assets
- Borrow assets based on the amount of collateral deposited (over-collateralized)
- Also can use `aToken` as collateral to borrow supported assets at either a stable or variable interest rate.

---

The solidity code for "**Locked `aToken` collateral -> Loans!**":

```solidity
address asset = address(0x6B175474E89094C44Da98b954EedeAC495271d0F);    // DAI
uint256 amount = 100 * 1e18; // 100 DAI
uint256 interestRateMode = 1;    // 1 for stable, 2 for variable
uint16 referralCode = 0;
address onBehalfOf = msg.sender;   // borrower

lendingPool.borrow(asset, amount, interestRateMode, referralCode, onBehalfOf);
```

---

Swap b/w variable & stable interest rate:

```solidity
address asset = address(0x6B175474E89094C44Da98b954EedeAC495271d0F);    // DAI
uint256 interestRateMode = 1;    // 1 for stable, 2 for variable

lendingPool.swapBorrowRateMode(asset, interestRateMode);
```

> Sometimes, the after-swap interest rate is not the same as the before-swap interest rate. This is because the interest rate is calculated based on the current market conditions. And it might be the case that the new interest rate is higher/lower than the previous one.

---

Repay the loan at any time:

```solidity
address asset = address(0x6B175474E89094C44Da98b954EedeAC495271d0F);    // DAI
uint256 amount = 100 * 1e18; // 100 DAI
uint256 interestRateMode = 1;    // 1 for stable, 2 for variable
address onBehalfOf = msg.sender;   // borrower

IERC20(asset).approve(address(lendingPool), amount);    // approve the SC to spend the DAI from borrower in order to repay the loan

lendingPool.repay(asset, amount, interestRateMode, onBehalfOf);
```

### Credit Delegation

💡 I think this is the most interesting feature of Aave.

- Users:
  - Delegator: The user who delegates their credit to another user.
  - Delegatee: The user who borrows on behalf of the delegator.
- Credit delegation allows a user to delegate their credit to another user.
- It means that the delegated user can borrow on behalf of the delegator.
- The delegator can also set a maximum amount of credit that can be borrowed on their behalf.

    <img src="../../img/aave_credit_delegation.png" width="600" height="400" />

  Here, if `amountinWei` is set to `uint256(-1)`, then the delegated user can borrow upto any amount of DAI on behalf of the delegator. E.g. if the delegator has deposited 100 DAI as collateral, then the delegatee can use upto 100 DAI as delegator as collateral in order to borrow some other token.

  To create a credit delegated loan with repayment timeframe, one needs to create a SC on top of the existing suite of Aave contracts which will be responsible for the repayment of the loan.

  ![](../../img/aave_credit_delegation-2.png)

> Q. If there is no collateral above then, don't you think it is dangerous for the loan to be defaulted.
>
> A.
> Yes, credit delegation can be risky for the lender if the borrower defaults on the loan. Without collateral to secure the loan, the lender may have difficulty recovering the borrowed funds in the event of default. This is why lenders will often perform thorough credit checks and evaluate the borrower's ability to repay the loan before granting credit. Additionally, lenders may also require that the borrower provide a personal guarantee or co-signer to reduce the risk of default.
>
> However, credit delegation can also be beneficial for both the lender and the borrower, as it allows the borrower to access credit that they may not have been able to obtain on their own. This can be especially useful for small businesses or individuals with limited credit history. It also allows the lender to earn interest on the loaned funds, and to potentially expand their customer base.

![](../../img/aave_credit_delegation-repay.png)

### Flash loans

- Flash loans are a special type of loan that allow users to borrow funds without collateral.
- It all happens in 1 block, also called One Block Borrows
- Mostly developers require flash loans to perform arbitrage or to perform some other complex operations. So, very less GUI like furucombo, etc. provide flash loans.
- [EIP-3156: Flash Loans](https://eips.ethereum.org/EIPS/eip-3156)

![](../../img/aave_flash_loan.png)

![](../../img/aave_flash_loan-flowchart.png)

---

Use cases

- **Collateral Swap**

![](../../img/aave_flash_loan-collateralswap.png)

- **Arbitrage**

![](../../img/aave_flash_loan-arbitrage.png)

- **Batch Flash Loans**

![](../../img/aave_flash_loan-batch.png)

---

Code for flash loan contract:

![](../../img/aave_flash_loan-call_func.png)

Code for executing flash loan:

![](../../img/aave_flash_loan-execution.png)

---

![](../../img/aave_flash_loan-workflow.png)

### Governance

Aave governance is a decentralized, permissionless, and transparent process that allows the community to vote on proposals that affect the protocol.

![](../../img/aave_governance.png)

---

delegate voting power to a delegatee:

![](../../img/aave_governance-delegate.png)

---

Submit on-chain vote:

![](../../img/aave_governance-vote-onchain.png)

---

Staking in governance:

![](../../img/aave_governance-staking.png)

### Platform integration

![](../../img/aave_platform_integration-defisaver.png)

![](../../img/aave_platform_integration-flashloan_gui.png)

![](../../img/aave_platform_integration-nft-aavegotchi.png)

## Getting Started

> Aave v3 used here.

### Protocol

### Flash loan

1. Get faucets (DAI, USDC, USDT, LINK, [GoerliETH](https://goerlifaucet.com/)) for testnet from [here](https://app.aave.com/faucet/).
   ![](../../img/aave_faucet.png)
2. Sequence of steps:

```mermaid
sequenceDiagram
  autonumber
  participant EOA
  participant CustomFlashLoan
  Note right of CustomFlashLoan: has all the <br/> activities like arbitrage, <br/>collateralSwap, etc.
  participant AavePoolSC

  EOA ->> AavePoolSC: call `flashLoan()`/`flashLoanSimple()` function
  AavePoolSC ->> CustomFlashLoan: transfer funds >> call executeOperation()
```

## References

- [Aave v3 contracts with The3D | Solidity Fridays](https://youtu.be/l5RKksbi8e8)
- All are **SAME**:
  - [Aave 101 for Devs](https://www.youtube.com/watch?v=pzVo1m_DK80) ✅
  - [Codeup 40: Aave v2 technical deep dive (featuring David Truong)](https://youtu.be/0gTMwmNdSRE) ✅
  - [Aave 101 for Developers [MarketMake] by ETHGlobal](https://www.youtube.com/watch?v=AMAMvKc-O2s) ✅
- [Aave: Flash Loans and Credit Delegation in Depth [MarketMake]](https://www.youtube.com/watch?v=MsDfTx1VzYA)
- [Flash Loan Arbitrage | Aave Flash Loan Tutorial | by Block Explorer](https://www.youtube.com/watch?v=PtMs8FZJhkU)
- [Aave Liquidity Pool Tutorial | DeFi Liquidity Pools | Crypto passive income | | by Block Explorer](https://www.youtube.com/watch?v=qs4KK9zD_9U)
- [Building in DeFi With Aave | freeCodeCamp — Lesson #10](https://www.youtube.com/watch?v=vgOnZkjifAs)
