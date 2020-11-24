import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveToLocalStorage, loadFromLocalStorage } from '../services/localStorage';
import { addToCart, removeToCart, loadInitCart } from '../store/ducks/productsCart';
import { useHistory } from 'react-router-dom';
import { getProducts } from '../store/ducks/products';

import './ProductsContainer.css';

const ProductsContainer = () => {
  const history = useHistory();

  let quantity = 0;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);

  const totalCart = () => {
    let totalSummed = 0;
    Object.keys(cart).map(function (key) {
      if (cart[key].quantity > 0) {
        totalSummed += cart[key].price * cart[key].quantity;
      }
    });
    setTotal(totalSummed);
  };

  const [total, setTotal] = useState(0);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    totalCart();
    if (initialRender) {
      //To prevent to reset cart in local storage at first render
      setInitialRender(false);
    } else {
      saveToLocalStorage('cart', { cart });
    }
  }, [cart]);

  useEffect(() => {
    dispatch(getProducts());
    const cartFromLocalStorage = loadFromLocalStorage('cart');
    if (cartFromLocalStorage !== null) dispatch(loadInitCart(cartFromLocalStorage.cart));
  }, []);

  const { productsDB, productsFetching } = useSelector((state) => state.productsReducer);
  const handleGoToCheckOut = () => {
    saveToLocalStorage('cart', { cart });
    history.push('/checkout');
  };

  const handelClick = (type, product) => {
    type === 'plus' ? dispatch(addToCart(product)) : dispatch(removeToCart(product));
  };

  let t = 0;
  let price = 0;

  return (
    <>
      <div className="cardsContainer">
        {productsFetching &&
          productsDB.map(
            (product, i) => (
              cart[product.id] !== undefined
                ? (quantity = cart[product.id].quantity)
                : (quantity = 0),
              (price = product.price.toFixed(2).toString().replace('.', ',')),
              (
                <div className="productCard" key={product.name}>
                  <span className="price" data-testid={`${i}-product-price`}>
                    R$ {price}
                  </span>
                  <img
                    data-testid={`${i}-product-img`}
                    src={product.url_image}
                    alt="test"
                    height="80px"
                  />
                  <h3 data-testid={`${i}-product-name`}>{product.name}</h3>
                  <div className="quantityContainer">
                    <button
                      data-testid={`${i}-product-minus`}
                      className="productButton"
                      onClick={() => handelClick('minus', product)}
                    >
                      -
                    </button>
                    <span data-testid={`${i}-product-qtd`} className="quantity">
                      {quantity}
                    </span>
                    <button
                      data-testid={`${i}-product-plus`}
                      className="productButton"
                      onClick={() => handelClick('plus', product)}
                    >
                      +
                    </button>
                  </div>
                </div>
              )
            ),
          )}
      </div>
      <button
        disabled={total === 0}
        data-testid="checkout-bottom-btn"
        onClick={() => handleGoToCheckOut()}
      >
        Ver Carrinho
      </button>
      <h2 data-testid="checkout-bottom-btn-value">
        R$ {total.toFixed(2).toString().replace('.', ',')}
      </h2>
    </>
  );
};

export default ProductsContainer;
