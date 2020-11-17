import React from 'react';
import Header from '../Header';

const UserOrder = () => (
  <div>
    <Header />
    <title data-testid="top-title">Meus Pedidos</title>
    <div data-testid="0-order-card-container">
      <p data-testid="0-order-number">Numero do pedido</p>
      <p data-testid="0-order-date">Data do pedido</p>
      <p data-testid="0-order-total-value">Valor</p>
    </div>
  </div>
);

export default UserOrder;
