import React, { useState, useEffect } from 'react';
import Products from './components/Products';
import AdressForm from './components/AdressForm';
import './style.css';

const Checkout = () => {

  const [cartState, setCartState] = useState([]);

  const arrayProducts = [
    { id: 1, name: 'Cerverja Skol', amount: 3, price: 2.20 },
    { id: 2, name: 'Cerverja Skol', amount: 3, price: 2.20 },
    { id: 3, name: 'Cerverja Skol', amount: 3, price: 2.20 },
  ];

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      setCartState(JSON.parse(cart));
    }
    if (!cart || JSON.parse(cart).length < 1) {
      setCartState(arrayProducts)
      localStorage.setItem('cart', JSON.stringify([...arrayProducts]));
    }
  }, []);


  return (
    <div className="checkout-container">
      <Products cartState={cartState} setCartState={setCartState} />
      <AdressForm cartState={cartState} />
    </div>
  );
};

export default Checkout;
