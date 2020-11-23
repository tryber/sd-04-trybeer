import React from 'react';
import { fireEvent, screen, waitForElement } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import * as API from '../services/TrybeerApi';
import Products from '../pages/Products';

jest.mock('../services/TrybeerApi.js');

const mock = {
  'Skol Lata 250ml': {
    id: 1, name: 'Skol Lata 250ml', price: 2.2, url_image: 'http://localhost:3001/images/Skol Lata 350ml.jpg',
  },
  'Heineken 600ml': {
    id: 2, name: 'Heineken 600ml', price: 7.5, url_image: 'http://localhost:3001/images/Heineken 600ml.jpg',
  },
};

const mockValues = Object.values(mock);

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
      renderWithRouter(<Products />);
      const dataTestIds = ['price', 'img', 'name', 'plus', 'minus', 'qtd'];
      const elem = await waitForElement(() => screen.findByTestId('0-product-price'));
      expect(elem).toBeInTheDocument();
      screen.debug();
      // const elements = mockValues.map((_value, i) => dataTestIds
      //   .map((testId) => screen.findByTestId(`${i}-product-${testId}`)));

      // await Promise.all(elements[0]);
      // await Promise.all(elements[1]);
      // expect.assertions(2);
      // elements.forEach((arr) => arr.forEach((elem) => expect(elem).toBeInTheDocument()));
    });
  });
});
