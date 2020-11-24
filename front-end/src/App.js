import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
// import UserRegister from './components/UserRegister';

const App = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route path="/register" component={ UserRegister } /> */}
      <Route path="/login" component={ Login } />
      <Route exact path="/" component={ Login } />
    </Switch>
  </BrowserRouter>
);

export default App;
