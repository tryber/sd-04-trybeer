import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { BsJustify } from 'react-icons/bs';
import './styleMenu.css';

import ElementsMenu from './ElementsMenu';

function renderTopMenu(openMenu, setOpenMenu) {
  return openMenu === true ? setOpenMenu(false) : setOpenMenu(true);
}

function TopMenu({ title }) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="header-content">
      <div className="header-title">
        <h2 data-testid="top-title">{`${title}`}</h2>
      </div>
      <div className="header-back">
        <div className="header-icon">
          <button
            onClick={ () => renderTopMenu(openMenu, setOpenMenu) }
            data-testid="top-hamburguer"
            type="button"
          >
            <BsJustify className="style-icon" />
          </button>
        </div>
        {openMenu === true ? ElementsMenu() : null}
      </div>
    </header>
  );
}

TopMenu.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TopMenu;
