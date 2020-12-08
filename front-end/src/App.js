import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import UserRegister from './components/UserRegisterOld';
import UserProfile from './components/UserProfile/index';
import AdminProfile from './components/AdminProfile/index';
import ClientProducts from './components/screens/ClientProducts/ClientProducts';
import ClientCheckout from './components/screens/ClientCheckout/ClientCheckout';
import PrivateRoute from './components/Auth';
import ClientOrderDetails from './components/screens/ClientOrderDetails/ClientOrderDetails';
import ClientOrder from './components/screens/ClientOrder/ClientOrder';
import AdminOrderDetails from './components/screens/AdminOrderDetail/AdminOrderDetail';
import Orders from './components/Orders/index';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/checkout" component={ ClientCheckout } />
      <Route path="/products" component={ ClientProducts } />
      <Route path="/register" component={ UserRegister } />
      <Route path="/login" component={ Login } />
      <Route path="/orders/:id" component={ ClientOrderDetails } />
      <Route exact path="/" component={ Login } />
      <PrivateRoute path="/profile" component={ UserProfile } />
      <PrivateRoute path="/admin/orders/:id" component={ AdminOrderDetails } />
      <PrivateRoute exact path="/orders" component={ ClientOrder } />
      <PrivateRoute path="/admin/profile" component={ AdminProfile } />
      <PrivateRoute path="/admin/orders" component={ Orders } />

    </Switch>
  </BrowserRouter>
);

export default App;
