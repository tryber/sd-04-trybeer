import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({
  navStyle,
  setNavStyle,
  setTransitionMenuHambuger,
  setNavDisplay,
  navDisplay,
  navDisplayTrue,
}) => {
  return (
    <nav
      className="side-menu-container"
      style={navStyle}
      onClick={() => {
        navDisplayTrue(setTransitionMenuHambuger, setNavStyle, setNavDisplay, navDisplay);
      }}
    >
      <ul className="side-menu-container-list-container">
        <li>
          <Link data-testid="side-menu-item-products" to='/products'>Produtos</Link>
        </li>
        <li>
          <Link data-testid="side-menu-item-my-orders" to='/orders'>Meus pedidos</Link>
        </li>
        <li>
          <Link data-testid="side-menu-item-my-profile" to='/profile'>Meu Perfil</Link>
        </li>
        <li>
          <Link data-testid="side-menu-item-logout" to='/'>Sair</Link>
        </li>
      </ul>
    </nav>
  )
};

NavBar.propTypes = {
  navStyle: PropTypes.objectOf(PropTypes.string),
  setNavStyle: PropTypes.func,
  setTransitionMenuHambuger: PropTypes.func,
  setNavDisplay: PropTypes.func,
  navDisplay: PropTypes.bool,
  navDisplayTrue: PropTypes.func,
};

export default NavBar;
