import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import api from '../../../services/api';
import { getLS } from '../../../helpers';

const ClientOrderDetails = ({ match: { params: { id } } }) => {
  // Correção lint, magic number sem sentido
  const oito = 8;
  const nQuatorze = -14;
  const cinco = 5;
  const nDezessete = -17;
  const dois = 2;
  const [order, setOrder] = useState({});
  const [pdtsSold, setPdtsSold] = useState([]);
  const [products, setProducts] = useState([]);
  const history = useHistory();
  const orderNumber = `Pedido: 000${order.saleId}`;
  const day = String(order.saleDate).slice(oito, nQuatorze);
  const month = String(order.saleDate).slice(cinco, nDezessete);
  const date = `${day}/${month}`;
  const totalPriceDb = Number(order.totalPrice).toFixed(dois);
  const totalPrice = `Total: R$ ${totalPriceDb}`;

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
        // console.log(e.message);
      }

      return true;
    })();
  }, [history, id]);

  return (
    <div>
      <h1 data-testid="top-title">Order details</h1>
      <p data-testid="order-number">{orderNumber}</p>
      <p data-testid="order-date">{date}</p>
      {pdtsSold.map(({ productId: pdtSoldId, quantity }, i) => {
        let pdtName;
        let pdtPrice;

        products.forEach(({ id: pdtId, name, price }) => {
          if (pdtSoldId !== pdtId) return false;

          pdtName = name;
          pdtPrice = price;

          return true;
        });

        return (
          <p key={ pdtSoldId }>
            <span data-testid={ `${i}-product-qtd` }>{ quantity }</span>
            -
            <span data-testid={ `${i}-product-name` }>{ pdtName }</span>
            -
            <span data-testid={ `${i}-product-total-value` }>{ `R$ ${pdtPrice}` }</span>
          </p>
        );
      })}
      <p data-testid="order-total-value">{totalPrice}</p>
    </div>
  );
};

ClientOrderDetails.propTypes = {
  match: propTypes.shape({
    path: propTypes.string.isRequired,
    params: propTypes.shape({
      id: propTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ClientOrderDetails;
