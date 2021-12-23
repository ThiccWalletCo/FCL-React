import {useState, useEffect} from "react";
import { Link, Navigate } from "react-router-dom";
import { Principal } from "../models/Principal";

import { reqParamQuery } from "../remote/request-param-data";
import { selectLeague } from "../remote/select-league-service";

interface IMyLeaugeProps {
    currentUser: Principal | undefined,
    setLeague: (nextLeague: string) => void
}
export default function MyLeaguesComponent(props:IMyLeaugeProps) {
    let [leagueList, updateLeagueList] = useState([]);

    function updateCurrLeague(e:any){
        console.log( e.target.innerText);
        props.setLeague(e.target.innerText);
        selectLeague(e.target.innerText).then((res) => {
            console.log("~~~~ FLAG MyLeaguesComponent L.19 ~~~~")
            console.log(res)
        })
    }
    
    useEffect( () => {
        if (props.currentUser){
            reqParamQuery("/league/user=", props.currentUser.id).then((leagues) => {
                if (leagueList.length == 0) updateLeagueList(leagues);
            });
        }
    });

    return (<>
        <h1><u>MY LEAGUES</u></h1>
    
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Creator</th>
                    <th>Initial Balance</th>
                 </tr>
            </thead>
            <tbody>
                {leagueList && leagueList.map(league =>
                    <tr key={league["leagueName"]}>
                        {/* <td><Link to={league['leagueName']} onClick={updateCurrLeague}> {league["leagueName"]}</Link></td> */}
                        <td><Link to={'/leaderboard'} onClick={updateCurrLeague}> {league["leagueName"]}</Link></td>
                        <td>{league["creatorName"]}</td>
                        <td>{league["initialBal"]}</td>
                    </tr>
                    )}
            </tbody>
        </table>
    </>)
}