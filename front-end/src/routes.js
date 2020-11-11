import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Provider } from './context';
import Registro from './pages/Registro';
import ClientProfile from './pages/ClientProfile/ClientProfile';

const Routes = () => (
  <Provider>
    <Switch>
      <Route path="/profile" component={ClientProfile} />
      <Route exact path="/register" component={Registro} />
    </Switch>
  </Provider>
);

export default Routes;
