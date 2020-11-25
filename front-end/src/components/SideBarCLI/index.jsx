import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import './style.css';

export default (props) => {
  return (
    <Menu>
      <Link to="products" data-testid="side-menu-item-products">Produtos</Link>
      <Link to="orders" data-testid="side-menu-item-my-orders">Meus pedidos</Link>
      <Link to="profile" data-testid="side-menu-item-my-profile">Meu Perfil</Link>
      <Link to="/login">
        <button
          type="button"
          data-testid="side-menu-item-logout"
          onClick={ () => window.localStorage.clear() }
        >
          Sair
        </button>
      </Link>
    </Menu>
  );
};
//  <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />