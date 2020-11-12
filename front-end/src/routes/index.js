import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import {
  Checkout, Home, Login, NotFound, Orders, OrdersDetails, Products, Profile, Register,
} from '../pages';

const Routes = () => (
  <BrowserRouter>
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
      <Profile path="/admin/profile" />
      <Products path="/products" />
      <Profile path="/profile" />
      <Register path="/register" />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>
);
export default Routes;
