import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import OrdersClient from './OrdersClient';
import OrdersAdmin from './OrdersAdmin';

const Orders = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (!localStorage.user) history.push('/login');
  }, [history]);

  if (location.pathname === '/orders') {
    return (
      <OrdersClient />
    );
  }
  return (
    <OrdersAdmin />
  );
};
export default Orders;
