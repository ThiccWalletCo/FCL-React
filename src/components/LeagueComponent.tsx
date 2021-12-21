import { League } from '../models/League';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getLeagues } from '../remote/league-service';
interface ILeagueProps{
    currLeague: League | undefined;
    setCurrLeague: (nextLeague: League | undefined) => void;
}

export function LeagueComponent() {
    let [errMsg, setErrMsg] = useState('');
    const [count, setcount] = useState(0);

    let leagues = async () => {
        try{
            let leagues = await getLeagues();
            console.log(leagues);
            for(let k = 0; k < leagues.length; k++){
                const para = document.createElement("p");//!.innerHTML = averages[1].toString();
                const node = document.createTextNode(leagues[k]["leagueName"]);
                para.append(node);
                const element = document.getElementById("display");
                element?.appendChild(para);
            }
        } catch(e:any){
            setErrMsg(e);
        }
    }


    return (
     <>
    <div>
        {/* <p>counting: {count}</p> */}
        {/* <h3 id="display"> {} </h3> */}
        <h3 id="display"> Example count {count} </h3>
        <button onClick={leagues}>display leagues</button>

    </div>
    </>
    );
}