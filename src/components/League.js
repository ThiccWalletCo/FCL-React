function League(league) {
    return (<>
        <li>
            {console.log(JSON.stringify(league["league"]["leagueName"]))}
            {(league["league"]["leagueName"]) + " League"}
        </li>
    </>)
}

export default League;