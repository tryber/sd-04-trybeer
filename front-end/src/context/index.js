import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TrybeerContext = createContext();

const ProviderTrybeer = ({ children }) => {
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);

  const context = {
    user, setUser, products, setProducts
  };

  return <TrybeerContext.Provider value={ context }>{children}</TrybeerContext.Provider>;
};

ProviderTrybeer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
};

export default ProviderTrybeer;
