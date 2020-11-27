import React from 'react';
import  { Link } from 'react-router-dom';

const ADMOrdersCards = ({ orders, testid }) => {
  return (
    <div className="orders-card-body">
      <div className="ordereds-info">
        <Link to={`/orders/${orders.id}`} data-testid={`${testid}-order-number`}>
          {`Pedido ${orders.id}`}
        </Link>
      </div>
      <span data-testid={`${testid}-order-address`}>{orders.deliveryAdress} , {orders.deliveryNumber}</span><br />
      <span className="bold-text" data-testid={`${testid}-order-total-value`}>
        {orders.totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </span>
  <button>{orders.status}</button>
    </div>

  );
}

export default ADMOrdersCards;
