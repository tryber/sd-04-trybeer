import React from 'react';

export default function ListSales(props) {
  const { id, total_price: totalPrice, sale_date: saleData, index } = props;
  return (
    <div data-testid={`${index}-order-card-container`}>
      <h2 data-testid={`${index}-order-number`}>{id}</h2>
      <h3 data-testid={`${index}-order-data`}>{saleData}</h3>
      <h3 data-testid={`${index}-order-total-value`}>{totalPrice}</h3>
    </div>
  );
}
