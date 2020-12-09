import React, { useEffect, useState } from 'react';
// import { TrybeerContext } from '../../context/index';

import API from '../../services/api';

import Header from '../Header';
import SideBar from '../SideBarCLI';

const zero = 0;

const Products = () => {
  // const { setProductsCtx } = useContext(TrybeerContext);
  const [products, setProducts] = useState([]);
  const [cartProducts, setcartProducts] = useState([]);
  const [disable, setDisable] = useState(true);

  function ableCart() {
    const checkStorage = JSON.parse(localStorage.getItem('totalPrice'));
    if (checkStorage) {
      return setDisable(false);
    }
    return setDisable(true);
  }

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    API.getProducts(token).then((items) => setProducts(items.data));
    if (localStorage.getItem('cart')) {
      return setcartProducts(JSON.parse(localStorage.getItem('cart')));
    } return setcartProducts([]);
  }, []);

  useEffect(() => ableCart());

  // useEffect(() => setProductsCtx(products))

  function addQuantity(product) {
    const {
      id, name, price, urlImg,
    } = product;
    const productCart = cartProducts.find((item) => item.id === id);
    const newQuantity = productCart ? productCart.quantity + 1 : 1;
    const upProduct = {
      id, name, price, urlImg, quantity: newQuantity, totalPrice: newQuantity * price,
    };
    const noNewProductCart = cartProducts.filter((item) => item.id !== id);
    const newProductCart = [upProduct, ...noNewProductCart];
    localStorage.setItem('cart', JSON.stringify(newProductCart));
    setcartProducts(newProductCart);
  }

  function removeQuantity(product) {
    const {
      id, name, price, urlImg,
    } = product;
    const productCart = cartProducts.find((item) => item.id === id);
    let newQuantity = zero;
    if (productCart) {
      if (productCart.quantity === 1) {
        const noNewProductCart = cartProducts.filter((item) => item.id !== id);
        localStorage.setItem('cart', [JSON.stringify(noNewProductCart)]);
        setcartProducts(noNewProductCart);
      }
      if (productCart.quantity > 1) {
        newQuantity = productCart.quantity - 1;
        const upProduct = {
          id, name, price, urlImg, quantity: newQuantity, totalPrice: newQuantity * price,
        };
        const noNewProductCart = cartProducts.filter((item) => item.id !== id);
        const newProductCart = [upProduct, ...noNewProductCart];
        localStorage.setItem('cart', JSON.stringify(newProductCart));
        setcartProducts(newProductCart);
      }
    }
  }

  function cart() {
    const cartValue = JSON.parse(localStorage.getItem('cart'));
    if (cartValue) {
      const price = cartValue.reduce((acc, item) => acc + item.totalPrice, zero);
      localStorage.setItem('totalPrice', JSON.stringify(price));
      return price.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      });
    }
    return zero.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }
  function goToCheckout() {
    window.location.href = 'http://localhost:3000/checkout';
  }
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
            <h5
              data-testid={ `${item.id - 1}-product-name` }
              className="card-title"
            >
              {item.name}
            </h5>
            <p
              className="card-text"
              data-testid={ `${item.id - 1}-product-price` }
            >
              {item.price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
            <button
              data-testid={ `${item.id - 1}-product-plus` }
              type="button"
              className="btn btn-primary"
              onClick={ () => addQuantity(item) }
            >
              +
            </button>
            <button
              data-testid={ `${item.id - 1}-product-minus` }
              type="button"
              className="btn btn-danger"
              onClick={ () => removeQuantity(item) }
            >
              -
            </button>
            <span
              data-testid={ `${item.id - 1}-product-qtd` }
              className="badge badge-light"
            >
              {cartProducts.find((product) => product.id === item.id)
                ? cartProducts.find((product) => product.id === item.id)
                  .quantity
                : zero}
            </span>
          </div>
        </div>
      ))}
      <span
        data-testid="checkout-bottom-btn-value"
        className="badge badge-light"
      >
        {cart()}
      </span>
      <button
        type="button"
        data-testid="checkout-bottom-btn"
        className="btn btn-primary"
        disabled={ disable }
        onClick={ () => goToCheckout() }
      >
        Ver Carrinho
      </button>
    </div>
  );
};

export default Products;
