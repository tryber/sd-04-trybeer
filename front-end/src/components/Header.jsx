import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import SideBar from './SideBar';
import { Duff, menuIcon } from '../images/index';
import '../css/header.css';

export function Header({ children }) {
  const userinfo = JSON.parse(localStorage.getItem('user'));
  const [btnBurguer, setBtnBurguer] = useState(
    userinfo && userinfo.role === 'administrator',
  );
  if (!userinfo) return <Redirect to="/login" />;
  return (
    <div className="header-container">
      <header>
        <button
          data-testid="top-hamburguer"
          className="header-menu-icon"
          onClick={ () => setBtnBurguer(!btnBurguer) }
        >
          <img src={ menuIcon } alt="Hamburguer menu icon" />
        </button>
        <img src={ Duff } alt="duff logo" className="duff-logo" />
        <span data-testid="top-title" className="header-title">{children}</span>
      </header>
      <SideBar userRole={ userinfo.role } active={btnBurguer}/>
    </div>
  );
}
