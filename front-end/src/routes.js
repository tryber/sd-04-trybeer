import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Produtcs from './pages/Products';
import MyOrdereds from './pages/MyOrdereds';
import { Provider } from './context';
import Register from './pages/Register/index';
import ClientProfile from './pages/ClientProfile/index';
import LoginPage from './pages/LoginPage';

const Routes = () => (
  <Provider>
    <Switch>
      Hello World!
      {/* <Route path="" component={ '' } /> */}
      <Route path="/register" component={ Register } />
      <Route path="/products" component={ Produtcs } />
      <Route path="/login" component={ LoginPage } />
      <Route path="/profile" component={ ClientProfile } />
      <Route path="/orders" component={ MyOrdereds } />
    </Switch>
  </Provider>
);

export default Routes;
