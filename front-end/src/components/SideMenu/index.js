import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const test = (history, pathName) => {
  if (pathName == null) {
    localStorage.setItem('user', JSON.stringify({}));
    return history.push('/login');
  }
  return history.push(`/${pathName}`);
};

function SideMenu(sideMenuState) {
  const history = useHistory();
  return (
    sideMenuState && (
      <div className="side-menu-container">
        <div className="nav__list">
          <button
            type="button"
            className="nav__link"
            data-testid="side-menu-item-products"
            onClick={() => test(history, 'products')}
          >
            <span>Produtos</span>
          </button>
          <button
            type="button"
            className="nav__link"
            data-testid="side-menu-item-my-orders"
            onClick={() => test(history, 'orders')}
          >
            <span>Meus Pedidos</span>
          </button>
          <button
            type="button"
            className="nav__link"
            data-testid="side-menu-item-my-profile"
            onClick={() => test(history, 'profile')}
          >
            <span>Meu Perfil</span>
          </button>
          <button
            type="button"
            className="nav__link"
            data-testid="side-menu-item-logout"
            onClick={() => test(history, null)}
          >
            <span>Sair</span>
          </button>
        </div>
      </div>
    )
  );
}

export default SideMenu;
