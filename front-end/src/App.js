import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import UserProfile from './components/UserProfile/index';
import AdminProfile from './components/AdminProfile/index';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/profile" component={ UserProfile } />
      <Route path="/admin/profile" component={ AdminProfile } />
    </Switch>
  </BrowserRouter>
);

export default App;
