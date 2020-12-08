import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import { getLS } from '../../../helpers';

const AdminOrderDetail = () => {
  const [pedidos, setPedidos] = useState([]);
  const [order, setOrder] = useState({});
  const [pdtsSold, setPdtsSold] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const userData = getLS('user');
        const { token } = userData;

        const orders = await api.getOrders(token);
        const newOrder = await api.getOrderById(token);
        const newQttPdts = await api.getSalesProducts(token, newOrder.data[0].saleId);
        const newProducts = await api.getProducts(token);

        setPedidos(orders.data);
        setOrder(newOrder.data[0]);
        setPdtsSold(newQttPdts.data);
        setProducts(newProducts.data);
      } catch (e) {
        return e;
      }
      const zero = 0;
      return zero;
    })();
  }, []);

  return (
    <div>
      <p>teste</p>
    </div>
  );
};
export default AdminOrderDetail;
