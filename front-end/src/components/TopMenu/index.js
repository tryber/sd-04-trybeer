import React, { useState } from 'react';
import SideMenu from '../SideMenu/index';
import './styles.css';
import TopHamburgerToggle from './TopHamburgerToggle/TopHamburgerToggle';

function TopMenu({ title }) {
  const [sideMenuState, setSideMenuState] = useState(false);
  return (
    <div>
      <header className="header">
        <div>
          <TopHamburgerToggle
            onClick={ () => setSideMenuState(!sideMenuState) }
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
