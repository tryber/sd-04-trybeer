import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ LoginPage } />
        <Route exact path="/login" component={ LoginPage } />
        <Route exact path="/register" component={ RegisterPage } />
      </Switch>
    </Router>
  );
}

export default App;
