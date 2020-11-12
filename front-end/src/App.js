import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from './pages';
import { Header } from './components/Header';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Header>text</Header>
      </Route>
      <Route path="/login">
        <Login />
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
