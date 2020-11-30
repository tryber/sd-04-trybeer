import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ProductDetailCard = ({ testid, quantity, name, total }) => (
  <div className="product-detail-card-body">
    <p>
      <span data-testid={ `${testid}-product-qtd` }>{ quantity }</span>
      &nbsp;-&nbsp;
      <span data-testid={ `${testid}-product-name` }>{ name }</span>
    </p>
    <span data-testid={ `${testid}-product-total-value` }>{ total }</span>
  </div>
);

ProductDetailCard.propTypes = {
  testid: PropTypes.number.isRequired,
};

export default ProductDetailCard;
