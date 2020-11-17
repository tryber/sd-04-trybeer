import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import UserRegister from './components/UserRegister';
// import UserProfile from './components/UserProfile/index';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/register" component={UserRegister} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Login} />
      {/* <Route path="/profile" component={ UserProfile } /> */}
    </Switch>
  </BrowserRouter>
);

export default App;
