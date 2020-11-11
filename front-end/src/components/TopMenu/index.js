import React, { useState } from 'react';
import cardapio from '../../assets/images/cardapio.svg';
import SideMenu from '../SideMenu/Index';
import './styles.css';
import topHamburgerToggle from './TopHamburgerToggle/TopHamburgerToggle';

function TopMenu(title) {
  const [sideMenuState, setSideMenuState] = useState(false);
  return (
    <div>
      <header className="header">
        <div className="header__img">
          <topHamburgerToggle
            onClick={() => setSideMenuState(!sideMenuState)}
            data-testid="top-hamburguer"
          />
          {SideMenu(sideMenuState)}
        </div>
        <h1 data-testid="top-title">{title}</h1>
      </header>
    </div>
  );
}

export default TopMenu;
