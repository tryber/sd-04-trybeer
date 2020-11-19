import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import TopMenu from '../Components/Menu/TopMenu';

const ClientOrders = () => {
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user === null) setAuth(false);
  }, []);

  if (auth === false) return <Redirect to="/login" />;
  return (
    <div>
      <TopMenu title="Meus Pedidos" />
    </div>
  );
};

export default ClientOrders;
