import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TrybeerContext = createContext();

const list = [
  { product: 'caipirinha', id: 0, value: 10.0 },
  { product: 'heineken', qty: 10, value: 15.0 },
]

const ProviderTrybeer = ({ children }) => {
  const [user, setUser] = useState({});
  const [product, setProduct] = useState(list)

  const context = { user, setUser, product, setProduct };

  return <TrybeerContext.Provider value={ context }>{ children }</TrybeerContext.Provider>;
};

ProviderTrybeer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
};

export default ProviderTrybeer;
