import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import TopMenu from '../Components/Menu/TopMenu';
import api from '../services/productApi';

const ClientOrders = () => {
  const [auth, setAuth] = useState(true);
  const [orders, setOrders] = useState([]);
  const DOIS = 2;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user === null) setAuth(false);
    else {
      api.getOrders(user.token).then(({ data }) => {
        if (data === 'jwt malformed') setAuth(false);
        else setOrders(data);
      });
    }
  }, []);

  if (auth === false) return <Redirect to="/login" />;
  return (
    <div>
      <TopMenu title="Meus Pedidos" />
      {orders.map((order, index) => (
        <div key={ order.id } data-testid={ `${index}-order-card-container` }>
          <p data-testid={ `${index}-order-number` }>{ order.id }</p>
          <p data-testid={ `${index}-order-date` }>{ order.sale_date }</p>
          <p data-testid={ `${index}-order-total-value` }>
            { `R$ ${order.total_price.toFixed(DOIS).replace('.', ',')}` }
          </p>
        </div>
      ))}
    </div>
  );
};

export default ClientOrders;
