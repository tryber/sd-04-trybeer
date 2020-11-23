import React from 'react';
import { screen } from '@testing-library/react';
import * as API from '../services/TrybeerApi';
import Products from '../pages/Products';
import renderWithReduxRouter from './helpers/renderWithRedux';

jest.mock('../services/TrybeerApi.js');

const mock = {
  data: {
    'Skol Lata 250ml': {
      id: 1, name: 'Skol Lata 250ml', price: 2.2, url_image: 'http://localhost:3001/images/Skol Lata 350ml.jpg',
    },
    'Heineken 600ml': {
      id: 2, name: 'Heineken 600ml', price: 7.5, url_image: 'http://localhost:3001/images/Heineken 600ml.jpg',
    },
  },
};

const resolve = Promise.resolve(mock);

API.getProducts = jest.fn(() => resolve);

describe('Tela de Produtos', () => {
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

  describe('Nessa tela, os produtos devem ser organizados em "cards", e deve haver um card para cada produto', () => {
    it('Os cards devem conter os seguintes dados do produto: Foto; Nome do produto; Preço unitário; Quantidade atual inserida no carrinho; Botão de adicionar (+) e de remover (-) uma unidade do produto no carrinho.', async () => {
      renderWithReduxRouter(<Products />);
      const dataTestIds = ['price', 'img', 'name', 'plus', 'minus', 'qtd'];
      await screen.findByTestId('0-product-price');
      expect.assertions(12);
      Object.values(mock.data).forEach((_value, i) => {
        dataTestIds
          .forEach((testId) => expect(screen.getByTestId(`${i}-product-${testId}`)).toBeInTheDocument());
      });
    });
  });
});
