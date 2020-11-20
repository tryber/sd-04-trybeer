import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'rbx/index.css';
import { Container } from 'rbx';

import Provider from './context/provider';
import Login from './Pages/login';
import Admin from './Pages/adminOrders';
import AdminProfile from './Pages/adminProfile';
import Registro from './Pages/registro';
import Product from './Pages/products';
import Profile from './Pages/clientProfile';
import ClientOrders from './Pages/clientOrders';

import './App.css';

function App() {
  return (
    <Container>
      <Provider>
        <Switch>
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Registro } />
          <Route path="/products" component={ Product } />
          <Route path="/orders" component={ ClientOrders } />
          <Route path="/profile" component={ Profile } />
          <Route path="/admin/orders" component={ Admin } />
          <Route exact path="/admin/profile" component={ AdminProfile } />
        </Switch>
      </Provider>
    </Container>
  );
}

export default App;
