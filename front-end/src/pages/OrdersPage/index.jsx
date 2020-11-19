import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../../components/Menu';
import OrderCard from '../../components/OrderCard';
import api from '../../services/api';
import { getLS } from '../../utils';
import styles from  './index.module.css';

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    setLoading(true);
    api.getSalesTb().then(data => setSales(data.data.sales));
    setLoading(false);
  }, []);

  if (!getLS('user')) return <Redirect to="/login" />;
  return loading ? (
    <h1>Carregando...</h1>
  ) : (
    <div>
      <Menu nomeTela="Meus Pedidos" />
      <div className={styles.containerOrders}>
        <h3>Sua cesta</h3>
        <div className={styles.products}>
          {sales
            ? sales.map((order, index) => (
                <OrderCard
                  id={order.id}
                  totalPrice={order.totalPrice}
                  saleDate={order.saleDate}
                  index={index}
                  key={index}
                />
              ))
            : ''}
        </div>
      </div>
    </div>
  );
};

export default Orders;
