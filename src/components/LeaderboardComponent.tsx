import {useState, useEffect} from "react";
import { Link, Navigate } from "react-router-dom";

import League from "../components/LeagueComponent";
import { getLeagues } from '../remote/league-service';
import { reqParamQuery } from "../remote/request-param-data";

// ILeaderboardProps

export default function LeaderboardList({leagueName}:{leagueName: string}) {
    let [playerList, updatePlayerList] = useState([]);
    
    useEffect( () => {
        console.log(playerList);
        reqParamQuery('leaderboard/league=', leagueName).then((players) => {
            if (playerList.length == 0) updatePlayerList(players);
            console.log(players);
        });
       
    }, []);

    // function checkUsernameAvailability() {
    //     if (username) {
    //         requestParamQuery(`/user/username?username=`, username).then((bool) => {
    //             displayUsernameTaken(bool);
    //         });
    //     }
    // }

    return (<>
        <h1><u>THICC WALLETS</u></h1>

        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Balance</th>
                 </tr>
            </thead>
            <tbody>
                {playerList && playerList.map(player =>
                    
                    <tr key={player['username']}>
                        <td><Link to={player['username']}> {player['username']}</Link></td>
                        <td>{player['balance']}</td>
                        {/* <td><Link to={league['leagueName']}> Join </Link></td> */}
                        {console.log(player)}
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
export {}