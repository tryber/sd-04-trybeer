import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import Card from '../../components/Card';
import Menu from '../../components/Menu';

const Products = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    (async() => {
      const products = await api.productsAPI();
      console.log('data', products)
      setData(products);
    })()
  }, []);
  
  return (
  <>
    <Menu nomeTela="TryBeer" />
    <div className="container-general container-cards">
      {data.map(({ url_image, name, price }, index) => (
        <Card index={index} img={url_image} title={name} price={price} />
      ))}
    </div>
  </>
  )
};

export default Products;
