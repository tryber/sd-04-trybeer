import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => {
  let user = '';
  user = JSON.parse(localStorage.getItem('user'));
  if (user === null) { 
    return false;
  } else { 
    return true;
  }
};

const PrivateRoute = ({ component: Component }) => (
  <Route
    render={ (props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

export default PrivateRoute;
