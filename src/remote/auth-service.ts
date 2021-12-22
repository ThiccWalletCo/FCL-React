import { Principal } from "../models/Principal";
import { appClient } from "./app-client"

export const authenticate = async(credentials: {username: string, password: string}) => {

    let resp = await appClient.post('/login', credentials);

    if(resp.status == 401) {
        throw resp.data;
    }

    if(resp.status == 200) {
        console.log('authentication success!');
        //return resp.data;
        //TODO: refactor backend to return principal object rather than no content
    }

    return resp
    //return new Principal('123456', 'paris');

}