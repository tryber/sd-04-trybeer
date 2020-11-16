import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { UserProfile, FormPage } from './pages';
import { Header } from './components/Header';
import LoginForm from './components/forms/LoginForm';
import RegisterForm from './components/forms/RegisterForm';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <FormPage>
          <LoginForm />
        </FormPage>
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
        <Header>TryBeer</Header>
      </Route>
      <Route path="/admin/orders">
        <Header>TryBeer</Header>
      </Route>
    </Switch>
  );
}

export default App;
