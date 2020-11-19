import React from 'react';
import Header from '../../components/Header';
import CheckoutContainer from '../../components/CheckoutContainer';
// import './style.css';

const Checkout = () => {
  return (
    <Header wrapper={CheckoutContainer} /> //wrapper = component name to render
  );
};

export default Checkout;
