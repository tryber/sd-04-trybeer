import React, { useState, useEffect, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import API from '../services/api';

import { TrybeerContext } from '../context';

const Products = () => {
  const { products, setProducts } = useContext(TrybeerContext);

  const [productCart, setProductCart] = useState([]);

  const [userIsLogged, setUserIsLogged] = useState(true);

  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    localStorage.getItem('cart')
      ? setProductCart(JSON.parse(localStorage.getItem('cart')))
      : setProductCart([]);

    API.getProducts().then((result) => setProducts(result.data));

    localStorage.getItem('user') ? setUserIsLogged(true) : setUserIsLogged(false);
  }, []);

  useEffect(() => {
    setTotalValue(productCart.reduce((tot, curr) => tot + curr.quantity * curr.price, 0));
  }, [productCart]);

  if (!userIsLogged) return <Redirect to="/login" />;

  const addProduct = (product) => {
    const { id, name, urlImage, price } = product;

    const quantity = productCart.find((prod) => prod.id === id);

    const cartWithoutNewProduct = productCart.filter((prodCart) => prodCart.id !== id);

    const newAmount = quantity ? parseInt(quantity.quantity) + 1 : 1;

    const newProduct = {
      id,
      name,
      urlImage,
      price,
      quantity: newAmount,
    };

    const newCart = [...cartWithoutNewProduct, newProduct];

    setProductCart(newCart);

    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const removeProduct = (product) => {
    const { id, name, urlImage, price } = product;

    const quantity = productCart.find((prod) => prod.id === id);

    const cartWithoutNewProduct = productCart.filter((prodCart) => prodCart.id !== id);

    const newAmount = quantity ? parseInt(quantity.quantity) - 1 : 0;

    const newProduct = {
      id,
      name,
      urlImage,
      price,
      quantity: newAmount,
    };

    const newCart =
      newAmount === 0 ? [...cartWithoutNewProduct] : [...cartWithoutNewProduct, newProduct];

    setProductCart(newCart);

    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <div>
      <h3 data-testid="top-title">TryBeer</h3>
      <div className="container mx-auto d-flex flex-wrap m-3">
        {products.map((product, index) => (
          <div className="card w-50 mx-auto m-3" key={product.id}>
            <h4 data-testid={`${index}-product-name`} className="card-title text-center">
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
              src={product.urlImage}
            />
            <section className="mx-auto m-1 d-flex align-items-center justify-content-center">
              <button
                data-testid={`${index}-product-plus`}
                onClick={() => addProduct(product)}
                className="btn btn-success"
                type="button"
              >
                +
              </button>
              <h1 data-testid={`${index}-product-qtd`} className="card m-2">
                {productCart.find((prod) => prod.id === product.id)
                  ? productCart.find((prod) => prod.id === product.id).quantity
                  : 0}
              </h1>
              <button
                data-testid={`${index}-product-minus`}
                onClick={() => removeProduct(product)}
                // disabled={productCart.find((prod) => prod.id === product.id) ? false : true}
                className="btn btn-danger"
                type="button"
              >
                -
              </button>
            </section>
          </div>
        ))}
      </div>
      <div className="m-5">
        <button disabled={totalValue === 0 ? true : false}>
          <Link
            data-testid="checkout-bottom-btn"
            className={`btn btn-info mx-auto w-75 m-2 d-flex justify-content-center ${
              totalValue === 0 ? 'disabled' : ''
            }`}
            to="/checkout"
          >
            Ver Carrinho{' '}
            <p data-testid="checkout-bottom-btn-value">
              {totalValue === 0
                ? 'R$ 0,00'
                : totalValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Products;
