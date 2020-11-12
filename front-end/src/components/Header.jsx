import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import SideBar from './SideBar';

export function Header({ children }) {
  const userinfo = JSON.parse(localStorage.getItem('user'));
  const [btnBurguer, setBtnBurguer] = useState(
    userinfo && userinfo.role === 'administrator'
  );
  if (!userinfo) return <Redirect to="/login" />;
  return (
    <div>
      <header>
        <button
          data-testid="top-hamburguer"
          onClick={() => setBtnBurguer(!btnBurguer)}
        >
          hamburguer
        </button>
        <h1 data-testid="top-title">{children}</h1>
      </header>
      {btnBurguer && <SideBar userRole={userinfo.role} />}
    </div>
  );
}
