import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Menu.module.css';


const MenuAdmin = () => {
  const cleanLocal = () => {
    localStorage.clear();
  };

  return (
    <header className={styles.menuHeader}>
    <h1 className={styles.title}>TryBeer</h1>
    <div className={`admin-side-bar-container ${styles.menuNav}`}>
        <Link to="/admin/orders">
          <button data-testid="side-menu-item-orders" type="button">
            Pedidos
          </button>
        </Link>
        <hr />
        <Link to="/admin/profile">
          <button data-testid="side-menu-item-profile" type="button">
            Perfil
          </button>
        </Link>
        <hr />
        <Link to="/login">
          <button
            data-testid="side-menu-item-logout"
            type="button"
            onClick={cleanLocal}
          >
            Sair
          </button>
        </Link>
        <hr />
      </div>
    </header>
  );
};

export default MenuAdmin;
