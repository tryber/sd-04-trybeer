import React from 'react';
import { Switch } from 'react-router-dom';

import { Provider } from './context';

const Routes = () => (
  <Provider>
    <Switch>
      Hello World!
      {/* <Route path="" component={ '' } /> */}
      <Route path="/login" component={LoginPage} />
    </Switch>
  </Provider>
);

export default Routes;
