import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [orderMessage, setOrderMessage] = useState('');

  const context = {
    email,
    setEmail,
    userName,
    setUserName,
    products,
    setProducts,
    cart,
    setCart,
    total,
    setTotal,
    orderMessage,
    setOrderMessage,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

//Prop-types

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
