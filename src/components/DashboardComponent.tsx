import {Principal} from '../models/Principal';
import {Navigate} from 'react-router-dom';
// import PriceComponent from './LoginComponent';

interface IDashboardProps{
    currentUser: Principal | undefined
}

export function DashboardComponent(props: IDashboardProps){
    return(
        !props.currentUser ? <Navigate to="/login"/>: //<Navigate to="/price"/>
        <h1>You are now logged in as {props.currentUser.username}</h1>
    );
}