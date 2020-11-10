import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Provider } from './context';
import Produtos from './pages/Produtos';

const Routes = () => (
  <Provider>
    <Switch>
      <Route path="/products" component={Produtos} />
    </Switch>
  </Provider>
);

export default Routes;
