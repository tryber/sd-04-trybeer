import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { TrybeerContext } from '../../context/index';

import './style.css';

export default () => {
  const { adminSidebar } = useContext(TrybeerContext);
  useEffect(() => {
    const hamburger = document.querySelector('.bm-burger-button');
    hamburger.setAttribute('data-testid', 'top-hamburguer');
  }, []);
  return (
    <Menu isOpen={ adminSidebar }>
      <Link to="/admin/orders" data-testid="side-menu-item-orders">Pedidos</Link>
      <Link to="/admin/profile" data-testid="side-menu-item-profile">Perfil</Link>
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
