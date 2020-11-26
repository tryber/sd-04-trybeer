import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import TopMenu from '../Components/Menu/TopMenu';
import ordersApi from '../services/orderApi';

const DOIS = 2;
const ZERO = 0;

const formatDate = (saleDate) => {
  const date = new Date(saleDate).toLocaleDateString('pt-BR').split('/');
  const dateString = `${date[0]}/${date[1]}`;

  return dateString;
};

const formatValor = (valor) => `R$ ${valor.toFixed(DOIS).replace('.', ',')}`;

const OrderDetail = (props) => {
  const [sales, setSales] = useState([]);
  const { match: { params: { id } } } = props;

  useEffect(() => {
    ordersApi.getOrderById(id).then((result) => setSales(result.data));
  }, [id]);

  if (sales.length === ZERO) return <p>Nenhuma venda cadastrada</p>;

  return (
    <div>
      <div>
        <TopMenu title="Detalhes de Pedido" />
      </div>
      <div>
        <div className="d-flex justify-content-between">
          <span data-testid="order-number">{ `Pedido ${id}` }</span>
          <span data-testid="order-date">{ formatDate(sales[ZERO].saleDate) }</span>
        </div>
        { sales.map((sale, index) => (
          <div key={ sales.id } className="list-group">
            <li className="list-group-item list-group-item-action d-flex bd-highlight">
              <span className="p-2 bd-highlight" data-testid={ `${index}-product-qtd` }>
                {sale.quantity}
                &nbsp;-
              </span>
              <span className="p-2 bd-highlight" data-testid={ `${index}-product-name` }>{ sale.name }</span>
              <span className="ml-auto p-2 bd-highlight" data-testid={ `${index}-product-total-value` }>{ formatValor(sale.totalSaleProduct) }</span>
            </li>
          </div>
        )) }
        <span className="d-flex justify-content-end" data-testid="order-total-value">
          Total:&nbsp;
          { formatValor(sales[ZERO].totalSale) }
        </span>
      </div>
    </div>
  );
};

OrderDetail.propTypes = {
  match: PropTypes.isRequired,
  params: PropTypes.isRequired,
  id: PropTypes.string.isRequired,
};

export default OrderDetail;
