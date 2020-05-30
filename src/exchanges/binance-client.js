const { BinanceBase } = require("./binance-base");

class BinanceClient extends BinanceBase {
  constructor({
    requestSnapshot = true,
    socketBatchSize = 200,
    socketThrottleMs = 1000,
    restThrottleMs = 1000,
  } = {}) {
    super({
      name: "Binance",
      wssPath: "wss://stream.binance.com:9443/stream",
      restL2SnapshotPath: "https://api.binance.com/api/v1/depth",
      requestSnapshot,
      socketBatchSize,
      socketThrottleMs,
      restThrottleMs,
    });
  }
}

module.exports = BinanceClient;
