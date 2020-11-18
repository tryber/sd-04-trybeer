import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { getSales } from '../services/TrybeerApi';
import { Link } from 'react-router-dom';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]); 
  
  const sendRequest = async () => await getSales();

  useEffect(() => {
    sendRequest().then((result) => setOrders(result.data));
  }, []);

  return (
    <>
      <Header>Trybeer</Header>
      <h1>Admin Orders</h1>

      {orders.map(({
        id,
        totalPrice,
        nameAdress,
        numberAdress,
        status,
      }, index) => (
        <Link
            key={ id }
            to={ `/admin/orders/${id}` }
          >
          <div>
              <h2 data-testid={`${index}-order-number`}>{`Pedido ${id}`}</h2>
              <h3 data-testid={`${index}-order-address`}>{`${nameAdress}, ${numberAdress}`}</h3>
              
              <span data-testid={ `${index}-order-total-value` }>
                { `R$ ${totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` }
              </span>

              <span data-testid={`${index}-order-status`}>
                {status}
              </span>
          </div>
        </Link>
      ))}
    </>
  );
};

export default AdminOrders;
