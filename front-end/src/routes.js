import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Produtcs from './pages/Products';
import ClientProfile from './pages/ClientProfile';
import MyOrdereds from './pages/MyOrdereds';
import { Provider } from './context';

const Routes = () => (
  <Provider>
    <Switch>
      <Route path="/products" component={ Produtcs } />
      <Route path="/profile" component={ ClientProfile } />
      <Route path="/orders" component={ MyOrdereds } />
    </Switch>
  </Provider>
);

export default Routes;
