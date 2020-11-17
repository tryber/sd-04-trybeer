import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const navDisplayFalse = (setTransitionMenuHambuger, setNavStyle, setNavDisplay, navDisplay) => {
  setTransitionMenuHambuger({
    lineOne: 'translate(0px, 10px) rotate(45deg)',
    lineTwo: '0',
    lineThree: 'translate(0px, -10px) rotate(-45deg)',
  });
  setNavStyle({ animationName: 'displayNav', left: '-100%' });
  setNavDisplay(!navDisplay);
};

const time = 400;
const navDisplayTrue = (setTransitionMenuHambuger, setNavStyle, setNavDisplay, navDisplay) => {
  setTransitionMenuHambuger({
    lineOne: 'translate(0px, 0px) rotate(0deg)',
    lineTwo: '1',
    lineThree: 'translate(0px, 0px) rotate(0deg)',
  });
  setNavStyle({ animationName: 'coverNav', left: '0%' });
  setTimeout(() => {
    setNavDisplay(!navDisplay);
  }, time);
};

const menuHamburgerBtn = (
  setNavDisplay,
  navDisplay,
  setNavStyle,
  transitionMenuHambuger,
  setTransitionMenuHambuger,
) => (
  <button
    type="button"
    data-testid="top-hamburguer"
    className="menu-hamburger-btn"
    onClick={ () => {
      if (!navDisplay) {
        navDisplayFalse(setTransitionMenuHambuger, setNavStyle, setNavDisplay, navDisplay);
      } else {
        navDisplayTrue(setTransitionMenuHambuger, setNavStyle, setNavDisplay, navDisplay);
      }
    } }
  >
    <div className="menu-line-1" style={ { transform: transitionMenuHambuger.lineOne } } />
    <div className="menu-line-2" style={ { opacity: transitionMenuHambuger.lineTwo } } />
    <div className="menu-line-3" style={ { transform: transitionMenuHambuger.lineThree } } />
  </button>
);

const NavBar = (navStyle, setNavStyle, setTransitionMenuHambuger, setNavDisplay, navDisplay) => (
  <nav
    className="side-menu-container"
    style={ navStyle }
    onClick={ () => {
      navDisplayTrue(setTransitionMenuHambuger, setNavStyle, setNavDisplay, navDisplay);
    } }
  >
    <ul className="side-menu-container-list-container">
      <li>
        <Link data-testid="side-menu-item-products" to="/products">
          Produtos
        </Link>
      </li>
      <li>
        <Link data-testid="side-menu-item-my-orders" to="/orders">
          Meus pedidos
        </Link>
      </li>
      <li>
        <Link data-testid="side-menu-item-my-profile" to="/profile">
          Meu Perfil
        </Link>
      </li>
      <li>
        <Link data-testid="side-menu-item-logout" to="/">
          Sair
        </Link>
      </li>
    </ul>
  </nav>
);

const Header = () => {
  const [navDisplay, setNavDisplay] = useState(false);
  const [navStyle, setNavStyle] = useState({});
  const [transitionMenuHambuger, setTransitionMenuHambuger] = useState({});

  return (
    <header>
      <div className="header-container">
        {menuHamburgerBtn(
          setNavDisplay,
          navDisplay,
          setNavStyle,
          transitionMenuHambuger,
          setTransitionMenuHambuger,
        )}
        <h1 data-testid="top-title">TryBeer</h1>
        {navDisplay
        && NavBar(navStyle, setNavStyle, setTransitionMenuHambuger, setNavDisplay, navDisplay)}
      </div>
    </header>
  );
};

export default Header;
