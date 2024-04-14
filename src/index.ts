import ccxt from "ccxt";

async function main() {
  // You need to replace 'exchangeId' with a real exchange id from CCXT and provide necessary API credentials
  const exchangeId = "binance";
  const exchangeClass = ccxt[exchangeId];
  const exchange = new exchangeClass({
    timeout: 30000,
    enableRateLimit: true,
  });

  try {
    // Fetching the balance
    await exchange.loadMarkets();
  } catch (error) {}
}

main();
