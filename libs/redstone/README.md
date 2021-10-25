# Redstone-API

## About
* Data ecosystem for DeFi
* On-chain data storage into Arweave Blockchain via Smartweave contracts.
* The one-time fee is given to the Arweave miners for ensuring permanent storage (approx. 100 years).

> Arweave offers also a neat monetisation model with the Profit Sharing Token rewarding providers for high-quality data.

* Easy to use: You don't need any API keys. Just install the npm package and add a single line of code.

## Problem
* The major problem in DeFi was to manage on-chain storage which is of huge size like real-time price.

## Installation
* `npm install redstone-api`

> generates a `package.json` file in the root of project directory.

## Getting Started
### Write code in JS
* Task: to get a price of a token
* Write this code in a file `getPrice.js`
```js
const redstone = require('redstone-api');

const price  = redstone.getPrice("BTC").then((price) => {
	// the timestamp is in millisec. So, divided by 1000.
	console.log(`price at ${price.timestamp/1000} is ${price.value}.`);
});
```

### Run
* on terminal use command: `node getPrice.js`
```console
Price at 1635195734.65 is 62584.190955
```

## Coding
* 2 ways to import `redstone`
	- Using `Node.js`: `const redstone = require('redstone-api');`
	- Using `ES6`: `import redstone from 'redstone-api';`


## Examples
### Redstone Simple example
![](https://github.com/redstone-finance/redstone-api/blob/b24abfdc35bc6b5f94abb773e8a54857aa65945e/docs/redstone-simple-example.gif)

### Redstone Query example
![](https://github.com/redstone-finance/redstone-api/blob/b24abfdc35bc6b5f94abb773e8a54857aa65945e/docs/redstone-query-example.gif)

### Redstone Symbols example
![](https://github.com/redstone-finance/redstone-api/blob/b24abfdc35bc6b5f94abb773e8a54857aa65945e/docs/redstone-symbols-example.gif)


## References
* [Github](https://github.com/redstone-finance/redstone-api)
* [Documentation](https://api.docs.redstone.finance/)