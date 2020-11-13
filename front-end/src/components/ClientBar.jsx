import React from 'react';
import './ClientBar.css';

let ctrOpen = false;

const changeOpen = () => {
  const menuBtn = document.querySelectorAll('.menu-btn')[0];
  const navTrigger = document.querySelectorAll('.body-nav-bar')[0];

  if (!ctrOpen) {
    menuBtn.classList.add('open');
    navTrigger.classList.add('open');
    ctrOpen = true;
    return null;
  }
  menuBtn.classList.remove('open');
  navTrigger.classList.remove('open');
  ctrOpen = false;
};

const TopBar = ({ title, isAdm }) => {
  if (isAdm) return <div>Has side bar</div>;
  return (
    <div>
      <div className="body-top-bar">
        <button className="menu-btn" onClick={() => changeOpen()} data-testid="top-hamburguer">
          <div className="menu-btn-burguer" />
        </button>
        <header className="title" data-testid="top-title">
          {title}
        </header>
        <div className="empty-box" />
      </div>
      <div className="body-nav-bar">
        <nav className="side-menu-container">
          <div>
            <button className="nav-btn" data-testid="side-menu-item-products">
              Produtos
            </button>
            <button className="nav-btn" data-testid="side-menu-item-my-orders">
              Meus Pedidos
            </button>
            <button className="nav-btn" data-testid="side-menu-item-my-profile">
              Meu Perfil
            </button>
          </div>
          <button className="nav-btn" data-testid="side-menu-item-logout">
            Sair
          </button>
        </nav>
      </div>
    </div>
  );
};

export default TopBar;
