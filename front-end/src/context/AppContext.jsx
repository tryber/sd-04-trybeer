import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

const list = [
  { product: 'caipirinha', qty: 4, value: 10.0 },
  { product: 'heineken', qty: 10, value: 15.0 },
  { product: 'Conhaque', qty: 2, value: 12.5 },
  { product: 'Hennesey', qty: 2, value: 50.0 },
];

const AppProvider = ({ children }) => {
  const [email, setEmail] = useState('jctinin@outlook.com');
  const [userName, setUserName] = useState('Julio Cesar Tinin');
  const [orderList, setOrderList] = useState(list);

  const context = {
    email,
    setEmail,
    userName,
    setUserName,
    orderList,
    setOrderList,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

//Prop-types

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
