import React from 'react';

import './styles.css';

const ProductsCard = ({ testid }) => {
  return (
    <div className="card-body">
      <span data-testid={`${testid}-product-price`}></span>
      <img src="" alt="Aqui vai uma imagem" data-testid={`${testid}-product-img`} />
      <span data-testid={`${testid}-product-name`}></span>
      <button data-testid={`${testid}-product-minus`}>-</button>
      <span data-testid={`${testid}-product-qtd`}>0</span>
      <button data-testid={`${testid}-product-plus`}>+</button>
    </div>
  );
};

export default ProductsCard;
