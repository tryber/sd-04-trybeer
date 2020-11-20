import React, { useEffect, useState } from 'react';
import TopMenu from '../Components/Menu/TopMenu';

import salesApi from '../services/salesApi';

const OrderDetail = (props) => {
  const [ sales, setSales] = useState([]);
  const { match: { params: { id } } } = props;

  useEffect(() => {
    salesApi.getSaleById(id).then((result) => setSales(result.data));
    console.log(sales);
  }, []);

  return (
    <div>
      <div>
        <TopMenu title="Detalhes de Pedido" />
      </div>
      <div>
        { sales.map((sale, index) => (
          <div data-testid={`${index}-order-card-container`}>
            <h1 data-testid={`${index}-order-number`}>{sale.saleId}</h1>
            <h3 data-testid={`${index}-order-total-value`}>{sale.totalSale}</h3>
          </div>
        )) }
      </div>
    </div>
  );
};

export default OrderDetail;
