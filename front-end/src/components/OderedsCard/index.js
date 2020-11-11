import React from 'react';

import './styles.css';

const OrderedsCard = ({ testid }) => {
  return (
    <div className="orders-card-body">
      <div className="ordereds-info">
        <span className="bold-text" data-testid={`${testid}-order-number`}>
          Pedido 001
        </span>
        <span data-testid={`${testid}-order-date`}>20/11</span>
      </div>
      <span className="bold-text" data-testid={`${testid}-order-total-value`}>
        R$ 46,85
      </span>
    </div>
  );
};

export default OrderedsCard;
