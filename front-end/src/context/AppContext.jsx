import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
<<<<<<< HEAD
import { date } from "faker";
=======
import { useContext } from "react";
>>>>>>> 15c7de06f25e86b733abd8830f3d307aeafac8bf

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const Listorders = [
    { orderId: 1, orderDate: '27/08', orderPriceSum: 10 },
    { orderId: 2, orderDate: '27/10', orderPriceSum: 15 },
  ];
  const [email, setEmail] = useState("jctinin@outlook.com");
  const [userName, setUserName] = useState("Julio Cesar Tinin");
  const [products, setProducts] = useState([]);
<<<<<<< HEAD
  const [orders, setOrders] = useState(Listorders);
=======
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
>>>>>>> 15c7de06f25e86b733abd8830f3d307aeafac8bf

  const context = {
    email,
    setEmail,
    userName,
    setUserName,
    products,
    setProducts,
<<<<<<< HEAD
    orders,
    setOrders,
=======
    cart,
    setCart,
    total,
    setTotal,
>>>>>>> 15c7de06f25e86b733abd8830f3d307aeafac8bf
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

//Prop-types

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
