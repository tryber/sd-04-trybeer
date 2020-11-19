import React from 'react';
import jwtDecode from 'jwt-decode';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadFromLocalStorage } from './services/localStorage';
import Login from './pages/Login/Login';
import { login } from './store/ducks/user';
import Register from './pages/Register/Register';
import Products from './pages/Products/Products';
import Checkout from './pages/Checkout/Checkout';
import ClientProfile from './pages/ClientProfile/ClientProfile';
import './App.css';
import AdminProfile from './pages/AdminProfile';
import Orders from './pages/Orders';

function App() {
  const dispatch = useDispatch();

  const numDivisionDate = 1000; // eslint remote

  const requireAuth = () => {
    const userData = loadFromLocalStorage('user');

    if (userData != null) {
      const decoded = jwtDecode(userData.token);
      const now = Date.now().valueOf() / numDivisionDate; // inspiration from web Stackflow
      if (typeof decoded.exp !== 'undefined' && decoded.exp > now) {
        const user = {
          name: userData.name,
          email: userData.email,
          role: userData.role,
        };
        dispatch(login({ token: userData.token, data: user }));
        return true;
      }
    }
    return false;
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route
          exact
          path="/products"
          render={ () => (requireAuth() ? <Products /> : <Redirect to="/login" />) }
        />
        <Route
          exact
          path="/checkout"
          render={ () => (requireAuth() ? <Checkout /> : <Redirect to="/login" />) }
        />
        <Route
          exact
          path="/profile"
          render={ () => (requireAuth() ? <ClientProfile /> : <Redirect to="/login" />) }
        />
        <Route
          exact
          path="/admin/orders"
          render={ () => (requireAuth() ? <Orders /> : <Redirect to="/login" />) }
        />
        <Route
          exact
          path="/admin/profile"
          render={ () => (requireAuth() ? <AdminProfile /> : <Redirect to="/login" />) }
        />
      </Switch>
    </Router>
  );
}

export default App;
