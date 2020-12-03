import React from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import { getLS } from '../../helpers/index';
import './ButtonCart.css';

const ButtonCart = ({ totalPriceCart }) => {
  const history = useHistory();
  const totalBr = totalPriceCart.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  const totalPriceCartLs = getLS('totalPriceCart');
  // Correção lint, magic number
  const zero = 0;

  return (
    <div className="btn-cart-container">
      <button
        type="button"
        id="btn-cart"
        data-testid="checkout-bottom-btn"
        className="btn btn-success btn-cart"
        disabled={ !(totalPriceCartLs > zero) || false }
        onClick={ () => history.push('/checkout') }
      >
        {'Ver Carrinho | '}
        <span data-testid="checkout-bottom-btn-value">{totalBr}</span>
      </button>
    </div>
  );
};

export default ButtonCart;

ButtonCart.propTypes = {
  totalPriceCart: propTypes.number.isRequired,
};
