import { appClient } from "./app-client"
import createAuthClient from "./app-auth";

export const getLeagues =async () => {
    let resp = await appClient.get('/league');

    if(resp.status==500){
        throw resp.data;
        //TODO: figure out what exceptions are actually thrown for this endpoint
    }

    if(resp.status==200){
        console.log('successfully retrieved data');
    }
    return resp.data;
}

export const joinLeague = async (leagueName:string) => {
    let appClient = await createAuthClient();

    appClient.post(`/wallet/${leagueName}`).then( () => {
        alert(`Congratulations, you are now a member of ${leagueName}!`)
    })
}