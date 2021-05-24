import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

import Home from './Home';
import Nav from "./Nav";
import Standings from "./Standings";
import UpcomingGames from "./UpcomingGames";
import Stats from "./Stats";
import Splash from './Splash';

function App() {
  return (
      <Router>
        <div className="Pathings">
          <Nav />
            <Switch>
              <Route exact path="/" component={Splash} />
              <Route path="/home" component={Home} />
              <Route path="/Standings" component={Standings} />
              <Route path="/Stats" component={Stats} />
              <Route path="/UpcomingGames" component={UpcomingGames} />
            </Switch>
        </div>
      </Router>
  );
}

export default App;