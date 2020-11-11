import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Login from './Pages/login';
import Admin from './Pages/adminPage';
import Registro from './Pages/registro';
import Client from './Pages/clientPage';

import './App.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/register" component={Registro} />
        <Route path="/client" component={Client} />
      </Switch>
    </div>
  );
}

export default App;
