"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Candle = void 0;
class Candle {
    constructor(timestampMs, symbol, open, high, low, close, volume, period, status, quotevolume, notrades) {
        this.timestampMs = timestampMs;
        this.id = symbol;
        this.open = parseFloat(open);
        this.high = parseFloat(high);
        this.low = parseFloat(low);
        this.close = parseFloat(close);
        this.volume = parseFloat(volume);
        this.period = period;
        this.status = status;
        this.quotevolume = parseFloat(quotevolume);
        this.notrades = notrades;
    }
}
exports.Candle = Candle;
//# sourceMappingURL=Candle.js.map