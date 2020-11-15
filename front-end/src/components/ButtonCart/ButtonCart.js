import React from 'react';
import propTypes from 'prop-types';
import './ButtonCart.css';

const ButtonCart = ({ totalPriceCart }) => {
  const totalBr = totalPriceCart.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  return (
    <div className="btn-cart-container">
      <button type="button" data-testid="checkout-bottom-btn" className="btn btn-success btn-cart">
        {'Ver carrinho | '}
        <span data-testid="checkout-bottom-btn-value">{totalBr}</span>
      </button>
    </div>
  );
};

export default ButtonCart;

ButtonCart.propTypes = {
  totalPriceCart: propTypes.number.isRequired,
};
