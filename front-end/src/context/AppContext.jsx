import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { date } from "faker";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const Listorders = [
    { orderId: 1, orderDate: '27/08', orderPriceSum: 10 },
    { orderId: 2, orderDate: '27/10', orderPriceSum: 15 },
  ];
  const [email, setEmail] = useState("jctinin@outlook.com");
  const [userName, setUserName] = useState("Julio Cesar Tinin");
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState(Listorders);

  const context = {
    email,
    setEmail,
    userName,
    setUserName,
    products,
    setProducts,
    orders,
    setOrders,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

//Prop-types

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
