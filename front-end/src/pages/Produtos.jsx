import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Menu from '../components/Menu';
import ProductCards from '../components/ProductCards';

const Produtos = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3001/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Menu title="TryBeer" />
      {products && <ProductCards products={products} />}
      <div>
        <Link to="/checkout">
          <button type="button" data-testid="checkout-bottom-btn">
            Ver Carrinho
          </button>
        </Link>
        <input
          type="text"
          data-testid="checkout-bottom-btn-value"
          readOnly
          value={'valor total'}
        />
      </div>
    </div>
  );
};

export default Produtos;
