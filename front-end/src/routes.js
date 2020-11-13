import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Login from './pages/Login';
import Products from './pages/Products';
import ProfileClient from './pages/Profile';
import Register from './pages/Register';
import Checkout from './pages/CloseOrder';
import OrdersClient from './pages/Orders';
import Details from './pages/Details';
import OrdersAdm from './pages/admin/Orders';
import test from './pages/test';

const routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/profile" component={ ProfileClient } />
      <Route path="/products" component={ Products } />
      <Route path="/checkout" component={ Checkout } />
      <Route path="/orders" component={ OrdersClient } />
      <Route exact path="/orders:id" component={ Details } />
      <Route exact path="/admin/orders" component={ OrdersAdm } />
      <Route path="/test" component={ test } />
    </Switch>
  </Router>
);

export default routes;
