import React from 'react';

import PropTypes from 'prop-types';

import './style.css';

function Header({ title }) {
  return (
    <div>
      <header className="title">
        <h1 data-testid="top-title">{title}</h1>
      </header>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
