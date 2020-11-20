import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './Menu.module.css';

const Menu = ({ title }) => {
  const [menu, setMenu] = useState(false);

  const cleanLocal = () => {
    localStorage.clear();
  };

  const sideMenu = () => {
    return (
      <div className={`side-menu-container ${styles.menuContainer}`}>
        <Link to="/products">
          <button
            className={styles.menuBtn}
            data-testid="side-menu-item-products"
            type="button"
          >
            Produtos
          </button>
        </Link>
        <hr />
        <Link to="/orders">
          <button
            className={styles.menuBtn}
            data-testid="side-menu-item-my-orders"
            type="button"
          >
            Meus pedidos
          </button>
        </Link>
        <hr />
        <Link to="/profile">
          <button
            className={styles.menuBtn}
            data-testid="side-menu-item-my-profile"
            type="button"
          >
            Meu Perfil
          </button>
        </Link>
        <hr />
        <Link to="login">
          <button
            className={styles.menuBtn}
            data-testid="side-menu-item-logout"
            type="button"
            onClick={cleanLocal}
          >
            Sair
          </button>
        </Link>
        <hr />
      </div>
    );
  };

  return (
    <>
      <header className={styles.menuHeader}>
        <h1 data-testid="top-title" className={styles.title}>
          {title}
        </h1>
        <button
          className={styles.hamburguer}
          data-testid="top-hamburguer"
          type="button"
          onClick={() => setMenu(!menu)}
        />
      </header>
      {menu && sideMenu()}
    </>
  );
};

export default connect(null, null)(Menu);
