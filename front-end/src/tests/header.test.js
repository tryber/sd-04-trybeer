import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import { Header } from '../components/Header';

const renderClickOnBurguer = () => {
  const rout = renderWithRouter(<Header>Header Title</Header>);
  const btn = screen.getByTestId('top-hamburguer');
  fireEvent.click(btn);
  return rout;
};

describe('Header', () => {
  beforeAll(() => {
    localStorage.user = JSON.stringify({
      id: 2,
      name: 'Leandro Marten',
      email: 'user@test.com',
      role: 'client',
    });
  });

  afterAll(() => {
    localStorage.clear();
  });

  it('Deve haver um titulo e um ícone do tipo "hambúrguer" no canto superior esquerdo do menu superior.', () => {
    renderWithRouter(<Header>Header Title</Header>);
    expect(screen.getByText('Header Title')).toBeInTheDocument();
    expect(screen.getByTestId('top-hamburguer')).toBeInTheDocument();
  });

  it('Quando clicado, caso o menu lateral esteja oculto, deve ser mostrado. Caso contrário, o menu lateral deve ser escondido.', () => {
    const { container } = renderClickOnBurguer();
    expect(container.getElementsByClassName('side-menu-container')[0]).toBeInTheDocument();
  });

  it('Deve conter quatro itens: "Produtos", "Meus pedidos", "Meu perfil" e "Sair"', () => {
    renderClickOnBurguer();
    const itens = ['Produtos', 'Meus pedidos', 'Meu perfil', 'Sair'];
    itens.forEach((i) => expect(screen.getByText(i)).toBeInTheDocument());
  });

  it('Ao clicar no item "Produtos", a pessoa deve ser redirecionada para a tela Cliente - Produtos', async () => {
    const { history } = renderClickOnBurguer();
    const item = screen.getByText('Produtos');
    fireEvent.click(item);
    expect(history.location.pathname).toBe('/products');
  });

  it('Ao clicar no item "Meus pedidos", a pessoa deve ser redirecionada para a tela Cliente - Meus Pedidos', async () => {
    const { history } = renderClickOnBurguer();
    const item = screen.getByText('Meus pedidos');
    fireEvent.click(item);
    expect(history.location.pathname).toBe('/orders');
  });

  it('Ao clicar no item "Meu Perfil", a pessoa deve ser redirecionada para tela Cliente - Meu Perfil', async () => {
    const { history } = renderClickOnBurguer();
    const item = screen.getByText('Meu perfil');
    fireEvent.click(item);
    expect(history.location.pathname).toBe('/profile');
  });

  it('Ao clicar no item "Sair", a pessoa deve ser redirecionada para a tela Login e ser deslogada.', async () => {
    const { history } = renderClickOnBurguer();
    const item = screen.getByText('Sair');
    fireEvent.click(item);
    expect(history.location.pathname).toBe('/login');
  });
});
