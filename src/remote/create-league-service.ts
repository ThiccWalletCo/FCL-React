import { appClient } from "./app-client"
import { CreateLeagueRequest } from "../models/CreateLeagueRequest";

export const createLeague = async (credentials: CreateLeagueRequest): Promise<boolean> => {
    let resp: boolean = false;

    await appClient.post('/league', credentials).then((response) => {
        alert('League successfully submitted to database!');
        resp = true;
    }).catch((error) => {
        console.log(error);
    });
    
    return new Promise(resolve => {
        resolve(resp);
    });
}