/* 
  Source: https://docs.uniswap.org/sdk/2.0.0/guides/quick-start
  YT: https://www.youtube.com/watch?v=0Im5iaYoz1Y
  
  Execution:
  $ node index.js
*/
const {
  ChainId,
  Fetcher,
  WETH,
  Route,
  Trade,
  TokenAmount,
  TradeType,
} = require("@uniswap/sdk");
const ethers = require("ethers");

require("dotenv").config({
  path: require("path").resolve(__dirname, "./.env"),
});

const INFURA_API_KEY = process.env.INFURA_API_KEY;

const url = `https://mainnet.infura.io/v3/${INFURA_API_KEY}`;
const customHttpProvider = new ethers.providers.JsonRpcProvider(url);

const chainId = ChainId.MAINNET;
const tokenAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // DAI token address

const fetch_dai_eth = async () => {
  // fetch dai token data via chainId, tokenAddress, rpc_url
  const dai = await Fetcher.fetchTokenData(
    chainId,
    tokenAddress,
    customHttpProvider
  );
  const weth = WETH[chainId];
  console.log(`WETH: ${weth.address}`);
  console.log(`DAI: ${dai.address}`);
  console.log("-".repeat(45));

  // create a pair
  const pair = await Fetcher.fetchPairData(dai, weth, customHttpProvider);
  // fetch from route
  const route = new Route([pair], weth);

  // to get execution price
  const trade = new Trade(
    route,
    new TokenAmount(weth, "100000000000000000"),
    TradeType.EXACT_INPUT
  );
  console.log("Mid Price WETH --> DAI:", route.midPrice.toSignificant(6));
  // 'midprice' in the context of Uniswap is the price that reflects the ratio
  // of reserves in one or more pairs. It also represents the price at which
  // you could theoretically trade a tiny amount (ε) of one token for the other.
  console.log(
    "Mid Price DAI --> WETH:",
    route.midPrice.invert().toSignificant(6)
  );
  console.log("-".repeat(45));
  // 'Execution price' is the ratio of assets sent/received.
  // The Uniswap swapping of pairs is based on execution price rather than Mid-price.
  console.log(
    "Execution Price WETH --> DAI:",
    trade.executionPrice.toSignificant(6)
  );
  console.log(
    "Mid Price after trade WETH --> DAI:",
    trade.nextMidPrice.toSignificant(6)
  );
};

// Run
fetch_dai_eth();
