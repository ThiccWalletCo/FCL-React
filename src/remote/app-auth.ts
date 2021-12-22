import axios from "axios";

export default function createAuthClient(token: string) {

    const appClient = axios.create({
        baseURL: 'http://api.fantasycoinleague.club',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    });

    return appClient
}

