import React, { useState }  from "react";

export const Context = React.createContext();

const Provider = ({children}) => {
  const [cart, setCart] = useState([]);

  const states = {
    cart,
    setCart
  }

  return (
    <Context.Provider value={ states }>
      {children}
    </Context.Provider>
  );
};

export default Provider;
