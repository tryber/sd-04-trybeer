import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Login, UserProfile, Register } from './pages';

function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/profile">
        <UserProfile />
      </Route>
      <Route exact path="/" component={ Login } />
      <Route path="/register" component={ Register } />
    </Switch>
  );
}

export default App;
