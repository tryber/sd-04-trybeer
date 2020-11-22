import React from 'react';
import PropTypes from 'prop-types';
// import { history } from 'react-router-dom';

import './styles.css';

const OrderedsCard = ({ testid }) => {

  const adminOrdersCards = () => {
    if (window.location.href === 'http://localhost:3000/admin/orders') {
      return (
        <div className="admin-order-screen-details">
          <span className="order-address">Endereço</span> <br />
          <span className="order-situation">Pendente/Entregue</span>
        </div>
      )
    }
  };

  return (
    <div className="orders-card-body">
      <div className="ordereds-info">
        <span className="bold-text" data-testid={`${testid}-order-number`}>
          Pedido 001
      </span>
        <span data-testid={`${testid}-order-date`}>20/11</span>
      </div>
      {adminOrdersCards()}
      <span className="bold-text" data-testid={`${testid}-order-total-value`}>
        R$ 46,85
    </span>
    </div>
  )
};

OrderedsCard.propTypes = {
  testid: PropTypes.number.isRequired,
};

export default OrderedsCard;
