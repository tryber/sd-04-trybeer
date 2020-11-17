import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import UserRegister from './components/UserRegister';
import UserProfile from './components/UserProfile/index';
import UserOrder from './components/UserOrder/UserOrder'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/register" component={ UserRegister } />
      <Route path="/login" component={ Login } />
      <Route exact path="/" component={ Login } />
      <Route path="/profile" component={ UserProfile } />
      <Route path="/orders" component={ UserOrder } />
    </Switch>
  </BrowserRouter>
);

export default App;
