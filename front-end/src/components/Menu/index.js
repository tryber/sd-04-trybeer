import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import burguerIcon from '../../assets/icons8-menu.svg';

export default function ({ nomeTela }) {
  return (
    <main>
      <Menu customBurgerIcon={<img src={burguerIcon} />} width={'48px'}>
        <a id="home" className="menu-item" href="/">
          Produtos
        </a>
        <a id="about" className="menu-item" href="/about">
          Meus pedidos
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Meu Perfil
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Sair
        </a>
      </Menu>
      <h1 data-testid="top-title">{nomeTela}</h1>
    </main>
  );
}
