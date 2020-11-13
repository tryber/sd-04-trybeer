import React from 'react';

import { Switch, Route } from 'react-router-dom';
import {
  Login,
  UserProfile,
  Register,
  Checkout,
} from './pages';
import { Header } from './components/Header';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/profile">
        <UserProfile />
      </Route>
      <Route path="/register" component={ Register } />
      <Route path="/checkout" component={ Checkout } />
      <Route path="/products">
        <Header>TryBeer</Header>
      </Route>
      <Route path="/admin/orders">
        <Header>TryBeer</Header>
      </Route>
    </Switch>
  );
}

export default App;
