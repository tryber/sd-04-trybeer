import React, { useEffect, useState } from 'react';

import API from '../../services/api';

import Header from '../Header';
import SideBar from '../SideBarCLI';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    API.getProducts(token).then((items) => setProducts(items.data));
  }, []);
  return (
    <div>
      <Header title="Cliente - Produtos" />
      <SideBar />
      {products.map((item) => (
        <div key={ item.id } className="card" style={ { width: "8rem" } }>
          <img src={ item.urlImg } className="card-img-top" alt={ item.name } />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              {item.price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
            <button type="button" className="btn btn-primary">
              +
            </button>
            <button type="button" className="btn btn-danger">
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
