import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import { LoginComponent } from './components/LoginComponent';
import { stringify } from 'querystring';
import {Principal} from './models/Principal';
import { DashboardComponent } from './components/DashboardComponent';
import PriceComponent from './components/PriceComponent';

function App() {

  let [authUser, setAuthUser] = useState(undefined as Principal | undefined);

  return (
    <Routes>
        <Route path="/login" element={<LoginComponent currentUser={authUser} setCurrentUser={setAuthUser} />} />
        <Route path="/dashboard" element={<DashboardComponent currentUser={authUser}/>}/>
        <Route path="/price" element={<PriceComponent/>}/>
    </Routes>
  );
}

export default App;
