import React, { useContext, useEffect } from 'react';
import BeerContext from '../context/appBeerContext';

const ShopCart = ({ product, setCartUpdate, cartUpdate, index }) => {
  const { cart, setCart } = useContext(BeerContext);
  const { name } = product;

  const addCart = () => {
    if (!cart[name]) cart[name] = { ...product, quantidade: 1 };
    else cart[name].quantidade += 1;
    setCartUpdate(!cartUpdate);
    setCart(cart);
  };

  const removeCart = () => {
    if (cart[name] && cart[name].quantidade > 1) cart[name].quantidade -= 1;
    else if (!cart[name]) return console.log('Esse produto não esta mais no carrinho');
    else delete cart[name];
    setCartUpdate(!cartUpdate);
    setCart(cart);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cartUpdate]);

  return (
    <div className="row mx-md-n5">
      <div className="col px-md-5">
        <button
          type="button"
          className="btn btn-success"
          data-testid={`${index}-product-plus`}
          onClick={() => addCart()}
        >
          +
        </button>
      </div>
      <div className="col px-md-5" data-testid={`${index}-product-qtd`}>
        {cart[name] === undefined ? <span>0</span> : <span>{cart[name].quantidade}</span>}
      </div>
      <div className="col px-md-5">
        <button
          type="button"
          className="btn btn-danger"
          data-testid={`${index}-product-minus`}
          onClick={() => removeCart()}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default ShopCart;
