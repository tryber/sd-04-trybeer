import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ProductsCard = ({ testid, name, price, img }) => (
  <div className="card-body">
    <span data-testid={ `${testid}-product-price` }>
      {price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
    </span>
    <img src={img} alt="Aqui vai uma imagem" data-testid={ `${testid}-product-img` } />
    <span className="product-title" data-testid={ `${testid}-product-name` }>{name}</span>
    <div className="product-card-panel">
      <button type="button" data-testid={ `${testid}-product-minus` }>-</button>
      <span data-testid={ `${testid}-product-qtd` }>0</span>
      <button type="button" data-testid={ `${testid}-product-plus` }>+</button>
    </div>
  </div>
);

ProductsCard.propTypes = {
  testid: PropTypes.number.isRequired,
};

export default ProductsCard;
