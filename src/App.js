import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/appointment">
          <Appointment/>
        </Route>
        <Route exact path="/">
            <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
