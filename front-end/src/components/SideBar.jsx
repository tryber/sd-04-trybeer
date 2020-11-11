import React from 'react';
export default function SideBar({ userRole }) {
  console.log(userRole);
  return (
    <div data-testid="side-menu-container">
      {userRole === 'client' && (
        <nav>
          <a href="/products" data-testid="side-menu-item-products">
            Produtos
          </a>
          <a href="/meusPedidos" data-testid="side-menu-item-my-orders">
            meus pedidos
          </a>
          <a href="/meuPerfil" data-testid="side-menu-item-my-profile">
            meu perfil"
          </a>
          <a href="/login" data-testid="side-menu-item-logout">
            sair
          </a>
        </nav>
      )}
    </div>
  );
}
