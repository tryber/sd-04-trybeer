import React from 'react';

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
      <button type="button" data-testid={`${index}-product-qtd`}>
        0
      </button>
      <button type="button" data-testid={`${index}-product-plus`}>
        +
      </button>
    </div>
  ));
};

export default ProductCards;
