import React, { useState, useEffect, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import API from '../services/api';

import { TrybeerContext } from '../context';

const Products = () => {
  const { products, setProducts } = useContext(TrybeerContext);

  const [productCart, setProductCart] = useState([]);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [userIsLogged, setUserIsLogged] = useState(true);

  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    localStorage.getItem('cart')
      ? setProductCart(JSON.parse(localStorage.getItem('cart')))
      : setProductCart([]);

    API.getProducts().then((result) => setProducts(result.data));

    console.log('produtos useEffect', products);

    console.log(productCart);

    localStorage.getItem('user') ? setUserIsLogged(true) : setUserIsLogged(false);
  }, []);

  console.log('produtos ja existentes no carrinho', productCart);

  if (!userIsLogged) return <Redirect to="/login" />;

  const createQuantity = () => products;

  const addProduct = async (product) => {
    const {
      id, name, urlImage, price, quantity,
    } = product;

    console.log('qunatity, linha 39', quantity);

    const cartWithoutNewProduct = productCart.filter((prodCart) => prodCart.id !== product.id);

    const newAmount = quantity ? parseInt(quantity) + 1 : 1;

    const newProduct = {
      id,
      name,
      urlImage,
      price,
      quantity: newAmount,
    };

    console.log('newAmount/;', newAmount);

    console.log('novo item comprado', newProduct);
    console.log('carrinho sem o produto atual', cartWithoutNewProduct);

    const newCart = [...cartWithoutNewProduct, newProduct];

    await setProductCart(newCart);
    console.log('newCart: ', newCart);

    const setTotal = productCart.reduce((tot, curr) => tot + curr.quantity * curr.price, 0);
    console.log(setTotal);
    setTotalValue(setTotal);

    localStorage.setItem('cart', JSON.stringify(newCart));
    setButtonDisabled(false);
  };

  const removeProduct = (product) => {
    console.log('removendo produto', product.name);
  };

  return (
    <div>
      <h3 data-testid="top-title">Página de produtos</h3>
      <div className="container d-flex flex-wrap">
        {products.map((product, index) => (
          <div className="card w-50 mx-auto m-3" key={ product.id }>
            <h4 data-testid={ `${index}-product-name` } className="card-title text-center">
              {product.name}
            </h4>
            <h5 data-testid={ `${index}-product-price` } className="card-content mx-auto">
              {product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </h5>
            <img
              className="mx-auto m-2"
              height="90px"
              data-testid={ `${index}-product-img` }
              alt={ product.name }
              src={ product.urlImage }
            />
            <section className="mx-auto m-1 d-flex align-items-center justify-content-center">
              <button
                data-testid={ `${index}-product-plus` }
                onClick={ () => addProduct(product) }
                className="btn btn-success"
                type="button"
              >
                +
              </button>
              <h1 data-testid={ `${index}-product-qtd` } className="card m-2">
                {product.quantity || 0}
              </h1>
              <button
                data-testid={ `${index}-product-minus` }
                onClick={ () => removeProduct(product) }
                disabled={ buttonDisabled }
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
        {' '}
        {totalValue === 0
          ? ''
          : totalValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        <p data-testid="checkout-bottom-btn-value" />
      </Link>
    </div>
  );
};

export default Products;
