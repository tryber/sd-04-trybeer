import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Login from './pages/Login';
import Profile from './pages/Profile';
import Main from './pages/MainPage';
import test from './pages/test';

const routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/trybeer" component={ Main } />
      <Route path="/test" component={ test } />

      <Route exact path="/profile" component={ Profile } />
    </Switch>
  </Router>
);

export default routes;
