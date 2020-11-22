import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import ProductsCard from '../../components/ProductsCard';
// import Rodape from '../../components/Rodape';

import api from '../../services/api';

import './styles.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get('/products');
      console.log(response);
      if (response.data) {
        setProducts([...response.data]);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="products-page">
      <Header title="TryBeer" />
      <div className="product-cards-container">
        {products.map(({ id, name, price, url_image }, index) => (
          <ProductsCard key={id} testid={index} name={name} price={price} img={url_image} />
        ))}
      </div>
      {/* <Rodape /> */}
    </div>
  );
};

export default Products;
