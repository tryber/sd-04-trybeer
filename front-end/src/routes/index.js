import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import {
  Checkout, Login, NotFound, Orders, OrdersDetails, Products, Profile, Register,
} from '../pages';
import { ProductProvider } from '../context';

const Routes = () => (
  <BrowserRouter>
<<<<<<< HEAD
    <ProductProvider>
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
    </ProductProvider>
=======
    <ChakraProvider>
      <Switch>
        <Login exact path="/" />
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
>>>>>>> main-g7-final
  </BrowserRouter>
);

export default Routes;
