import React from 'react';

import ProductsCard from '../../components/ProductsCard';
import Rodape from '../../components/Rodape';

import './styles.css';

const Products = () => {
  return (
    <div className="products-page">
      <div>Aqui vai um header...</div>
      {/* Esse testid por enquanto vai ser 1, mas o ideal é que seja passado */}
      {/* um index de uma função map(() => {}) */}
      {/* Rodar um map() depois */}
      <ProductsCard testid={1} />
      <Rodape />
    </div>
  );
};

export default Products;
