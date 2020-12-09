import React from 'react';

import PropTypes from 'prop-types';

import './style.css';

function Header({ title }) {
  return (
    <div className="container-header">
      <header className="header-title">
        <h1 data-testid="top-title" className="title">{title}</h1>
      </header>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
