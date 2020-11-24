import React from 'react';
import './MyOrdersCard.css';

function MyOrdersCard({ index, orderId, orderDate, orderPriceSum }) {
  console.log(index);
  const redirect = () => {
      return window.location.replace(`http://localhost:3000/orders/${orderId}`);
  };
  const month = Intl.DateTimeFormat('en', { month: '2-digit' }).format(orderDate);
  const day = Intl.DateTimeFormat('en', { day: '2-digit' }).format(orderDate);
  return (
    <div data-testid={`${index}-order-card-container`} className='order-card' onClick={() => redirect()}>
      <p data-testid={`${index}-order-number`}>{`Pedido ${orderId}`}</p>
      <p data-testid={`${index}-order-date`}>{`${day}/${month}`}</p>
      <p data-testid={`${index}-order-total-value`}>{`R$ ${orderPriceSum}`}</p>
    </div>
  )
};

export default MyOrdersCard;
