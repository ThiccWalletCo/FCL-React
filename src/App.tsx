import React, { useState } from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import { stringify } from 'querystring';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import { LoginComponent } from './components/LoginComponent';
import {Principal} from './models/Principal';
import { DashboardComponent } from './components/DashboardComponent';
import PriceComponent from './components/PriceComponent';
import NavComponent from './components/NavbarComponent';

function App() {

  let [authUser, setAuthUser] = useState(undefined as Principal | undefined);

  return (
 
    <div className="App">
      <NavComponent/>
      <Routes>
          <Route path="/login" element={<LoginComponent currentUser={authUser} setCurrentUser={setAuthUser} />} />
          <Route path="/dashboard" element={<DashboardComponent currentUser={authUser}/>}/>
          <Route path="/price" element={<PriceComponent/>}/>
      </Routes>

    </div>

  );
}

export default App;