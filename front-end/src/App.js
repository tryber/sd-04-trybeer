import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import UserRegister from './components/UserRegister';
import UserProfile from './components/UserProfile';
import AdminProfile from './components/AdminProfile';
import Products from './components/Products';
import Orders from './components/OrdersADMIN';
import Checkout from './components/Checkout';
import OrdersCli from './components/OrdersCLI';
import OrderDetailsCLI from './components/OrderDetailsCLI';
import OrdersDetailsAdmin from './components/OrdersDetailsAdmin';
import PrivateRoute from './components/Auth';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/register" component={ UserRegister } />
      <Route path="/login" component={ Login } />
      <Route exact path="/" component={ Login } />
      <PrivateRoute path="/profile" component={ UserProfile } />
      <PrivateRoute path="/admin/profile" component={ AdminProfile } />
      <PrivateRoute path="/products" component={ Products } />
      <PrivateRoute exact path="/admin/orders" component={ Orders } />
      <PrivateRoute path="/checkout" component={ Checkout } />
      <PrivateRoute exact path="/orders" component={ OrdersCli } />
      <PrivateRoute path="/orders/:id" component={ OrderDetailsCLI } />
      <PrivateRoute path="/admin/orders/:id" component={ OrdersDetailsAdmin } />
    </Switch>
  </BrowserRouter>
);

export default App;
