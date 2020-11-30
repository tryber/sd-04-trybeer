import React from 'react';

import PropTypes from 'prop-types';

import './Header.css';

function Header({ title }) {
  return (
    <div className="headerdiv">
      <header className="title">
        <h1 className="titleh1" data-testid="top-title">{title}</h1>
      </header>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
