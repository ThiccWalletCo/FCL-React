import { appClient } from "./app-client"

export const requestParamQuery = async (path: string, value: string):Promise<boolean> => {
    let resp: boolean = true;

    await appClient.get(`${path}${value}`).then(() => {
        resp = false;
    }).catch((error) => {
        console.log(error);
    });

    return new Promise(resolve => {
        resolve(resp);
    });
}