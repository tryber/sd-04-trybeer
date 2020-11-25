import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { getSales } from '../services/TrybeerApi';
import '../css/ordersAdm.css';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  const sendRequest = async () => await getSales();

  useEffect(() => {
    sendRequest().then((result) => setOrders(result.data));
  }, []);

  return (
    <div className="page">
      <Header>Trybeer</Header>
        <div className="admin-order-page page-content">
          <h1>Admin Orders</h1>
          <div className="flex-row-wrap">
            {orders.map(
              ({ id, totalPrice, nameAdress, numberAdress, status }, index) => (
                <Link key={id} to={`/admin/orders/${id}`} className="orders-card">
                  <div className="first-part">
                    <span
                      data-testid={`${index}-order-number`}
                    >{`Pedido ${id}`}</span>
                    <span
                      data-testid={`${index}-order-address`}
                    >{`rua ${nameAdress}, ${numberAdress}`}</span>
                  </div>
                  <div className="first-part">
                    <span data-testid={`${index}-order-total-value`}>
                      {`Total: R$ ${totalPrice.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                      })}`}
                    </span>

                    <p
                      data-testid={`${index}-order-status`}
                      className={status === 'Pendente' && 'pendente' || 'entregue'}
                    >
                      {status}
                    </p>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
    </div>
  );
};

export default AdminOrders;
