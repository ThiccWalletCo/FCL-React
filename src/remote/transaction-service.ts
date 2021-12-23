import { CreateTransactionRequest } from "../models/CreateTransactionRequest";
import createAuthClient from "./app-auth"

export const submitPurchase = async (request: CreateTransactionRequest): Promise<boolean> => {
    let res: boolean = false;

    await createAuthClient().post('/coin/buy', request).then((response) => {
       // alert('Transaction successfully submitted!');
        res = true;
    }).catch((error) => {
        console.log(error);
        alert(error);
    });

    return new Promise(resolve => {
        resolve(res);
    });
}

export const submitSale = async (request: CreateTransactionRequest): Promise<boolean> => {
    let res: boolean = false;

    await createAuthClient().post('/coin/sell', request).then((response) => {
      //  alert('Transaction successfully submitted!');
        res = true;
    }).catch((error) => {
        console.log(error);
        alert(error);
    });

    return new Promise(resolve => {
        resolve(res);
    });
}