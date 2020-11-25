import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Produtcs from './pages/Products';
import MyOrdereds from './pages/MyOrdereds';
import { Provider } from './context';
import Register from './pages/Register/index';
import ClientProfile from './pages/ClientProfile';
import AdminProfile from './pages/AdminProfile';
import LoginPage from './pages/LoginPage';
import ProductDetails from './pages/ProductDetails';
<<<<<<< HEAD
import CheckoutPage from './pages/CheckoutPage';
=======
import MyOrdersADM from './pages/MyOrdersADM';
import PrivateRoute from './PrivateRoute';
>>>>>>> 550dcf4df5e1ad871a04f58497f1706b9cdb5d02

const Routes = () => (
  <Provider>
    <Switch>
      <Route path="/" exact component={ LoginPage } />
      <Route path="/login" component={ LoginPage } />
      <Route path="/register" component={ Register } />
      <PrivateRoute path="/products" component={ Produtcs } />
      <PrivateRoute path="/profile" component={ ClientProfile } />
      <Route path="/orders" exact component={ MyOrdereds } />
      <Route path="/orders/:orderNumber" exact component={ ProductDetails } />
<<<<<<< HEAD
      <Route path="/checkout" exact component={CheckoutPage} />
=======
      <Route path="/admin/orders" component={ MyOrdersADM } />
      <PrivateRoute path="/admin/profile" component={ AdminProfile } />
>>>>>>> 550dcf4df5e1ad871a04f58497f1706b9cdb5d02
    </Switch>
  </Provider>
);

export default Routes;
