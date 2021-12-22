export class WalletRequest{
    username: string;
    leagueName: string;

    constructor(un: string, ln:string){
        this.username = un;
        this.leagueName = ln;
    }
}