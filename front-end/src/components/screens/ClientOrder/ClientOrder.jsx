import React, { useEffect, useState } from 'react';
import Header from '../../Header';
import api from '../../../services/api';
import { getLS } from '../../../helpers/index';

const ClientOrder = () => {
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const userData = getLS('user');
        const { token } = userData;
        const orders = await api.getOrders(token);

        setPedidos(orders.data);
      } catch (e) {
        return e;
      }
      const zero = 0;
      return zero;
    })();
  }, []);

  return (
    <div>
      <Header title="Cliente - Meus Pedidos" />

      {pedidos.map((e, i) => (
        <a href={ `/orders/${e.idSale}` }>
          <div key={ e.id} data-testid="order-card-container">
            <p data-testid={ `${i}-order-number` }>{ `Pedido ${e.idSale}` }</p>
            <p data-testid={ `${i}-order-date` }>{ e.saleDate }</p>
            <p data-testid={ `${i}-order-total-value` }>{ `R$ ${e.totalPrice}` }</p>
          </div>
        </a>
      ))}
    </div>
  );
};
export default ClientOrder;
