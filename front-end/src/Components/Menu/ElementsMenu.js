import React from 'react';
import Buttons from './buttons';

function ElementsMenu() {
  return (
    <div className="side-menu-container">
      {Buttons('Produtos', '/products', 'side-menu-item-products')}
      {Buttons('Meus pedidos', '/orders', 'side-menu-item-my-orders')}
      {Buttons('Meu perfil', '/profile', 'side-menu-item-my-profile')}
      {Buttons('Sair', '/login', 'side-menu-item-logout')}
    </div>
  );
}
export default ElementsMenu;
