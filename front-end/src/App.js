import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Login, Register } from './pages';

function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/" component={ Login } />
      <Route path="/register" component={ Register } />
    </Switch>
  );
}

export default App;
