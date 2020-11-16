import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [email, setEmail] = useState("jctinin@outlook.com");
  const [userName, setUserName] = useState("Julio Cesar Tinin");
  const [products, setProducts] = useState([]);

  const context = {
    email,
    setEmail,
    userName,
    setUserName,
    products,
    setProducts,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

//Prop-types

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
