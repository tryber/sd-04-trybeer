import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Login, UserProfile, Register } from './pages';
import { Header } from './components/Header';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Header>text</Header>
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/profile">
        <UserProfile />
      </Route>
      <Route exact path="/" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/products">
        <Header>TryBeer</Header>
      </Route>
    </Switch>
  );
}

export default App;
