import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppBeertContext from './appBeerContext';
import apiProducts from '../services/productApi';

const Provider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const history = useHistory();

  const setData = () => {
    apiProducts.getProducts().then((response) => {
      setProducts(response.data)
      setIsLoading(false);
    });
  }

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) history.push('/login');
    if (localStorage.getItem('cart')) {
      const data = localStorage.getItem('cart');
      setCart(JSON.parse(data))
    }
  }, []);

  const contextValue = {
    products,
    setProducts,
    cart,
    setCart,
    setData,
    isloading,
  };

  return (
    <AppBeertContext.Provider value={contextValue}>
      {children}
    </AppBeertContext.Provider>);
}

export default Provider;
