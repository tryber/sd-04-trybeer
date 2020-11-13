import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import UserRegister from './components/UserRegister';
<<<<<<< HEAD
=======
import UserProfile from './components/UserProfile/index';
>>>>>>> userProfile

const App = () => (
  <BrowserRouter>
    <Switch>
<<<<<<< HEAD
      <Route path="/register" component={ UserRegister } />
      <Route path="/login" component={ Login } />
      <Route exact path="/" component={ Login } />
=======
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ UserRegister } />
      <Route path="/profile" component= { UserProfile } />
>>>>>>> userProfile
    </Switch>
  </BrowserRouter>
);

export default App;
