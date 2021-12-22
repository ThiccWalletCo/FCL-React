// import { appClient } from "./app-client"

// export const requestParamQuery = async (path: string, value: string):Promise<boolean> => {
//     let resp: boolean = true;

//     await appClient.get(`${path}${value}`).then(() => {
//         resp = false;
//     }).catch((error) => {
//         console.log(error);
//     });

//     return new Promise(resolve => {
//         resolve(resp);
//     });
// }

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