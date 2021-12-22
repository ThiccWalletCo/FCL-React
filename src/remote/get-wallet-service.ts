import { WalletRequest } from "../models/WalletRequest";
import { appClient } from "./app-client"

export const getWallet =async (req:WalletRequest) => {

    console.log('((((((((((((((');
    console.log(req);

    let resp = await appClient.post('/wallet/get', req);

    console.log(resp);

    if(resp.status==500){
        throw resp.data;
        //TODO: figure out what exceptions are actually thrown for this endpoint
    }

    if(resp.status==200){
        console.log('successfully retrieved data');
    }
    return resp.data;
}