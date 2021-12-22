import { CoinResponse } from "./CoinResponse";

export class WalletResponse{
    username: string;
    totalWalletValue: number;
    usdBalance:number;
    coins:CoinResponse[];

    constructor(un: string, twv:number, usdb:number, coins:CoinResponse[]){
        this.username = un;
        this.totalWalletValue = twv;
        this.usdBalance = usdb;
        this.coins = coins;
    }
}