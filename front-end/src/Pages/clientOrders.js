import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';

const ClientOrders = () => {
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user === null) setAuth(false);
  }, []);
  
  if (auth === false) return <Redirect to="/login" />;
  return (
    <div>
      <h2 data-testid="top-title">Meus Pedidos</h2>
    </div>
  )
}

export default ClientOrders;
