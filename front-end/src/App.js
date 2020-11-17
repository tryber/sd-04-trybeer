import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import UserRegister from './components/UserRegister';
import ClientProducts from './components/screens/ClientProducts/ClientProducts';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/register" component={ UserRegister } />
      <Route path="/products" component={ ClientProducts } />
      <Route path="/" component={ Login } />
    </Switch>
  </BrowserRouter>
);

export default App;
