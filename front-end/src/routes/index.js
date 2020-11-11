import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Checkout, Home, Login, NotFound, Orders, OrdersDetails, Products, Profile, Register,
} from '../pages';

const Routes = () => (
  <Switch>
    <Home exact path="/" />
    <Checkout path="/checkout" />
    <Login path="/login" />
    <Orders exact path="/orders" />
    <Route path="/orders/:id">
      <OrdersDetails />
    </Route>
    <Orders exact path="/admin/orders" />
    <Route path="/admin/orders/:id">
      <OrdersDetails />
    </Route>
    <Products path="/products" />
    <Profile path="/profile" />
    <Profile path="/admin/profile" />
    <Register path="/register" />
    <Route component={ NotFound } />
  </Switch>
);
export default Routes;
