import { Fragment } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import React, { SyntheticEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { CreateLeagueRequest } from '../models/CreateLeagueRequest';
import { createLeague } from '../remote/create-league-service';
import { requestParamQuery } from '../remote/request-param-check';


export function CreateLeagueComponent() {

    let [navigateOut, setNavigateOut] = useState(false);

    let [leagueName, setLeagueName] = useState('');
    let [initialBal, setInitialBal] = useState('');

    let [leagueNameTaken, displayLeagueNameTaken] = useState(false);
    let [invalidInitialBal, displayInvalidInitialBal] = useState(false);

    function changeLeagueName(e: SyntheticEvent) {
        setLeagueName((e.target as HTMLInputElement).value);
    }

    function changeInitialBal(e: SyntheticEvent) {
        setInitialBal((e.target as HTMLInputElement).value);
    }

    //--------------------------------------

    function checkLeagueNameAvailability() {
        if (leagueName) {
            requestParamQuery(`/league/name?name=`, leagueName.trim()).then((bool) => {
                displayLeagueNameTaken(bool);
            });
        }
    }

    function checkInitialBalValidity() {
        if (Number(initialBal) < 1) {
            displayInvalidInitialBal(true)
        } else if (Number.isNaN(initialBal)) {
            displayInvalidInitialBal(true)
        } else {
            displayInvalidInitialBal(false)
        }
    }

    //----------------------------------------

    function sendLeagueCreationRequest() {
        if(!leagueNameTaken && !(leagueName === '') && (Number(initialBal) > 1)) {
            let reqBody: CreateLeagueRequest = new CreateLeagueRequest(leagueName.trim(), Number(initialBal));

            createLeague(reqBody).then((bool) => {
                setNavigateOut(bool);
            });
        }
    }

    //----------------------------------------

    return (
        <>
        {navigateOut && <Navigate to="/leagues"/>}
        <Container>
            <h1>Register A New League</h1>

            <Form.Group>
                <Form.Label className="mb-3" id="leagueNameField">League Name:</Form.Label>
                <Form.Control type="text" placeholder="League Name" onChange={changeLeagueName} onBlur={checkLeagueNameAvailability}/> 
            </Form.Group>

            {leagueNameTaken && <div className="alert alert-danger" id="invalidLeagueAlert">League name is already in use!</div>}

            <Form.Group className="mb-3" id="startingBalanceLeague">
                <Form.Label>Starting Balance:</Form.Label>
                <Form.Control type="number" placeholder="Starting Balance" onChange={changeInitialBal} onBlur={checkInitialBalValidity}/>
            </Form.Group>

            {invalidInitialBal && <div className="alert alert-danger" id="invalidInitialBalAlert">Starting amount must be a number larger than 1!</div>}

            <Button variant="primary" type="submit" onClick={sendLeagueCreationRequest}>
                Submit
            </Button>
        </Container>
        </>
    )

}