import {useState} from "react";

import League from "./League";
import { getLeagues } from '../remote/league-service';

export default function LeaguesList() {
    let [leagueList, updateLeagueList] = useState([]);

    let leagues = getLeagues().then(leagues => {
        updateLeagueList(leagues);
        console.log(leagueList);

    })

    return (<>
        <h1><u>LEAGUES</u></h1>
        <ul>
            {leagueList.map(league => {
                console.log("test");
                return (
                    <League league={league} key={league} />
                )
              
            })}
        </ul>
    </>)
}