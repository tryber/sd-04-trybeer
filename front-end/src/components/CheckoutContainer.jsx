import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadFromLocalStorage } from '../services/localStorage';
import { loadInitCart } from '../store/ducks/productsCart';
import CheckoutCards from './CheckoutCards';
import CheckoutForm from './CheckoutForm';

const CheckoutContainer = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartReducer.cart);

  //Each loading cart is load from localstorage
  useEffect(() => {
    const localStoreCart = loadFromLocalStorage('cart');
    if (localStoreCart !== null) dispatch(loadInitCart(localStoreCart.cart));

    // dispatch(loadInitCart(localStoreCart.cart));
  }, []);

  const totalCart = () => {
    let totalSummed = 0;
    Object.keys(cart).map(function (key) {
      totalSummed += cart[key].price * cart[key].quantity;
    });
    setTotal(totalSummed);
  };
  const [total, setTotal] = useState(0);

  const [address, setAddress] = useState({
    street: '',
    number: '',
  });

  useEffect(() => {
    totalCart();
  }, [cart]);

  return (
    <div>
      <CheckoutCards />
      <div className="form"></div>
      <h2 data-testid="order-total-value">R$ {total.toFixed(2).toString().replace('.', ',')}</h2>
      <CheckoutForm total={total} />
    </div>
  );
};
export default CheckoutContainer;
