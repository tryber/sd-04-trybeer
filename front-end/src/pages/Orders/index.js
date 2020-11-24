import React from 'react';
import MenuAdmin from '../../components/MenuAdmin';

// Requisito 7 - Criar Tela de Meus Pedidos
const Orders = () => (
  <div>
    <MenuAdmin />
    <p data-testid="top-title">Meus Pedidos</p>
    <div data-testid="0-order-card-container">
      <p data-testid="0-order-number"> Pedido 000</p>
      <p data-testid="0-order-date">Dia/Mês</p>
      <p data-testid="0-order-total-value">R$ 0,00</p>
    </div>
  </div>
);
export default Orders;
