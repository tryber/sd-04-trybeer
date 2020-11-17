import React, { useState } from 'react';

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

const admin = () => {
  return (
    <ul>
      <Link to="/admin/orders">
        <li data-testid="side-menu-item-orders">Pedidos</li>
      </Link>
      <Link to="/admin/profile">
        <li data-testid="side-menu-item-profile">Perfil</li>
      </Link>
      <span>
        <li></li>
      </span>
      <span>
        <li></li>
      </span>
      <Link to="/login">
        <li
          data-testid="side-menu-item-logout"
          onClick={() => window.localStorage.clear()}
        >
          Sair
        </li>
      </Link>
    </ul>
  );
};

const SideBar = ({ userType }) => {
  let identification = '';
  let elements = '';
  let classes = '';
  userType === 'client' ? (identification = 'sideBar') : (identification = 'sideB');
  userType === 'client' ? (elements = client()) : (elements = admin());
  userType === 'client'
    ? (classes = 'side-menu-container')
    : (classes = 'admin-side-bar-container');
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      id={ identification }
      className={`${classes} ${toggle ? 'active' : ''}`}
      onClick={() => setToggle(!toggle)}
    >
      <div data-testid="top-hamburguer" className="toggle-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
      {elements}
    </nav>
  );
};

export default SideBar;
