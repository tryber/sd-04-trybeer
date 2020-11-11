import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Produtos from './pages/Produtos';
import ClientProfile from './pages/ClientProfile';
import { Provider } from './context';

const Routes = () => (
  <Provider>
    <Switch>
      <Route path="/products" component={ Produtos } />
      <Route path="/profile" component={ ClientProfile } />
    </Switch>
  </Provider>
);

export default Routes;
