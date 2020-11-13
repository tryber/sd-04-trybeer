import React from 'react';

import './styles.css';

const ProductDetailCard = ({ testid }) => {
  return (
    <div className="product-detail-card-body">
      <p>
        <span data-testid={`${testid}-product-qtd`}>3</span> -&nbsp; 
        <span data-testid={`${testid}-product-name`}>Cerveja</span>
      </p>
      <span data-testid={`${testid}-product-total-value`}>R$ 2,20</span>
    </div>
  );
};

export default ProductDetailCard;
