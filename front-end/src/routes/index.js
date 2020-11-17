import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { ChakraProvider } from '@chakra-ui/react';
import {
  Checkout, Home, Login, NotFound, Orders, OrdersDetails, Products, Profile, Register,
} from '../pages';

const Routes = () => (
  <BrowserRouter>
    <ChakraProvider>
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
    </ChakraProvider>
  </BrowserRouter>
);
export default Routes;
