import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TrybeerContext = createContext();

const ProviderTrybeer = ({ children }) => {
  // Const criada para corrigir regra de magic number do lint.
  // Nem queiram saber minha opinião sobre isso
  const zero = 0;

  const [user, setUser] = useState({});

  // Estado para a quantidade inicial de produtos no carrinho
  const [qttPdtsCart, setQttPdtsCart] = useState([]);

  // Estado para o valor total no carrinho
  const [totalPriceCart, setTotalPriceCart] = useState(zero);

  const context = {
    user,
    setUser,
    qttPdtsCart: [qttPdtsCart, setQttPdtsCart],
    totalPriceCart: [totalPriceCart, setTotalPriceCart],
  };

  return <TrybeerContext.Provider value={ context }>{ children }</TrybeerContext.Provider>;
};

ProviderTrybeer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
};

export default ProviderTrybeer;
