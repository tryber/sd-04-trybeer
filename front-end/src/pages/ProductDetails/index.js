import React from 'react';
import Header from '../../components/Header';

import ProductDetailCard from '../../components/ProductDetailsCard';

import './styles.css';

const ProductDetails = () => (
  <div className="product-details-container">
    <Header title="Detalhes de Pedido" />
    <div className="order-details-card-container">
      <div className="order-detail-info">
        <p>
          Pedido&nbsp;
          <span data-testid="order-number">0001</span>
          <span data-testid="order-date">26/10</span>
        </p>
      </div>
      {/* Rodar map() depois */}
      <ProductDetailCard testid={ 1 } />
      <p>
        Total: &nbsp;
        <span data-testid="order-total-value">2,20</span>
      </p>
    </div>
  </div>
);

export default ProductDetails;
