import axios from "axios";

export const appClient = axios.create({
    baseURL: 'http://api.fantasycoinleague.club',
    headers: {
        'Content-Type': 'application/json',
    }
});