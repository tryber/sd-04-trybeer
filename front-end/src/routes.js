import React from 'react';
import { Switch } from 'react-router-dom';

import { Provider } from './context';

const Routes = () => (
  <Provider>
    <Switch>
      Hello World!
      {/* <Route path="" component={ '' } /> */}
    </Switch>
  </Provider>
);

export default Routes;
