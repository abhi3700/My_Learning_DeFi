# Flash loan

## About

### Introduction

If you take out a loan at a conventional bank, you need to provide collateral. For example, mortgages commonly use the mortgaged house as collateral. If the borrower defaults on the loan, then the bank can repossess their collateral. Banks need collateral to protect themselves against losing money if a borrower defaults.

> Flash loans are designed to eliminate the need for collateral by making it impossible for a borrower to default on a loan.

### What happens

- A transaction on the blockchain can actually include multiple different transactions, including value transfers and execution of smart contract code.
- A flash loan is a transaction in which a user borrows some tokens, performs some actions using them, and repays the initial loan at the end of the transaction.

### Why safe

- Flash loans eliminate the need for collateral because blockchain transactions are “all or nothing.” If a transaction fails for some reason, the blockchain’s state is rolled back to the point before the transaction began and none of the actions included in it are performed.
- It is impossible for a flash loan to fail in a way that allows the initial borrow to be performed without the final repayment executing as well. This eliminates the risk to lenders and makes loans without collateral possible in DeFi.

### lender & borrower

- Without the need for collateral, borrowers can get loans for much more than they could otherwise.
- With zero risk of default, a lender can safely loan tens or hundreds of thousands of dollars in cryptocurrency to an unknown user.

### Cons

The leverage that this provides makes flash loan attacks possible.

## Technical

### How a transaction looks like

- In [this](https://etherscan.io/tx/0xe2a94c2d942edf065cad5762e4969f447ca3b6583c6266ca7c2d7a8031b514e2), the following activity happened:

```
1. Borrow 4,527.57701089233570703 DAI from dYdX.
2. Swap 4,516.258068365104867763DAIFor0.947495821799234712 Ether on Sushiswap.
3. Swap 0.947495821799234712 Ether for 3,095.933506035 AMPL on Sushiswap.
4. Repay 3,000.215489137 AMPL to Aave Protocol V2 & Withdraw 4,527.57701089233570703 DAI from Aave Protocol V2.
5. Repay 4,527.577010892335707032 DAI to dYdX.
```

- Here, the borrower wanted to repay it's loan debt of 3000 AMPL tokens. And in achieving this, the user does so many transactions.

## Use cases

### 1. First flashloan ever

1. Borrow DAI from flash loan
2. Convert DAI to SAI on MakerDAO's migration.
3. Swap SAI with DAI on Uniswap
4. Get DAI & pay to the flash loan

```
100 DAI <- [Flash loan contract]
100 DAI <-> 100 SAI on [MakerDAO's migration contract]
100 SAI <-> 110 DAI on [Uniswap] as price(SAI) : price(DAI) = 1:1.1
110 DAI -> [Flash loan contract]

// Hence, profit of (10 DAI - fees)
```

## References

- [REAL LIFE Profitable Flashloan examples](https://www.youtube.com/watch?v=wZGvejuhXEc)
- [Flash loan transaction](https://etherscan.io/tx/0xe2a94c2d942edf065cad5762e4969f447ca3b6583c6266ca7c2d7a8031b514e2)
