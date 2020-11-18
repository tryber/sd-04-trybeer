import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import UserRegister from './components/UserRegister';
// import UserProfile from './components/UserProfile/index';
import Products from './components/Products';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/products" component={Products} />
      <Route path="/register" component={UserRegister} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Login} />
      {/* <Route path="/profile" component={ UserProfile } /> */}
    </Switch>
  </BrowserRouter>
);

export default App;
