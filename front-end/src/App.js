import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'rbx/index.css';
import { Container } from 'rbx';

import Login from './Pages/login';
import Admin from './Pages/adminPage';
import Registro from './Pages/registro';
import Client from './Pages/clientPage';
import Profile from './Pages/clientProfile';

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
        <Route path="/profile" component={ Profile } />
      </Switch>
    </Container>
  );
}

export default App;
