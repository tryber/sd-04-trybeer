import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from './pages';
import { Header } from './components/Header';

function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Header>text</Header>
      </Route>
    </Switch>
  );
}

export default App;
