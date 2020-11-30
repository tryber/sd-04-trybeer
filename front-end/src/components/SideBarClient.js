import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import './SideBarClient.css';

export default () => {
  useEffect(() => {
    const hamburger = document.querySelector('.bm-burger-button');
    hamburger.setAttribute('data-testid', 'top-hamburguer');
  }, []);
  return (
    <Menu>
      <div className="side-menu-container">
        <Link to="products" data-testid="side-menu-item-products">Produtos</Link>
      </div>
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
