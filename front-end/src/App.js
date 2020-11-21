import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import UserRegister from './components/UserRegister';
import UserProfile from './components/UserProfile/index';
import AdminProfile from './components/AdminProfile/index';
import ClientProducts from './components/screens/ClientProducts/ClientProducts';
import ClientCheckout from './components/screens/ClientCheckout/ClientCheckout';
import ClientOrder from './components/screens/ClientOrder/ClientOrder';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/checkout" component={ ClientCheckout } />
      <Route path="/products" component={ ClientProducts } />
      <Route path="/register" component={ UserRegister } />
      <Route path="/login" component={ Login } />
      <Route exact path="/" component={ Login } />
      <Route path="/profile" component={ UserProfile } />
      <Route path="/orders" component={ ClientOrder } />
      <Route path="/admin/orders" component={ AdminProfile } />
      <Route path="/admin/profile" component={ AdminProfile } />
    </Switch>
  </BrowserRouter>
);

export default App;
