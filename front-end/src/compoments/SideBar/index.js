import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import './style.css';

const SideBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      id="sideBar"
      className={`side-menu-container ${toggle ? 'active' : ''}`}
      onClick={() => setToggle(!toggle)}
    >
      <div data-testid="top-hamburguer" className="toggle-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <Link to="#">
          <li data-testid="side-menu-item-products">Produtos</li>
        </Link>
        <Link to="#">
          <li data-testid="side-menu-item-my-orders">Meus pedidos</li>
        </Link>
        <Link to="#">
          <li data-testid="side-menu-item-my-profile">Meu Perfil</li>
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
            onClick={
              (() => window.localStorage.clear())
            }
          >
            Sair
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default SideBar;
