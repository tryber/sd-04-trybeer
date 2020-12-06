import React from 'react';
import Header from '../Header';
import SideBar from '../SideBarCLI';

const OrdersCli = () => {
  return (
    <div>
      <Header title='Cliente - Detalhes do Pedido' />
      <SideBar />
      <div className='card'>
        <div className='card-body'>
          <h5 data-testid='order-number'>Pedido 1</h5>
          <span data-testid='order-date'>06/12</span>
          <span data-testid='0-product-qtd'>5 </span>
          <span data-testid='0-product-name'>Item</span>
          <span data-testid='0-product-total-value'> R$</span>
          <span data-testid='order-total-value'>Total</span>
        </div>
      </div>
    </div>
  );
};

export default OrdersCli;
