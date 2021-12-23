import {useState, useEffect} from "react";
import { Link, Navigate } from "react-router-dom";

import League from "../components/LeagueComponent";
import { WalletRequest } from "../models/WalletRequest";
import { getLeagues } from '../remote/league-service';
import { reqParamQuery } from "../remote/request-param-data";

interface ILeaderboardProps{
    leagueName: string,
    // setUsername: React.Dispatch<React.SetStateAction<WalletRequest | undefined>>
    setCurrWallet: (nextWallet: WalletRequest | undefined) => void
}

export default function LeaderboardList(props:ILeaderboardProps){//{leagueName}:{leagueName: string}) {
    let [playerList, updatePlayerList] = useState([]);
    
    useEffect( () => {
        console.log(playerList);
        reqParamQuery('leaderboard/league=', props.leagueName).then((players) => {
            if (playerList.length == 0) updatePlayerList(players);
            console.log(players);
        });
       
    }, []);

function updateWalletRequests(e:any) {
    let req = new WalletRequest(e.target.innerText, props.leagueName);
    console.log('*****************');
    console.log(req);
    props.setCurrWallet(req);
}
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
                        <td><Link to={"/wallet"} onClick={updateWalletRequests}> {player['username']}</Link></td>
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
//export {}