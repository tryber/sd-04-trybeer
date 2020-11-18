import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'rbx/index.css';
import { Container } from 'rbx';

import Provider from './context/provider';
import Login from './Pages/login';
import Admin from './Pages/adminPage';
import Registro from './Pages/registro';
import Client from './Pages/clientPage';
import Profile from './Pages/clientProfile';
import ClientOrders from './Pages/clientOrders';

import './App.css';

function App() {
  return (
    <Container>
      <Provider>
        <Switch>
          <Route path="/login" component={ Login } />
          <Route path="/admin/orders" component={ Admin } />
          <Route path="/register" component={ Registro } />
          <Route path="/products" component={ Client } />
          <Route path="/profile" component={ Profile } />
          <Route path="/orders" component={ ClientOrders } />
        </Switch>
      </Provider>
    </Container>
  );
}

export default App;
