import { appClient } from "./app-client"
import { CreateUserRequest } from "../models/CreateUserRequest";

export const createUser = async (credentials: CreateUserRequest): Promise<boolean> => {
    let resp: boolean = false;

    await appClient.post('/user', credentials).then((response) => {
        alert('User successfully submitted to database!');
        resp = true;
    }).catch((error) => {
        console.log(error);
    });
    
    return new Promise(resolve => {
        resolve(resp);
    });
}