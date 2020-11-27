import React, { useEffect, useState } from 'react';
import Header from '../../Header';
import api from '../../../services/api';
import { getLS, setLS } from '../../../helpers/index';

const ClientOrder = () => {
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const token = getLS('user').token;
        const orders = await api.getOrders(token);

        setPedidos(orders.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div>
      {console.log(pedidos)}
      <Header title="Cliente - Meus Pedidos" />
      {pedidos.map((e, i) => (
        <div key={i} data-testid={i + '-order-card-container'}>
          <p data-testid={i + '-order-number'}>{e.idSale}</p>
          <p data-testid={i + '-order-date'}>{e.saleDate}</p>
          <p data-testid={i + '-order-total-value'}>{e.totalPrice}</p>
        </div>
      ))}
    </div>
  );
};
export default ClientOrder;