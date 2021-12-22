import {useState, useEffect} from "react";
import { Link, Navigate } from "react-router-dom";

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
        {/* <ul>
            {leagueList.map(league => {
                return (
                    <League league={league} key={JSON.stringify(league["leagueName"])} />
                )
              
            })}
        </ul> */}
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Creator</th>
                    <th>Initial Balance</th>
                    <th> Action </th>
                 </tr>
            </thead>
            <tbody>
                {leagueList && leagueList.map(league =>
                    <tr key={league["leagueName"]}>
                        <td><Link to={league['leagueName']}> {league["leagueName"]}</Link></td>
                        <td>{league["creatorName"]}</td>
                        <td>{league["initialBal"]}</td>
                        <td><Link to={league['leagueName']}> Join </Link></td>
                    </tr>
                    )}
            </tbody>
        </table>
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
