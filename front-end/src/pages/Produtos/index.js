import React from 'react';

import ProdutoCard from '../../components/ProdutoCard';
import Rodape from '../../components/Rodape';

import './styles.css';

const Produtos = () => {
  return (
    <div className="products-page">
      <div>Aqui vai um header...</div>
      {/* Esse testid por enquanto vai ser 1, mas o ideal é que seja passado */}
      {/* um index de uma função map(() => {}) */}
      <ProdutoCard testid={1} />
      <Rodape />
    </div>
  );
};

export default Produtos;
