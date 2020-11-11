import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Provider } from './context';
import Register from './pages/Register/Register';
import ClientProfile from './pages/ClientProfile/ClientProfile';

const Routes = () => (
  <Provider>
    <Switch>
      Hello World!
      {/* <Route path="" component={ '' } /> */}
      <Route path="/register" component={ Register } />
      <Route path="/profile" component={ ClientProfile } />

    </Switch>
  </Provider>
);

export default Routes;
