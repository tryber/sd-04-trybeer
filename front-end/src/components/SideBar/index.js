import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './style.css';

function client() {
  return (
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
        <button
          type="button"
          data-testid="side-menu-item-logout"
          onClick={ () => window.localStorage.clear() }
        >
          Sair
        </button>
      </Link>
    </ul>
  );
}

function admin() {
  return (
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
        <button
          type="button"
          data-testid="side-menu-item-logout"
          onClick={ () => window.localStorage.clear() }
        >
          Sair
        </button>
      </Link>
    </ul>
  );
}

const SideBar = ({ userType }) => {
  let identification = '';
  let elements = '';
  let classes = '';
  if (userType === '') {
    identification = '';
    elements = '';
    classes = '';
  } else if (userType === 'client') {
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
    <nav id={ identification } className={ `${classes} ${toggle ? 'active' : ''}` }>
      <div
        data-testid="top-hamburguer"
        className="toggle-btn"
        role="button"
        onKeyDown={ () => setToggle(!toggle) }
        onClick={ () => setToggle(!toggle) }
        tabIndex="0"
      >
        <span />
        <span />
        <span />
      </div>
      {elements}
    </nav>
  );
};

SideBar.propTypes = {
  userType: PropTypes.string.isRequired,
};

export default SideBar;
