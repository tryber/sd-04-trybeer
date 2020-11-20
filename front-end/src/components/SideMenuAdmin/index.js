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

function SideMenuAdmin() {
  const history = useHistory();
  return (
    <div className="admin-side-bar-container">
      <span className="app-side-title">
        TryBeer
      </span>
      <button
        data-testid="side-menu-item-orders"
        type="button"
        className="admin-side-button"
        onClick={ () => test(history, 'admin/orders') }
      >
        Pedidos
      </button>
      <button
        data-testid="side-menu-item-profile"
        type="button"
        className="admin-side-button"
        onClick={ () => test(history, 'admin/profile') }
      >
        Perfil
      </button>
      <button data-testid="side-menu-item-logout"
      type="button"
      className="admin-side-button botao-sair"
      onClick={ () => test(history, null) }>
        Sair
      </button>
    </div>
  );
}

export default SideMenuAdmin;
