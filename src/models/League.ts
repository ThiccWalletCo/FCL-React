export class League {
    leagueName:string;
    initialBal:string;
    creatorName:string;
    dateCreated:string;

    constructor(leagueName:string, initialBalance:string, creatorName:string, dateCreated:string){
        this.leagueName = leagueName;
        this.initialBal = initialBalance;
        this.creatorName = creatorName;
        this.dateCreated = dateCreated;
    }
}
export {};