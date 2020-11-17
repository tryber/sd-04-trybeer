import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Header = ({ title }) => (
    <header className="title">
      <h1 data-testid="top-title">{title}</h1>
    </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
