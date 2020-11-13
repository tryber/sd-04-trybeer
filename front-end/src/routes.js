import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Produtcs from './pages/Products';
import ClientProfile from './pages/ClientProfile';
import MyOrdereds from './pages/MyOrdereds';
import LoginPage from './pages/LoginPage';
import ProductDetails from './pages/ProductDetails';
import { Provider } from './context';

const Routes = () => (
  <Provider>
    <Switch>
      <Route path="/products" component={ Produtcs } />
      <Route path="/login" component={ LoginPage } />
      <Route path="/profile" component={ ClientProfile } />
      <Route path="/orders" exact component={ MyOrdereds } />
      <Route path="/orders/:orderNumber" exact component={ ProductDetails } />
    </Switch>
  </Provider>
);

export default Routes;
