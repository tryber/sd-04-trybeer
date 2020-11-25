import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import UserRegister from './components/UserRegister';
import UserProfile from './components/UserProfile/index';
import AdminProfile from './components/AdminProfile/index';
import ClientProducts from './components/screens/ClientProducts/ClientProducts';
// import ClientCheckout from './components/Checkout';
import PrivateRoute from './components/Auth';
import ClientOrderDetails from './components/screens/ClientOrderDetails/ClientOrderDetails';

const App = () => (
  <BrowserRouter>
    <Switch>
      {/* <PrivateRoute path="/checkout" component={ ClientCheckout } /> */}
      <Route path="/products" component={ ClientProducts } />
      <Route path="/register" component={ UserRegister } />
      <Route path="/login" component={ Login } />
      <Route exact path="/orders/:number" component={ ClientOrderDetails } />
      <Route exact path="/" component={ Login } />
      <PrivateRoute path="/profile" component={ UserProfile } />
      <PrivateRoute path="/admin/profile" component={ AdminProfile } />
    </Switch>
  </BrowserRouter>
);

export default App;
