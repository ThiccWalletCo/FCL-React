import axios from "axios";

export default function createAuthClient() {
    let token:any;

    if (localStorage.getItem("fcl-auth-token")) {
        token = localStorage.getItem("fcl-auth-token");
    }
    else {
        token = "";
    }

    const appClient = axios.create({
        baseURL: 'http://api.fantasycoinleague.club',
        // baseURL: 'http://localhost:5000',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    });

    return appClient
}

