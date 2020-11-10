import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Provider } from './context';
import Registro from './pages/Registro'

const Routes = () => (
  <Provider>
    <Router>
      <Switch>
        <Route exact path="/register" component={Registro} />
      </Switch>
    </Router>
  </Provider>
);

export default Routes;
