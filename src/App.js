import React from 'react';
import Home from './Home';
import Skills from './Skills'
import Food from './Food'
import Aquarium from "./Aquarium";
import './App.css';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Activity from "./Activity";
import Housing from "./Housing";
import Equipment from "./Equipment";
import ComingUps from "./ComingUps";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/food" component={Food}/>
        <Route path="/aquarium" component={Aquarium}/>
        <Route path="/activity" component={Activity}/>
        <Route path="/housing" component={Housing}/>
        <Route path="/equipment" component={Equipment}/>
        <Route path="/comingUps" component={ComingUps}/>
      </Switch>
    </Router>
  );
}

export default App;
