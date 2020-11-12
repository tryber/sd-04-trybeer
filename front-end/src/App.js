import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, UserProfile } from './pages';

function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/profile">
        <UserProfile />
      </Route>
    </Switch>
  );
}

export default App;
