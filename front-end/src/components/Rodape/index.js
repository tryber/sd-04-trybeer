import React from 'react';

import './styles.css';

const Rodape = () => (
  <div className="mobile-footer">
    <button type="button" data-testid="checkout-bottom-btn">
      Ver carrinho&nbsp;
      <span data-testid="checkout-bottom-btn-value">R$ 00,00</span>
    </button>
  </div>
);

export default Rodape;
