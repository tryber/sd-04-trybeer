import React, { useEffect, useState } from 'react';
import Header from '../Header';
import SideBar from '../SideBarADMIN';
import api from '../../services/api';
import { getLS } from '../../helpers/index';
import './adminOrder.css';

const AdminOrder = () => {
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const adminData = getLS('user');
        const { token } = adminData;
        const orders = await api.getAllOrders(token);

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
      <Header title="Admin - Meus Pedidos" />
      {pedidos.map((e, i) => (
        <div id="card-container" key={ e.idSale } data-testid="order-card-container">
          <a href={ `/admin/orders/${e.idSale}` }>
            <p data-testid={ `${i}-order-number` }>{ `Pedido ${e.idSale}` }</p>
            <p data-testid={ `${i}-order-address` }>{ `${e.deliveryAddress}, ${e.deliveryNumber}` }</p>
            <p data-testid={ `${i}-order-total-value` }>{ `R$ ${e.totalPrice}` }</p>
            <p data-testid={ `${i}-order-status` }>{ e.status }</p>
          </a>
        </div>
      ))}
      <SideBar pageWrapId="page-wrap" outerContainerId="outer-container" />
    </div>
  );
};

export default AdminOrder;
