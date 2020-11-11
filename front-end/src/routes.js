import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Orders from './pages/admin/Orders';
import Login from './pages/Login';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Register from './pages/Register';

const routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />

      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/products" component={ Products } />
      <Route exact path="/admin/orders" component={ Orders } />
      <Route exact path="/register" component={ Register } />
    </Switch>
  </Router>
);

export default routes;
