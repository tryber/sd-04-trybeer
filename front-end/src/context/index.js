/* eslint-disable no-magic-numbers */
import React, { createContext, useState } from 'react';

// criacao do contexto
const ProductContext = createContext();

// criacao do provider, ele que vai prover o acesso das informacoes
const ProductProvider = ({ children }) => {
  const [cartValue, setCartValue] = useState(0);

  function totalValue() {
    const storage = JSON.parse(localStorage.cartItens);
    if (storage.length > 0) {
      const valor = storage.map((ele) => ele.price * ele.quantity);
      const final = valor.reduce((acc, numero) => acc + numero, 0);
      return final;
    }
    return 0;
  }

  const context = { cartValue, setCartValue, totalValue };
  return <ProductContext.Provider value={ context }>{children}</ProductContext.Provider>;
};

export { ProductContext, ProductProvider };

ProductProvider.propTypes = {
  // eslint-disable-next-line no-undef
  children: PropTypes.element.isRequired,
};
