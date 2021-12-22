export class CreateLeagueRequest {
    name:string;
    initialBalance:number;

    constructor(leagueName:string, initialBalance:number){
        this.name = leagueName;
        this.initialBalance = initialBalance;
    }

}