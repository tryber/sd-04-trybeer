import React, { useEffect } from 'react';
import { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { AppContext } from '../context/AppContext';
import TopBar from '../components/ClientBar.jsx';
import api from '../services/api';

function Products() {
  const { products, setProducts } = useContext(AppContext);

  useEffect(() => {
    api.get('/products')
      .then(response => setProducts(response.data));
  }, []);

  return (
    <div>
      <TopBar title={'TryBeer'} isAdm={false} />
      {products.map(product => (
        <ProductCard
          name={product.name}
          price={product.price}
          imgProduct={product.imgProduct}
          quantity={product.quantity}
        />
      ))}
    </div>
  )
};

export default Products;
