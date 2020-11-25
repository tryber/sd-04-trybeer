import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import CheckoutCard from '../../components/CheckoutCard';
import { ProductContext } from '../../context';
import { postCheckout } from '../../api';

const Checkout = () => {
  const { id: userId } = localStorage.user;
  const { cartValue } = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  const [addressValue, setAddressValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [message, setMessage] = useState('');

  const history = useHistory();

  // seta valor do endereco no estado local
  function handleNumber(e) {
    setNumberValue(e.target.value);
  }

  // seta valor do numero no estado local
  function handleAddress(e) {
    setAddressValue(e.target.value);
  }

  // faz a requisicao pro back, se o retorno for ok retorna msg de sucesso se n de erro
  const handleSubmit = async (id, value, addressvalue, numbervalue) => {
    const date = Date.now();
    const status = 'pendente';
    const result = await postCheckout(id, value, addressvalue, numbervalue, date, status);
    if (result) {
      setMessage('Compra realizada com sucesso!');
      localStorage.cartItens = [];
      history.push('/products');
    }
    setMessage('Um erro aconteceu');
  };

  // quando a pag renderiza checa se tem user e cria estado local com produtos
  useEffect(() => {
    if (!localStorage.user) history.push('/login');
    const storageList = JSON.parse(localStorage.cartItens);
    setProducts(storageList);
  }, [history]);

  return (
    <div>
      <h1 data-testid="top-title">Finalizar Pedido</h1>
      {message ? <h5>{message}</h5> : null}
      {products ? products.map((e) => <CheckoutCard data={ e } key={ e.id } />) : <p>loading</p> }
      <h5 data-testid="order-total-value">{cartValue}</h5>
      <form action="/checkout" method="POST" onSubmit={ handleSubmit(userId, cartValue, addressValue, numberValue) }>
        <input
          type="hidden"
          name="products"
          value={ localStorage.cartItens }
        />
        <label htmlFor="address">
          Rua
          <input
            type="text"
            data-testid="checkout-street-input"
            name="address"
            id="address"
            required
            onChange={ handleAddress }
          />
        </label>
        <label htmlFor="number">
          Número da casa
          <input
            type="number"
            data-testid="checkout-house-number-input"
            name="number"
            id="number"
            required
            onChange={ handleNumber }
          />
        </label>
        <button
          disabled={ !products || !addressValue || !numberValue }
          type="submit"
          data-testid="checkout-finish-btn"
          onClick={ () => {} }
        >
          Finalizar Pedido
        </button>
      </form>
    </div>
  );
};
export default Checkout;
