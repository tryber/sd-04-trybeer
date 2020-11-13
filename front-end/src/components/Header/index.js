import React from 'react';

import SideBar from '../SideBar/index';

import './style.css';

const Header = ({ title }) => {
  return (
    <div>
      <header className="title">
        <h1 data-testid="top-title">{title}</h1>
      </header>
      <SideBar />
    </div>
  );
};

export default Header;
