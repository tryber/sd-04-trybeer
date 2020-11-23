import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ProductsCard = ({ testid }) => (
  <div className="card-body">
    <span data-testid={ `${testid}-product-price` }>R$ 0,00</span>
    <img src="" alt="Aqui vai uma imagem" data-testid={ `${testid}-product-img` } />
    <span data-testid={ `${testid}-product-name` }>Nome do produto</span>
    <button type="button" data-testid={ `${testid}-product-minus` }>-</button>
    <span data-testid={ `${testid}-product-qtd` }>0</span>
    <button type="button" data-testid={ `${testid}-product-plus` }>+</button>
  </div>
);

ProductsCard.propTypes = {
  testid: PropTypes.number.isRequired,
};

export default ProductsCard;
