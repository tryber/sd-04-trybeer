import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../../services/api';
import { getLS } from '../../../helpers';

const AdminOrderDetail = () => {
  const two = 2;
  const history = useHistory();
  const [pedidos, setPedidos] = useState([]);
  const [order, setOrder] = useState({});
  const [pdtsSold, setPdtsSold] = useState([]);
  const [products, setProducts] = useState([]);

  const orderNumber = `Pedido ${order.saleId}`;
  const totalPriceDb = Number(order.totalPrice).toFixed(two).replace('.', ',');
  const totalPrice = `Total: R$ ${totalPriceDb}`;

  const { id } = useParams();

  console.log(products);

  useEffect(() => {
    (async () => {
      try {
        if (!getLS('user')) return history.push('/login');

        const userData = getLS('user');
        const { token } = userData;

        const newOrder = await api.getOrderById(token, id);
        const newQttPdts = await api.getSalesProducts(token, newOrder.data[0].saleId);
        const newProducts = await api.getProducts(token);

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
      <h1 data-testid="top-title">Admin Order details</h1>
      <span data-testid="order-number">{orderNumber}</span> - 
      <span data-testid="order-status"> {order.status}</span>
      {pdtsSold.map(({ productId: pdtSoldId, quantity }, i) => {
        let pdtName;
        let pdtPrice;

        products.forEach(({ id: pdtId, name, price }) => {
          if (pdtSoldId !== pdtId) return false;

          pdtName = name;
          pdtPrice = price.toFixed(two).replace('.', ',');

          return true;
        });

        return (
          <p key={ pdtSoldId }>
            <span data-testid={ `${i}-product-qtd` }>{ quantity }</span>
            -
            <span data-testid={ `${i}-product-name` }>{ pdtName }</span>
            -
            <span data-testid={ `${i}-product-total-value` }>{ `R$ ${pdtPrice}` }</span>
            -
            <span data-testid={ `${i}-order-unit-price` }>{ `(R$ ${pdtPrice})` }</span>
          </p>
        );
      })}
      <p data-testid="order-total-value">{totalPrice}</p>
      <button data-testid="mark-as-delivered-btn">Marcar como entregue</button>
    </div>
  );
};
export default AdminOrderDetail;
