"use strict";
/* eslint-disable @typescript-eslint/no-var-requires */
Object.defineProperty(exports, "__esModule", { value: true });
const TestRunner_1 = require("../TestRunner");
const BitfinexClient_1 = require("../../src/exchanges/BitfinexClient");
TestRunner_1.testClient({
    clientFactory: () => new BitfinexClient_1.BitfinexClient(),
    clientName: "BitfinexClient",
    exchangeName: "Bitfinex",
    markets: [
        {
            id: "BTCUSD",
            base: "BTC",
            quote: "USDT",
        },
        {
            id: "ETHUSD",
            base: "ETH",
            quote: "USD",
        },
        {
            id: "ETHBTC",
            base: "ETH",
            quote: "BTC",
        },
    ],
    testConnectEvents: true,
    testDisconnectEvents: true,
    testReconnectionEvents: true,
    testCloseEvents: true,
    hasTickers: true,
    hasTrades: true,
    hasCandles: false,
    hasLevel2Snapshots: false,
    hasLevel2Updates: true,
    hasLevel3Snapshots: false,
    hasLevel3Updates: true,
    ticker: {
        hasTimestamp: true,
        hasLast: true,
        hasOpen: true,
        hasHigh: true,
        hasLow: true,
        hasVolume: true,
        hasQuoteVolume: false,
        hasChange: true,
        hasChangePercent: true,
        hasBid: true,
        hasBidVolume: true,
        hasAsk: true,
        hasSequenceId: true,
        hasAskVolume: true,
    },
    trade: {
        hasTradeId: true,
        hasSequenceId: true,
    },
    l2snapshot: {
        hasTimestampMs: true,
        hasSequenceId: true,
        hasCount: true,
    },
    l2update: {
        hasSnapshot: true,
        hasTimestampMs: true,
        hasSequenceId: true,
        hasCount: true,
    },
    l3snapshot: {
        hasTimestampMs: true,
        hasSequenceId: true,
    },
    l3update: {
        hasSnapshot: true,
        hasTimestampMs: true,
        hasSequenceId: true,
        hasCount: true,
    },
});
//# sourceMappingURL=BitfinexClient.spec.js.map