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
      <OrdersDetails path="/orders/:id" />
      <Orders exact path="/admin/orders" />
      <OrdersDetails path="/admin/orders/:id" />
      <Profile path="/admin/profile" />
      <Products path="/products" />
      <Profile path="/profile" />
      <Register path="/register" />
      <NotFound path="/" />
    </Switch>
  </BrowserRouter>
);
export default Routes;
