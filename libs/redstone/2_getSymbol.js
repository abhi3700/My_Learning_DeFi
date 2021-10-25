/*
	Get Symbols of available tokens
*/

// Using Node.js method
const redstone = require('redstone-api');

const {symbols} = redstone;

console.log(typeof symbols);		// -> Object
console.log(`${symbols.BTC}`);		// -> BTC

const price = redstone.getPrice(symbols.BTC).then((price) => {
	console.log(`Price at ${price.timestamp/1000} is ${price.value}`);
});
