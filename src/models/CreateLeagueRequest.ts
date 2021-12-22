export class CreateLeagueRequest {
    leagueName:string;
    initialBal:number;

    constructor(leagueName:string, initialBalance:number){
        this.leagueName = leagueName;
        this.initialBal = initialBalance;
    }

}