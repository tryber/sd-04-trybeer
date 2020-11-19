import React from 'react';
import './MyOrdersCard.css';

function MyOrdersCard({ orderId, orderDate, orderPriceSum }) {
  const redirect = () => {
      return window.location.replace(`http://localhost:3000/orders/${orderId}`);
  };
  return (
    <div className='order-card' onClick={() => redirect()}>
      <p>{`Pedido ${orderId}`}</p>
      <p>{orderDate}</p>
      <p>{`R$ ${orderPriceSum}`}</p>
    </div>
  )
};

export default MyOrdersCard;