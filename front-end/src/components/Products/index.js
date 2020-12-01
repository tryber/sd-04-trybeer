import React, { useEffect, useState } from 'react';

import API from '../../services/api';

import Header from '../Header';
import SideBar from '../SideBarCLI';

const zero = 0;

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    API.getProducts(token).then((items) => setProducts(items.data));
  }, []);
  return (
    <div>
      <Header title="TryBeer" />
      <SideBar />
      {products.map((item) => (
        <div key={ item.id - 1 } className="card" style={ { width: '8rem' } }>
          <img
            data-testid={ `${item.id - 1}-product-img` }
            src={ item.urlImg }
            className="card-img-top"
            alt={ item.name }
          />
          <div className="card-body">
            <h5 data-testid={`${item.id - 1}-product-name`} className="card-title">{ item.name }</h5>
            <p className="card-text" data-testid={ `${item.id - 1}-product-price` }>
              {item.price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
            <button data-testid={ `${item.id - 1}-product-plus` } type="button" className="btn btn-primary">
              +
            </button>
            <button data-testid={ `${item.id - 1}-product-minus` } type="button" className="btn btn-danger">
              -
            </button>
            <span data-testid={ `${item.id - 1}-product-qtd` } className="badge badge-light">0</span>
          </div>
        </div>
      ))}
      <span
        data-testid="checkout-bottom-btn-value"
        className="badge badge-light">
          {zero.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })
          }
      </span>
      <a
      href="/checkout"
      data-testid="checkout-bottom-btn"
      className="badge badge-dark"
      >
        Ver Carrinho
      </a>
    </div>
  );
};

export default Products;
