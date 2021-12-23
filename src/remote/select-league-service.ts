import createAuthClient from "./app-auth"

export const selectLeague = async (leagueName: string): Promise<boolean> => {
    let res: boolean = false;

    await createAuthClient().post(`/wallet/select/${leagueName}`).then((response) => {
        localStorage.setItem('fcl-auth-token', response.headers["authorization"])
        res = true;
    }).catch((error) => {
        console.log(error);
    });
    
    return new Promise(resolve => {
        resolve(res);
    });
}