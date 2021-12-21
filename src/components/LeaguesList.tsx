import {useState} from "react";

import League from "./League";
import { getLeagues } from '../remote/league-service';

export default function LeaguesList() {
    let [leagueList, updateLeagueList] = useState([]);

    let leagues = getLeagues().then(leagues => {
        updateLeagueList(leagues);
        console.log(leagues);

    })

    return (<>
        <h1><u>LEAGUES</u></h1>
        <ul>
            {leagueList.map(league => {
                console.log(league.leagueName);
                <League leagueName={league} key={league} />
            })}
        </ul>
    </>)
}