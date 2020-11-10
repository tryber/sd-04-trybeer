import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from './pages';

function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
