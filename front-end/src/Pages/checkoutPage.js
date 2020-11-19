import React, { useEffect, useState } from 'react';
import {
  Button, Field, Label, Input,
} from 'rbx';
import { Redirect, useHistory } from 'react-router';
import Loader from 'react-loader-spinner';
import TopMenu from '../Components/Menu/TopMenu';

const CheckoutPage = () => {
  const [auth, setAuth] = useState({});
  const [cart, setCart] = useState([]);
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();
  const timer = 1500;
  const two = 2;
  const zero = 0;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const itens = JSON.parse(localStorage.getItem('cart'));
    const productsArray = itens && Object.values(itens);
    setAuth(user);
    setCart(productsArray);
  }, []);

  const finishShop = (e) => {
    e.preventDefault();
    setMessage('Compra realizada com sucesso!');
    localStorage.removeItem('cart');
    setTimeout(() => {
      history.push('/products');
    }, timer);
  };

  const removeItem = (item) => {
    setCart(cart.filter((prod) => prod !== item));
  };

  return (
    <div>
      {auth === null ? (
        <div>
          <Redirect to="/login" />
        </div>
      ) : (
        <div>
          <h2>Cliente - Checkout</h2>
          <TopMenu title="Finalizar Pedido" />
          <h2>Produtos</h2>
          {cart.length === zero ? (
            <h2>Não há produtos no carrinho</h2>
          ) : (
            <div>
              {cart.map((product, index) => (
                <div className="mb-4" key={ product.id }>
                  <p className="d-inline mr-2" data-testid={ `${index}-product-qtd-input` }>{ product.quantidade }</p>
                  <p className="d-inline mr-2" data-testid={ `${index}-product-name` }>{ product.name }</p>
                  <p className="d-inline mr-4" data-testid={ `${index}-product-total-value` }>{`R$ ${(product.price * product.quantidade).toFixed(two).replace('.', ',')}`}</p>
                  <p className="d-inline mr-4" data-testid={ `${index}-product-unit-price` }>{`(R$ ${product.price.toFixed(two).replace('.', ',')} un)`}</p>
                  <button type="button" className="btn btn-danger" data-testid={ `${index}-removal-button` } onClick={ () => removeItem(product) }>X</button>
                </div>
              ))}
            </div>
          )}

          <p data-testid="order-total-value">
            {`Total: R$ ${
              (cart.length > zero)
                ? cart.reduce((acc, curr) => curr.quantidade * curr.price + acc, zero).toFixed(two).replace('.', ',')
                : zero.toFixed(two).replace('.', ',')}`}
          </p>
          <h2>Endereço</h2>
          <form onSubmit={ finishShop }>
            <Field>
              <Label>Rua:</Label>
              <Input
                data-testid="checkout-street-input"
                type="text"
                placeholder="Digite o nome da rua"
                onChange={ (e) => setStreet(e) }
              />
            </Field>
            <Field>
              <Label>Número da casa:</Label>
              <Input
                data-testid="checkout-house-number-input"
                type="text"
                placeholder="Digite o numero da casa"
                onChange={ (e) => setHouse(e) }
              />
            </Field>
            { cart.length === zero || !street || !house
              ? <Button data-testid="checkout-finish-btn" disabled="true">Finalizar Pedido</Button>
              : <Button data-testid="checkout-finish-btn">Finalizar Pedido</Button>}
          </form>
          {message && (
            <div>
              <p>{message}</p>
              <Loader
                type="TailSpin"
                color="#00BFFF"
                height={ 50 }
                width={ 50 }
                timeout={ 1500 }
              />
            </div>)}
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
