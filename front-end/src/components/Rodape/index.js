import React, { useContext, useEffect } from 'react';

import { Context } from '../../context';

import './styles.css';

const Rodape = () => {
  const { totalCarrinho, seTotalCarrinho } = useContext(Context);

  useEffect(() => {
    const totalCompra = JSON.parse(localStorage.getItem('totalCarrinho'));
    if (totalCompra) {
      seTotalCarrinho(totalCompra);
    }
  }, []);

  return (
    <div className="mobile-footer">
      <button type="button" data-testid="checkout-bottom-btn" disabled={ totalCarrinho === 0 }>
        Ver Carrinho&nbsp;
        <span data-testid="checkout-bottom-btn-value">
          {totalCarrinho.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </span>
      </button>
    </div>
  );
};

export default Rodape;
