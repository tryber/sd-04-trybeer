import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

import Login from './pages/Login';
import Register from './pages/Register';
import Produtos from './pages/Produtos';
import ClientProfile from './pages/ClientProfile';
import AdminOrders from './pages/AdminOrders';
import AdminProfile from './pages/AdminProfile';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/register" component={ Register } />
        <Route exact path="/products" component={ Produtos } />
        <Route exact path="/profile" component={ ClientProfile } />
        <Route exact path="/admin/orders" component={ AdminOrders } />
        <Route exact path="/admin/profile" component={ AdminProfile } />

        <Route path="/" component={ Login } />
      </Switch>
    </AppProvider>
  );
}

export default App;
