import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import UserRegister from './components/UserRegister';

import './App.css';
// import PrivateRoute from './components/Auth';

const App = () => (
  <div className="App" id="outer-container">
    <div id="page-wrap">
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={ UserRegister } />
          <Route path="/login" component={ Login } />
          <Route exact path="/" component={ Login } />
        </Switch>
      </BrowserRouter>
    </div>
  </div>
);

export default App;
