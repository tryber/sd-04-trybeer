import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { getLS } from '../../helpers/index';
import './ButtonCart.css';

const ButtonCart = ({ totalPriceCart }) => {
  const totalBr = totalPriceCart.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  const totalPriceCartLs = getLS('totalPriceCart');
  // Magic number CC
  const zero = 0;

  return (
    <Link to="/checkout">
      <div className="btn-cart-container">
        <button
          type="button"
          id="btn-cart"
          data-testid="checkout-bottom-btn"
          className="btn btn-success btn-cart"
          disabled={ !(totalPriceCartLs > zero) || false }
        >
          {'Ver carrinho | '}
          <span data-testid="checkout-bottom-btn-value">{totalBr}</span>
        </button>
      </div>
    </Link>
  );
};

export default ButtonCart;

ButtonCart.propTypes = {
  totalPriceCart: propTypes.number.isRequired,
};
