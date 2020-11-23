import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import UserRegister from './pages/UserRegister';
// import UserProfile from './pages/UserProfile/index';
import Products from './pages/Products';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/products" component={ Products } />
      <Route path="/register" component={ UserRegister } />
      <Route path="/login" component={ Login } />
      <Route exact path="/" component={ Login } />
      {/* <Route path="/profile" component={ UserProfile } /> */}
    </Switch>
  </BrowserRouter>
);

export default App;
