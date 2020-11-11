import React, { useState } from 'react';
import SideBar from './SideBar';
const userRole = JSON.parse(localStorage.getItem('user'));
export function Header({ children }) {
  const [btnBurguer, setBtnBurguer] = useState(false);
  return (
    <header>
      <button
        data-testid="top-hamburguer"
        onClick={() => setBtnBurguer(!btnBurguer)}
      >
        hamburguer
      </button>
      <h1 data-testid="top-title">{children}</h1>
      {btnBurguer && <SideBar userRole={userRole.role} />}
    </header>
  );
}
