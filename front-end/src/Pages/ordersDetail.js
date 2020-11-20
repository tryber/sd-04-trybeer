import React, { useEffect, useState } from 'react';
import TopMenu from '../Components/Menu/TopMenu';

import salesApi from '../services/salesApi';

const formatDate = (saleDate) => {
  const date = new Date(saleDate).toLocaleDateString('pt-BR').split('/')
  const dateString = `${date[0]}/${date[1]}`

  return dateString;
};

const OrderDetail = (props) => {
  const [ sales, setSales] = useState([]);
  const { match: { params: { id } } } = props;

  useEffect(() => {
    salesApi.getSaleById(id).then((result) => setSales(result.data));
  }, []);
  console.log(sales);
  if (sales.length === 0) return (<p>Nenhuma venda cadastrada</p>);

  return (
    <div>
      <div>
        <TopMenu title="Detalhes de Pedido" />
      </div>
      <div>
        {console.log(sales)}
        <p data-testid="order-number">{id}</p>
        <p data-testid="order-date">{formatDate(sales[0].saleDate)}</p>
        { sales.map((sale, index) => (
          <div key={sales.id}>
            <span data-testid={`${index}-product-qtd`}>{sale.quantity}</span>
            <h1 data-testid={`${index}-product-name`}>{sale.name}</h1>
            <h3 data-testid={`${index}-product-total-value`}>{sale.totalSaleProduct}</h3>
          </div>
        )) }
        <p data-testid="order-total-value">{sales[0].totalSale}</p>
      </div>
    </div>
  );
};

export default OrderDetail;
