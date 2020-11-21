import React, { useEffect, useState } from 'react';
import Header from '../../Header';
import api from '../../../services/api';
import { getLS, setLS } from '../../../helpers/index';

const AdminOrder = () => {
    const [pedidos, setPedidos] = useState([]);
    useEffect(() => {
      (async () => {
        try {
          const token = getLS('admin').token;
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
          <Header title="Admin - Pedidos" />
          {pedidos.map((e, i) => (
            <div key={i}>
                <p data-testid={i + '-order-number'}>{e.idSale}</p>
              <p data-testid={i + '-order-address'}>{e.adress}</p>
              <p data-testid={i + '-order-total-value'}>{e.totalValue}</p>
              <p data-testid={i + '-order-order-status'}>{e.status}</p>
            </div>
          ))}
        </div>
      );
    };
    export default AdminOrder;