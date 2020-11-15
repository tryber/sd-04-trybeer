import React from 'react';
import { connect } from 'react-redux';

const ProductCards = ({ products }) => {
  return products.map((product, index) => (
    <div key={product.name}>
      <p data-testid={`${index}-product-name`}>{product.name}</p>
      <p data-testid={`${index}-product-price`}>{`R$ ${product.price
        .toFixed(2)
        .replace('.', ',')}`}</p>
      <img data-testid={`${index}-product-img`} alt="" src={product.urlImage} />
      <button type="button" data-testid={`${index}-product-minus`}>
        -
      </button>
      <p data-testid={`${index}-product-qtd`} id={index}>
        0
      </p>
      <button type="button" data-testid={`${index}-product-plus`}>
        +
      </button>
    </div>
  ));
};

export default connect(null, null)(ProductCards);
