import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import ClientProfile from './pages/ClientProfile';

function App() {
  return (
    <Switch>
      <Route exact path="/register" component={ Register } />
      <Route exact path="/products" component={ Products } />
      <Route exact path="/profile" component={ ClientProfile } />
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default App;
