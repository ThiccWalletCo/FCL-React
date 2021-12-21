import {useState, useEffect} from "react";

import League from "../components/LeagueComponent";
import { getLeagues } from '../remote/league-service';

export default function LeaguesList() {
    let [leagueList, updateLeagueList] = useState([]);
    
    useEffect( () => {
        getLeagues().then((leagues) => {
            if (leagueList.length == 0) updateLeagueList(leagues);
        });
       
    });

    return (<>
        <h1><u>LEAGUES</u></h1>
        <ul>
            {leagueList.map(league => {
                return (
                    <League league={league} key={JSON.stringify(league["leagueName"])} />
                )
              
            })}
        </ul>
    </>)
}

// function League(league: any) {
//     return (<>
//         <li>
//             {console.log(JSON.stringify(league["league"]["leagueName"]))}
//             {(league["league"]["leagueName"]) + " League"}
//         </li>
//     </>)
// }
