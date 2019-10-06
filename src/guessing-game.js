class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this._max = max;
        this._min = min;
    }

    guess() {
        return this._min + Math.ceil((this._max-this._min)/2)
    }

    lower() {
        this._max = this.guess();
    }

    greater() {
        this._min = this.guess();
    }
}

module.exports = GuessingGame;
