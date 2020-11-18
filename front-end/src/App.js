import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'rbx/index.css';
import { Container } from 'rbx';

import Login from './Pages/login';
import Admin from './Pages/adminPage';
import Registro from './Pages/registro';
import Client from './Pages/clientPage';
import Checkout from './Pages/checkoutPage';
import Profile from './Pages/clientProfile';
import ClientOrders from './Pages/clientOrders';
import Products from './Pages/products';

import './App.css';

function App() {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/login" component={ Login } />
        <Route path="/admin/orders" component={ Admin } />
        <Route path="/register" component={ Registro } />
        <Route path="/products" component={ Client } />
        <Route path="/checkout" component={ Checkout } />
        <Route path="/products" component={ Products } />
        <Route path="/profile" component={ Profile } />
        <Route path="/orders" component={ ClientOrders } />
      </Switch>
    </Container>
  );
}

export default App;
