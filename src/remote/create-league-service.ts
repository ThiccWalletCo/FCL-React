import createAuthClient from "./app-auth"
import { CreateLeagueRequest } from "../models/CreateLeagueRequest";

export const createLeague = async (credentials: CreateLeagueRequest): Promise<boolean> => {
    let resp: boolean = false;

    await createAuthClient().post('/league', credentials).then((response) => {
        alert('League successfully submitted to database!');
        resp = true;
    }).catch((error) => {
        console.log(error);
        alert(error);
    });
    
    return new Promise(resolve => {
        resolve(resp);
    });
}