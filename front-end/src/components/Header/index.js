import React from 'react';

import SideBar from '../SideBar/index';

import './style.css';

const Header = ({ title, userType }) => {

  return (
    <div>
      <header className="title">
        <h1 data-testid="top-title">{title}</h1>
      </header>
      <SideBar role={userType} />
    </div>
  );
};

export default Header;
