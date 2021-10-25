/*
	Get Price of a token (in USD)
*/

// Using Node.js method
const redstone = require('redstone-api');

// M-1 [RECOMMENDED]
const price  = redstone.getPrice("BTC").then((price) => {
	// the timestamp is in millisec. So, divided by 1000.
	console.log(`price at ${price.timestamp/1000} is ${price.value}.`);
});

// M-2
// const price = await redstone.getPrice("BTC");
// console.log(`price at ${price.timestamp} is ${price.value}.`);
