import React from 'react';

import './styles.css';

const Rodape = () => {
  return (
    <div className="mobile-footer">
      <button data-testid="checkout-bottom-btn">
        Ver carrinho <span data-testid="checkout-bottom-btn-value">R$ 00,00</span>
      </button>
    </div>
  );
};

export default Rodape;
