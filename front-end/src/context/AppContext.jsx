import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const Listorders = [
    { orderId: 1, orderDate: '27/08', orderPriceSum: 10 },
    { orderId: 2, orderDate: '27/10', orderPriceSum: 15 },
  ];
  const [email, setEmail] = useState("jctinin@outlook.com");
  const [userName, setUserName] = useState("Julio Cesar Tinin");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

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
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

//Prop-types

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
