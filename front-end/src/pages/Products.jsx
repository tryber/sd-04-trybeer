import React, { useEffect, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { AppContext } from '../context/AppContext';
import TopBar from '../components/ClientBar.jsx';
import api from '../services/api';
import '../App.css';

function Products() {
  const { products, setProducts } = useContext(AppContext);

  useEffect(() => {
    api.get('/products')
      .then(response => setProducts(response.data));
  }, []);

  return (
    <div>
      <TopBar title={'TryBeer'} isAdm={false} />
        <div className="products">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              urlImage={product.urlImage}
            />
          ))}
        </div>
    </div>
  )
};

export default Products;
