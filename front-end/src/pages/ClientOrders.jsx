import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import styles from './Orders.module.css';

import Menu from '../components/Menu';

const ClientOrders = () => {
  const [orders, setOrders] = useState([]);

  const [redirectToLogin, setRedirectToLogin] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData) {
      return setRedirectToLogin(true);
    }

    axios
      .get('http://localhost:3001/sales', {
        params: { userId: localStorage.getItem('userID') },
      })
      .then((res) => {
        setOrders(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="insideSection">
      <Menu title="Meus Pedidos" />
      <div className={styles.ordersDiv}>
        {redirectToLogin && <Redirect to="/login" />}
        {orders &&
          orders.map((order, index) => (
            <Link className={styles.orderLink} to={`/orders/${order.id}`}>
              <div className={styles.orderDiv} key={order.id} data-testid={`${index}-order-card-container`}>
                <p
                  data-testid={`${index}-order-number`}
                >{`Pedido ${order.id}`}</p>
                <p data-testid={`${index}-order-date`}>
                  {new Date(order.date)
                    .toLocaleDateString('pt-BR', { timeZone: 'UTC' })
                    .slice(0, 5)}
                </p>
                <p data-testid={`${index}-order-total-value`}>
                  {`R$ ${order.price.toFixed(2).replace('.', ',')}`}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default connect(null, null)(ClientOrders);
