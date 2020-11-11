import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Produtos from './pages/Produtos';
import Register from './pages/Register';

function App() {
  return (
    <Switch>
      <Route exact path="/products" component={ Produtos } />
      <Route exact path="/register" component={ Register } />
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default App;
