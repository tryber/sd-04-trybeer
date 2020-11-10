import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/Register';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={ } /> */}
        <Route path="/register" component={ RegisterPage } />
      </Switch>
    </Router>
  );
}

export default App;
