import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TrybeerContext = createContext();

const ProviderTrybeer = ({ children }) => {
  const [user, setUser] = useState({});

  // Estado para a quantidade inicial de produtos no carrinho
  const [qttPdtsCart, setQttPdtsCart] = useState([]);

  // Estado para o valor total no carrinho
  const [cartValue, setCartValue] = useState(0);

  const context = {
    user,
    setUser,
    qttPdtsCart: [qttPdtsCart, setQttPdtsCart],
    cartValue: [cartValue, setCartValue],
  };

  return <TrybeerContext.Provider value={ context }>{ children }</TrybeerContext.Provider>;
};

ProviderTrybeer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
};

export default ProviderTrybeer;
