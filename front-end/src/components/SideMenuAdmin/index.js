import React from 'react';
import { useHistory } from 'react-router-dom';

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
      <button
        data-testid="side-menu-item-orders"
        type="button"
        onClick={ () => test(history, 'admin/orders') }
      >
        Pedidos
      </button>
      <button
        data-testid="side-menu-item-profile"
        type="button"
        onClick={ () => test(history, 'admin/profile') }
      >
        Perfil
      </button>
      <button data-testid="side-menu-item-logout" type="button" onClick={ () => test(history, null) }>
        Sair
      </button>
    </div>
  );
}

export default SideMenuAdmin;
