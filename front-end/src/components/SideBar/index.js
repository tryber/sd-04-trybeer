import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './style.css';

const client = () => (
  <ul>
    <Link to="products">
      <li data-testid="side-menu-item-products">Produtos</li>
    </Link>
    <Link to="orders">
      <li data-testid="side-menu-item-my-orders">Meus pedidos</li>
    </Link>
    <Link to="profile">
      <li data-testid="side-menu-item-my-profile">Meu Perfil</li>
    </Link>
    <span>
      <li />
    </span>
    <span>
      <li />
    </span>
    <Link to="/login">
      <li data-testid="side-menu-item-logout">
        <button
          type="button"
          onClick={ () => window.localStorage.clear() }
          onKeyDown={ () => window.localStorage.clear() }
        >
          Sair
        </button>
      </li>
    </Link>
  </ul>
);

const admin = () => (
  <ul>
    <Link to="/admin/orders">
      <li data-testid="side-menu-item-orders">Pedidos</li>
    </Link>
    <Link to="/admin/profile">
      <li data-testid="side-menu-item-profile">Perfil</li>
    </Link>
    <span>
      <li />
    </span>
    <span>
      <li />
    </span>
    <Link to="/login">
      <li data-testid="side-menu-item-logout">
        <button
          type="button"
          onClick={ () => window.localStorage.clear() }
          onKeyDown={ () => window.localStorage.clear() }
        >
          Sair
        </button>
      </li>
    </Link>
  </ul>
);

const SideBar = ({ role }) => {
  let identification = '';
  let elements = '';
  let classes = '';
  if (role === 'client') {
    identification = 'sideBar';
    elements = client();
    classes = 'side-menu-container';
  } else {
    identification = 'sideB';
    elements = admin();
    classes = 'admin-side-bar-container';
  }
  const [toggle, setToggle] = useState(false);
  return (
    <nav id={identification} className={ `${classes} ${toggle ? 'active' : ''}` }>
      <button
        type="button"
        onClick={ () => setToggle(!toggle) }
        onKeyDown={ () => setToggle(!toggle) }
      />
      <div data-testid="top-hamburguer" className="toggle-btn">
        <span />
        <span />
        <span />
      </div>
      {elements}
    </nav>
  );
};

SideBar.propTypes = {
  role: PropTypes.string.isRequired,
};

export default SideBar;
