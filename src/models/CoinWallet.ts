export default class CoinWallet {
    currPair: string;
    amount: number;
    usdValue: number;

    constructor(currPair: string, amount: number, usdValue: number) {
        this.currPair = currPair;
        this.amount = amount;
        this.usdValue = usdValue;
    }
}