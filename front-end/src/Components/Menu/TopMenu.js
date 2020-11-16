import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BsJustify } from 'react-icons/bs';

import ElementsMenu from './ElementsMenu';

function renderTopMenu(openMenu, setOpenMenu) {
  return openMenu === true ? setOpenMenu(false) : setOpenMenu(true);
}

function TopMenu({ title }) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <div>
        <div>
          <button onClick={ () => renderTopMenu(openMenu, setOpenMenu) } data-testid="top-hamburguer" type="button">
            <BsJustify />
          </button>
        </div>
        {openMenu === true ? ElementsMenu() : null}
      </div>
      <h2 data-testid="top-title">{`${title}`}</h2>
    </div>
  );
}

TopMenu.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TopMenu;
