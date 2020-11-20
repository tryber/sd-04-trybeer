import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const index = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link
          to="/admin/orders"
          className="nav-link"
          data-testid="side-menu-item-orders"
        >
          Pedidos
        </Link>
        <Link
          to="/admin/profile"
          className="nav-link"
          data-testid="side-menu-item-profile"
        >
          Perfil
        </Link>
        <Link
          to="/login"
          className="nav-link"
          data-testid="side-menu-item-logout"
        >
          Sair
        </Link>
      </nav>
      <h1 className={styles.topTitle}>TryBeer</h1>
    </header>
  );
};

export default index;
