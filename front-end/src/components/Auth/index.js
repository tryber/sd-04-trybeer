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

// variável para corrigir o problema com magic number
const zero = 0;

const PrivateRoute = ({ component: Component }) => (
  <Route
    render={ (props) => {
      // console.log(document.referrer)
      if (isAuthenticated() === true || document.referrer.length > zero) {
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
