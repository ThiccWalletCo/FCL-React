import {Principal} from '../models/Principal';
import {Navigate} from 'react-router-dom';
import React, { SyntheticEvent, useState } from 'react';
import { authenticate } from '../remote/auth-service';

interface ILoginProps{
    currentUser: Principal | undefined,
    setCurrentUser: (nextUser: Principal | undefined) => void
}

export function LoginComponent(props: ILoginProps) {

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [errMsg, setErrMsg] = useState('');
    //const [visible, setVisible] = useState('hidden');


    let updateUsername = (e: SyntheticEvent) => {
        setUsername((e.target as HTMLInputElement).value);
        // console.log('updateUsername invoked');
        // console.log((e.target as HTMLInputElement).value);
    }

    let updatePassword = (e: SyntheticEvent) => {
        setPassword((e.target as HTMLInputElement).value);
        // console.log('updatePassword invoked');
        // console.log((e.target as HTMLInputElement).value);
    }

    let login = async () => {
        try{
            let principal = await authenticate({username, password}).then((resp) => {
                console.log(resp.headers["authorization"]);
            
                props.setCurrentUser(resp.data);
            });
            
            console.log(principal);
        } catch (e: any) {
            //setVisible('showing');
            setErrMsg(e.message);
        }
        //console.log(username, password);
    }

    return (
        props.currentUser ? <Navigate to="/leagues"/>:
        <>
            <h4>Log in to your account</h4>
            <div>
                <input type="text" id="username" placeholder="Enter your username" onChange={updateUsername}/>
                <br/><br/> 
                <input type="password" id="password" placeholder="Enter your password" onChange={updatePassword}/>
                <br/>
                <button id="login-button" onClick={login}>Login</button>
                {/* <h6>style={{visibility: visible ? 'visible' : 'hidden' }}</h6> */}
                {/* <h6 style={{visibility: visible.state, color:"red"}}>incorrect username or password</h6> */}
            </div>
            
        </>
    );
}