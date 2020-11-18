/* eslint-disable no-magic-numbers */
import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

// criacao do contexto
const ProductContext = createContext();

// criacao do provider, ele que vai prover o acesso das informacoes
const ProductProvider = ({ children }) => {
  const zero = 0;
  const [cartValue, setCartValue] = useState(zero.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }));

  function totalValue() {
    const storage = JSON.parse(localStorage.cartItens);
    if (storage.length > 0) {
      const valor = storage.map((ele) => ele.price * ele.quantity);
      const final = valor.reduce((acc, numero) => acc + numero, 0);
      return final.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
    }
    return zero.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
  }

  const context = { cartValue, setCartValue, totalValue };
  return <ProductContext.Provider value={ context }>{children}</ProductContext.Provider>;
};

export { ProductContext, ProductProvider };

ProductProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
