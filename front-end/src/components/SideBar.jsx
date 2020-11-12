import React from 'react';
export default function SideBar({ userRole }) {
  return (
    <nav className="side-menu-container" visible='true'>
      {userRole === 'client' && (
        <div>
          <a href="/products" data-testid="side-menu-item-products">
            Produtos
          </a>
          <a href="/orders" data-testid="side-menu-item-my-orders">
            meus pedidos
          </a>
          <a href="/profile" data-testid="side-menu-item-my-profile">
            meu perfil"
          </a>
          <a href="/login" data-testid="side-menu-item-logout">
            sair
          </a>
        </div>
      )}
    </nav>
  );
}
