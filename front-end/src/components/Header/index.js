import React from 'react';
import PropTypes from 'prop-types';

import SideBar from '../SideBar/index';

import './style.css';

const Header = ({ title, userType }) => (
  <div>
    <header className="title">
      <h1 data-testid="top-title">{title}</h1>
    </header>
    <SideBar role={ userType } />
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  userType: PropTypes.string,
};

export default Header;
