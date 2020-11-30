import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import ProductDetailCard from '../../components/ProductDetailsCard';

import api from '../../services/api';

import './styles.css';

const ProductDetails = ({ match: { params: { orderNumber } } }) => {
  const [product, setProduct] = useState('');
  // console.log(match);
  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await api.get(`/orders/${orderNumber}`);
      setProduct(response.data);
    };
    fetchProductDetails();
  }, [orderNumber]);

  return (
    <div className="product-details-container">
      <Header title="Detalhes de Pedido" />
      <div className="order-details-card-container">
        <div className="order-detail-info">
          <p>
            Pedido&nbsp;
            <span data-testid="order-number"> { product.saleId } </span>
            <span data-testid="order-date"> { product.saleDate } </span>
          </p>
        </div>
        { console.log('produtos', product) }
        { product.products
        && product.products.map(({ orderId, quantity, name, price, saleDate }, index) => (
          <ProductDetailCard
            key={ orderId }
            testid={ index }
            quantity={ quantity }
            name={ name }
            total={ quantity * price }
            saleDate={ saleDate }
          />
        )) }
        <p>
          Total: &nbsp;
        <span data-testid="order-total-value">{ product.totalPrice }</span>
        </p>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  match: PropTypes.PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.string,
  }).isRequired,
};

export default ProductDetails;
