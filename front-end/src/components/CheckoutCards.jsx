import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CheckoutCards.css';
import { removeProduct } from '../store/ducks/productsCart';

const CheckoutCards = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartReducer.cart);

  return (
    <div>
      {Object.keys(cart).length === 0 && <h1>Não há produtos no carrinho</h1>}
      {Object.keys(cart).map((keyName, i) => (
        <div key={cart[keyName].name} className="card">
          <h3 data-testid={`${i}-product-qtd-input`}>{cart[keyName].quantity}</h3>
          <h3 data-testid={`${i}-product-name`}>{cart[keyName].name}</h3>
          <h3 data-testid={`${i}-product-total-value`}>
            R${' '}
            {(cart[keyName].price * cart[keyName].quantity).toFixed(2).toString().replace('.', ',')}
          </h3>
          <h4 data-testid={`${i}-product-unit-price`}>
            (R$ {cart[keyName].price.toFixed(2).toString().replace('.', ',')} un)
          </h4>
          <button
            data-testid={`${i}-removal-button`}
            onClick={() => dispatch(removeProduct([keyName]))}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};
export default CheckoutCards;
