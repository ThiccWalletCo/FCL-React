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
import { League } from './models/League';
import LeaguesList from './containers/LeaguesContainer';
import LeaderboardList from './components/LeaderboardComponent';
import CoinList from './components/PlayerWalletComponent';


function App() {

  let [authUser, setAuthUser] = useState(undefined as Principal | undefined);
  let [currLeague, setCurrLeague] = useState(undefined as League | undefined);


  return (
 
    <div className="App">
      <NavComponent/>
      <Routes>

          {/* {heroes.map(hero => (<Link to={'heroes/' + hero.id} />)} */}

          <Route path="leagues/d" element={<LeaderboardList/>}/>
          <Route path="leagues/d/HappyPonyExplosions3" element={<CoinList/>}/>



          <Route path="/login" element={<LoginComponent currentUser={authUser} setCurrentUser={setAuthUser} />} />
          <Route path="/dashboard" element={<DashboardComponent currentUser={authUser}/>}/>
          <Route path="/price" element={<PriceComponent/>}/>
          <Route path="/leagues" element={<LeaguesList/>}/>
          <Route path="/register" element={<RegistrationComp/>}/>
          {/* <Route path="/leaderboard" element={<LeaderboardList/>}/> */}
          {/* {LeaguesList.map(league => (<Link to={'leagues/'+ league.leagueName} />))} */}
      </Routes>

    </div>

  );
}

export default App;
