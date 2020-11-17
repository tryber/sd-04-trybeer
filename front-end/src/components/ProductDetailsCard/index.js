import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ProductDetailCard = ({ testid }) => (
  <div className="product-detail-card-body">
    <p>
      <span data-testid={ `${testid}-product-qtd` }>3</span>
      &nbsp;-&nbsp;
      <span data-testid={ `${testid}-product-name` }>Cerveja</span>
    </p>
    <span data-testid={ `${testid}-product-total-value` }>R$ 2,20</span>
  </div>
);

ProductDetailCard.propTypes = {
  testid: PropTypes.number.isRequired,
};

export default ProductDetailCard;
