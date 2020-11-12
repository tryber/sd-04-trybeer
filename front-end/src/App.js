import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" />
        <Route path ="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
