import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import SideBar from './SideBar';


export function Header({ children }) {
  const userinfo = JSON.parse(localStorage.getItem('user'));
  const [btnBurguer, setBtnBurguer] = useState(false);

  if(!userinfo) return <Redirect to='/login'/>

  return (
    <header>
      <button
        data-testid="top-hamburguer"
        onClick={() => setBtnBurguer(!btnBurguer)}
      >
        hamburguer
      </button>
      <h1 data-testid="top-title">{children}</h1>
      {console.log(userinfo)}
      {btnBurguer && <SideBar userRole={userinfo.role} />}
    </header>
  );
}
