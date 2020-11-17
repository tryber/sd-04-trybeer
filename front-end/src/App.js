import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import ClientProfile from './pages/ClientProfile';
import Checkout from './pages/Checkout';
import AdminProfile from './pages/AdminProfile';
import AdminOrders from './pages/AdminOrders';

function App() {
  return (
    <Switch>
      <Route exact path="/register" component={ Register } />
      <Route exact path="/products" component={ Products } />
      <Route exact path="/profile" component={ ClientProfile } />
      <Route exact path="/admin/profile" component={ AdminProfile } />
      <Route exact path="/admin/orders" component={ AdminOrders } />
      <Route exact path="/checkout" component={ Checkout } />
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default App;
