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

  let day = '';
  let month = '';
  return (
    <>
      <Header title="Cliente - Meus Pedidos" />
      {pedidos.map(
       ((e, i) => (
          (day = Intl.DateTimeFormat('en', { day: '2-digit' }).format(
            new Date(e.saleDate)
          )),
          (month = Intl.DateTimeFormat('en', { month: '2-digit' }).format(
            new Date(e.saleDate),
          )),
          (
            <div key={ e.idSale } data-testid="order-card-container">
              <a href={ `/orders/${e.idSale}` }>
                <p data-testid={ `${i}-order-number` }>{ `Pedido ${e.idSale}` }</p>
                <p data-testid={ `${i}-order-date` }>{ `${day}/${month}` }</p>
                <p data-testid={ `${i}-order-total-value` }>{ `R$ ${e.totalPrice}` }</p>
              </a>
            </div>
          )
        )),
      )}
    </>
  );
};
export default ClientOrder;
