import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './compoments/Header/index'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Header } />
      </Switch>
      <Header  />
    </BrowserRouter>
  );
}

export default App;
