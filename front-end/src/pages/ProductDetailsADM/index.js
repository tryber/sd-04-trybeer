import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import SideMenuAdmin from '../../components/SideMenuAdmin';
import ProductDetailsCard from '../../components/ProductDetailsCard';

import api from '../../services/api';

import './styles.css';

const ProductDetailsADM = ({ match: { params: { orderNumber } } }) => {
  const [product, setProduct] = useState('');
  const [status, setStatus] = useState('');

  const changeStatus = async () => {
    try {
      const response = await api.put(`/admin/orders/${orderNumber}`);
      // console.log(response.data);
      setProduct(response);
    } catch (error) {
      // console.log(error.response.data.error);
    }
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await api.get(`/admin/orders/${orderNumber}`);
      setProduct(response.data);
    };
    fetchProductDetails();
  }, [orderNumber, setStatus]);

  return (
    <div>
      <div className="product-details-container">
        <SideMenuAdmin />
        <div className="order-details-card-container">
          <div className="order-detail-info">
            <p className="details-order-head">
              <span data-testid="order-number">
                {`Pedido ${product.id}`}
              </span>
              <span data-testid="order-status">
                {`- ${status || product.status}`}
              </span>
            </p>
          </div>
          {product.products
            && product.products.map(({
              orderId, quantity, name, price,
            }, index) => (
              <ProductDetailsCard
                key={ orderId }
                testid={ index }
                quantity={ quantity }
                name={ name }
                total={ (quantity * price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
              />
            ))}
          <p>
            Total: &nbsp;
            <span data-testid="order-total-value">
              {product && product.totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </span>
          </p>
        </div>
        {product.status === 'Pendente' ? (
          <button type="button" data-testid="mark-as-delivered-btn" onClick={ changeStatus }>Marcar como entregue</button>
        ) : ('')}
      </div>
    </div>
  );
};

ProductDetailsADM.propTypes = {
  match: PropTypes.PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.string,
  }).isRequired,
};

export default ProductDetailsADM;
