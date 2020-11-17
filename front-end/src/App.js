import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserProfile, FormPage, Products, AdminProfile } from './pages';
import { Header } from './components/Header';
import LoginForm from './components/forms/LoginForm';
import RegisterForm from './components/forms/RegisterForm';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <FormPage>
          <LoginForm />
        </FormPage>
      </Route>
      <Route path="/profile">
        <UserProfile />
      </Route>
      <Route path="/register">
        <FormPage>
          <RegisterForm />
        </FormPage>
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/admin/orders">
        <Header>TryBeer</Header>
      </Route>
      <Route path="/admin/profile">
        <AdminProfile />
      </Route>
    </Switch>
  );
}

export default App;
