import React, { useState } from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
// import { stringify } from 'querystring';
// import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import { LoginComponent } from './components/LoginComponent';
// import  LeaderboardList  from './components/LeaderboardComponent';

import {Principal} from './models/Principal';
import { DashboardComponent } from './components/DashboardComponent';
import PriceComponent from './components/PriceComponent';
import NavComponent from './components/NavbarComponent';
import {RegistrationComp} from './components/RegistrationComponent';
import { CreateLeagueComponent } from './components/CreateLeagueComponent'
import { League } from './models/League';
import LeaguesList from './containers/LeaguesContainer';
import LeaderboardList from './components/LeaderboardComponent';
import { WalletRequest } from './models/WalletRequest';
import  WalletContents  from './components/WalletComponent';

function App() {

  let [authUser, setAuthUser] = useState(undefined as Principal | undefined);
  let [authWallet, setAuthWallet] = useState(undefined as WalletRequest | undefined);
  // let [username, setUsername] = useState("");
  // let [leagueName, setLeagueName] = useState("");
  let [currLeague, setCurrLeague] = useState("");  //(undefined as League | undefined);
  

  return (
 
    <div className="App">
      <NavComponent/>
      <Routes>

          {/* {heroes.map(hero => (<Link to={'heroes/' + hero.id} />)} */}

          <Route path="/leaderboard" element={<LeaderboardList leagueName={currLeague} setCurrWallet={setAuthWallet}/>}/>
          <Route path="/wallet" element={<WalletContents currWallet={authWallet} /> } /> 
          {/* <Route path="/wallet" element={<WalletContents leagueName={leagueName} username={username} /> } />  */}


          <Route path="/login" element={<LoginComponent currentUser={authUser} setCurrentUser={setAuthUser} />} />
          <Route path="/dashboard" element={<DashboardComponent currentUser={authUser}/>}/>
          {/* <Route path="/price" element={<PriceComponent currWallet={authWallet} setCurrWallet={setAuthWallet}/>}/> */}
          <Route path="/leagues" element={<LeaguesList setLeague={setCurrLeague} /> }/>
          <Route path="/register" element={<RegistrationComp/>}/>
          <Route path="/createLeague" element={<CreateLeagueComponent/>} />
          {/* <Route path="/leaderboard" element={<LeaderboardList/>}/> */}
          {/* {LeaguesList.map(league => (<Link to={'leagues/'+ league.leagueName} />))} */}
      </Routes>

    </div>

  );
}

export default App;
