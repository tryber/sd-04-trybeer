import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import isAuth from './auth';

const PrivateRoute = ({ component: Component, path }) => (
  <Route
    path={ path }
    render={ () => (isAuth() ? <Component /> : <Redirect to="/login" />) }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;
