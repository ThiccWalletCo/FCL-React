import { appClient } from "./app-client"

export const reqParamQuery = async (path: string, value: string) => {
    let resp = await appClient.get(`${path}${value}`);

    if(resp.status==500){
        throw resp.data;
        //TODO: figure out what exceptions are actually thrown for this endpoint
    }

    if(resp.status==200){
        console.log('successfully retrieved data');
    }
    return resp.data;
}