import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SideMenu from '../SideMenu/index';
import TopHamburgerToggle from './TopHamburgerToggle/TopHamburgerToggle';

import './styles.css';

const TopMenu = ({ title }) => {
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
};

TopMenu.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TopMenu;
