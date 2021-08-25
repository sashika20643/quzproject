import React from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

import About from './pages/aboutus';
import DashBoard from './pages/dashBoard';
import Homepage from './pages/homepage';
import QandA from './pages/QandA';

import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      
     
      <Switch>
      
        <Route path="/" exact component={Homepage} />
      </Switch>
      
      <Switch>
        <Route path="/aboutus" exact component={About} />
      </Switch>
      <Switch>
        <Route path="/QandA" exact component={QandA} />
      </Switch>
      <Switch>
        <Route path="/SignUp" exact component={SignUp} />
      </Switch>
      <Switch>
        <Route path="/Login" exact component={SignUp} />
      </Switch>
      
      <Switch>
        <Route path="/dashboard" exact component={DashBoard} />
      </Switch>
    </Router>

  );
}

export default App;
