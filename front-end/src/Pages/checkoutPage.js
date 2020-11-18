import React, { useEffect, useState } from 'react';
import {
  Button, Field, Label, Input,
} from 'rbx';
import { Redirect } from 'react-router';

const CheckoutPage = () => {
  const [auth, setAuth] = useState({});
  const [cart, setCart] = useState({});
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const products = JSON.parse(localStorage.getItem('products'));
    setAuth(user);
    setCart(products);
  }, []);

  return (
    <div>
      {auth === null ? (
        <div>
          <Redirect to="/login" />
        </div>
      ) : (
        <div>
          <h2>Cliente - Checkout</h2>
          <h2>Produtos</h2>
          {cart === null ? <h2>Não há produtos no carrinho</h2> : <h2>Cart</h2>}

          <p data-testid="order-total-value">Total:</p>
          <h2>Endereço</h2>
          <form>
            <Field>
              <Label>Rua:</Label>
              <Input
                data-testid="checkout-street-input"
                type="text"
                placeholder="Digite o nome da rua"
              />
            </Field>
            <Field>
              <Label>Número da casa:</Label>
              <Input
                data-testid="checkout-house-number-input"
                type="text"
                placeholder="Digite o numero da casa"
              />
            </Field>
            <Button data-testid="checkout-finish-btn">Finalizar Pedido</Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
