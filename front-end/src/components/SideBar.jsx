import React from 'react';
export default function SideBar({ userRole }) {
  return (
    <nav>
      {userRole === 'client' && (
        <div className="side-menu-container" visible='true'>
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
      {userRole === 'administrator' && (
        <div class="admin-side-bar-container" visible='true'>
          <a href="/admin/orders" data-testid="side-menu-item-orders">
            Meus pedidos
          </a>
          <a href="/admin/profile" data-testid="side-menu-item-profile">
            Meu perfil
          </a>
          <a href="/login" data-testid="side-menu-item-logout">
            sair
          </a>
        </div>
      )}
    </nav>
  );
}
