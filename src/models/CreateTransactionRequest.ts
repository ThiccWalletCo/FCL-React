export class CreateTransactionRequest {
    currPair: string;
    amount: number;

    constructor(currPair:string, amount:number){
        this.currPair = currPair;
        this.amount = amount;
    }
}