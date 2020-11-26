import React, { useContext, useEffect } from 'react';

import Products from './components/Products';
import AdressForm from './components/AdressForm';

import { Context } from '../../context';

import './style.css';

const Checkout = () => {
  const { cartState, setCartState } = useContext(Context);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('products'));
    if (cart) {
      const myProducts = cart.filter(({ quantity }) => quantity !== 0);
      // console.log(cart);
      console.log(myProducts);
      setCartState(myProducts);
    }
  }, []);

  return (
    <div className="checkout-container">
      <Products cartState={ cartState } setCartState={ setCartState } />
      <AdressForm cartState={ cartState } />
    </div>
  );
};

export default Checkout;
