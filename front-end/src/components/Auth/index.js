import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => {
  let user = '';
  user = JSON.parse(localStorage.getItem('user'));
  if (user === null) {
    return false;
  }
  return true;
};

const PrivateRoute = ({ component: Component }) => (
  <Route
    render={ (props) => {
      // console.log(document.referrer)
      if (isAuthenticated() === true || document.referrer.length > 0) {
        return <Component />;
      }
      return <Redirect to={ { pathname: '/login', state: { from: props.location } } } />;
    } }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PrivateRoute;
