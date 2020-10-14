import React, { useState, createContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import AddDoctors from './components/DashBoard/AddDoctors/AddDoctors';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/addDoctors">
            <AddDoctors/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/dashboard/appointment">
            <DashBoard />
          </Route>
          <Route exact path="/appointment">
            <Appointment />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
