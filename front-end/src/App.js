import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Login, UserProfile, Register } from './pages';
import { Header } from './components/Header';
import OrderDetail from './pages/OrderDetail';

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
      <Route path="/orders/teste">
        <OrderDetail />
      </Route>
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
