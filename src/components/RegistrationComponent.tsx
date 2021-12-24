import { Fragment } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import React, { SyntheticEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { CreateUserRequest } from '../models/CreateUserRequest';
import { createUser } from '../remote/create-user-service';
import { requestParamQuery } from '../remote/request-param-check';


export function RegistrationComp() {

    let [navigateOut, setNavigateOut] = useState(false);

    let [username, setUsername] = useState('');
    let [email, setEmail] = useState('');
    let [firstPassword, setFirstPassword] = useState('');
    let [secondPassword, setSecondPassword] = useState('');

    let [usernameTaken, displayUsernameTaken] = useState(false);
    let [emailTaken, displayEmailTaken] = useState(false);
    let [nonmatchingPassword, displayNonmatchingPassword] = useState(false);

    function changeUsername(e: SyntheticEvent) {
        setUsername((e.target as HTMLInputElement).value);
    }

    function changeEmail(e: SyntheticEvent) {
        setEmail((e.target as HTMLInputElement).value);
    }

    function changeFirstPassword(e: SyntheticEvent) {
        setFirstPassword((e.target as HTMLInputElement).value);
    }

    function changeSecondPassword(e: SyntheticEvent) {
        setSecondPassword((e.target as HTMLInputElement).value);
    }

    //--------------------------------------

    function checkUsernameAvailability() {
        if (username.trim()) {
            requestParamQuery(`/user/username?username=`, username).then((bool) => {
                displayUsernameTaken(bool);
            });
        }
    }

    function checkEmailAvailability() {
        if (email.trim()) {
            requestParamQuery(`/user/email?email=`, email).then((bool) => {
                displayEmailTaken(bool);
            });
        }
    }

    function checkPasswordMatch() {
        if (firstPassword === secondPassword) {
            displayNonmatchingPassword(false);
        } else {
            displayNonmatchingPassword(true);
        }
        
    }

    //----------------------------------------

    function sendRegistrationRequest() {
        if(!usernameTaken && !emailTaken && !nonmatchingPassword && !(username.trim() === '') && !(email.trim() === '') && !(firstPassword === '')) {
            let reqBody: CreateUserRequest = new CreateUserRequest(username.trim(), email.trim(), firstPassword);

            createUser(reqBody).then((bool) => {
                setNavigateOut(bool);
            });
        }
    }

    //----------------------------------------

    return (
        <>
        {navigateOut && <Navigate to="/login"/>}
        <Container>
            <h1>Register A New User</h1>

            <Form.Group>
                <Form.Label className="mb-3" id="usernameField">Username:</Form.Label>
                <Form.Control type="text" placeholder="Username" onChange={changeUsername} onBlur={checkUsernameAvailability}/> 
            </Form.Group>

            {usernameTaken && <div className="alert alert-danger" id="nonMatchingPasswordAlert">Username is already in use!</div>}

            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={changeEmail} onBlur={checkEmailAvailability}/>
            </Form.Group>

            {emailTaken && <div className="alert alert-danger" id="nonMatchingPasswordAlert">E-Mail is already in use!</div>}

            <Form.Group className="mb-3" id="firstPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={changeFirstPassword} onBlur={checkPasswordMatch}/>
            </Form.Group>

            <Form.Group className="mb-3" id="secondPassword">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" onChange={changeSecondPassword} onBlur={checkPasswordMatch}/>
            </Form.Group>

            {nonmatchingPassword && <div className="alert alert-danger" id="nonMatchingPasswordAlert">Passwords must match!</div>}

            <Button variant="primary" type="submit" onClick={sendRegistrationRequest}>
                Submit
            </Button>
        </Container>
        </>
    )

}