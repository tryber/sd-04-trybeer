import React from 'react';
import { Link } from 'react-router-dom';

export default function ListSales(props) {
  const { id, total_price: totalPrice, sale_date: saleData, index } = props;
  const priceArrendodado = totalPrice.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  const date = new Date(saleData).toLocaleDateString('pt-br', {
    day:'numeric',
    month:'numeric',
  });
  return (
    <Link to={`/orders/${id}`}>
      <div data-testid={`${index}-order-card-container`}>
        <h3 data-testid={`${index}-order-number`}>Pedido {id}</h3>
        <span data-testid={`${index}-order-date`}>{date}</span> <br />
        <span data-testid={`${index}-order-total-value`}>{priceArrendodado}</span>
      </div>
    </Link>
  );
}
