import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import API from '../services/api';
import { Redirect } from 'react-router-dom';
import { TrybeerContext } from '../context';

const Products = () => {
  const { products, setProducts } = useContext(TrybeerContext);

  const [productQuantity, setProductQuantity] = useState(0);

  const [buttonDisable, setButtonDisable] = useState(true);

  const [userIsLogged, setUserIsLogged] = useState(true);

  useEffect(() => {
    API.getProducts()
      .then((result) => setProducts(result.data))
      .catch((err) => console.error(err));

    console.log('Hello Trybeer');

    if (localStorage.getItem('carts')) {
      let cartProducts = JSON.parse(localStorage.getItem('carts'));
      console.log(cartProducts);
    }
    localStorage.getItem('user') ? setUserIsLogged(true) : setUserIsLogged(false);
  }, []);

  console.log(products.map((result) => result));

  if (!userIsLogged) return <Redirect to="/login" />;

  const addProduct = () => {
    setProductQuantity(productQuantity + 1);
    setButtonDisable(false);
  };

  const removeProduct = () => {
    if (productQuantity === 0) return setButtonDisable(true);
    setProductQuantity(productQuantity - 1);
  };

  return (
    <div>
      <h3 data-testid="top-title">Página de produtos</h3>
      <div className="container d-flex flex-wrap">
        {products.map((product, index) => (
          <div className="card w-50 mx-auto m-3" key={product.id}>
            <h4 data-testid={`${index}-product-name`} className="card-title mx-auto">
              {product.name}
            </h4>
            <h5 data-testid={`${index}-product-price`} className="card-content mx-auto">
              {product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </h5>
            <img
              className="mx-auto m-2"
              height="90px"
              data-testid={`${index}-product-img`}
              alt={product.name}
              src={product.url_image}
            />
            <section className="mx-auto m-1 d-flex align-items-center justify-content-center">
              <button
                data-testid={`${index}-product-plus`}
                onClick={addProduct}
                className="btn btn-success"
                type="button"
              >
                +
              </button>
              <h1 data-testid={`${index}-product-qtd`} className="card m-2">
                {productQuantity}
              </h1>
              <button
                data-testid={`${index}-product-minus`}
                onClick={removeProduct}
                disabled={buttonDisable}
                className="btn btn-danger"
                type="button"
              >
                -
              </button>
            </section>
          </div>
        ))}
      </div>
      <Link
        data-testid="checkout-bottom-btn"
        className="fixed-bottom btn btn-info mx-auto w-75 m-2"
        to="/checkout"
      >
        Ver Carrinho
        <p data-testid="checkout-bottom-btn-value"></p>
      </Link>
    </div>
  );
};

export default Products;
