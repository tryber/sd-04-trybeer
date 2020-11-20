import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import TopMenu from '../Components/Menu/TopMenu';
import api from '../services/productApi';

const formatDate = (saleDate) => {
  const date = new Date(saleDate).toLocaleDateString('pt-BR').split('/');
  const dateString = `${date[0]}/${date[1]}`;
  return dateString;
};

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
          <Link to={ `/orders/${order.id}` }>
            <p data-testid={ `${index}-order-number` }>
              Pedido&nbsp;
              {order.id}
            </p>
            <p data-testid={ `${index}-order-date` }>{formatDate(order.sale_date)}</p>
            <p data-testid={ `${index}-order-total-value` }>
              {`R$ ${order.total_price.toFixed(DOIS).replace('.', ',')}`}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ClientOrders;
