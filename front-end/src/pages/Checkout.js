import React, { useEffect, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

const Checkout = () => {
  const history = useHistory();
  const [myCart, setMyCart] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [streetInput, setStreetInput] = useState('');
  const [houseInput, setHouseInput] = useState('');
  const [userIsLogged, setUserIsLogged] = useState(true);
  const [messageSuccess, setMessageSuccess] = useState(false);

  const finishCheckout = (e) => {
    e.preventDefault();
    setMessageSuccess(true);
    setTimeout(() => {
      history.push('/products');
    }, 2000);
  };
  const deliverInput = () => (
    <div className="container">
      <form className="card w-75 mx-auto m-3" onSubmit={ finishCheckout }>
        <h3 className="m-2">Endereço:</h3>
        <div className="form-group w-75 mx-auto m-2">
          <label htmlFor="street">Rua</label>
          <input
            onChange={ (e) => setStreetInput(e.target.value) }
            data-testid="checkout-street-input"
            type="text"
            id="street"
            className="form-control"
          />
        </div>

        <div className="form-group w-75 mx-auto m-2">
          <label htmlFor="house">Número da casa:</label>
          <input
            onChange={ (e) => setHouseInput(e.target.value) }
            data-testid="checkout-house-number-input"
            type="number"
            pattern={ /\d+/g }
            id="house"
            className="form-control"
          />
        </div>
        <div className="mx-auto m-2">
          <button
            className="btn btn-info"
            data-testid="checkout-finish-btn"
            disabled={ !!(totalValue === 0 || !streetInput || !houseInput) }
            type="submit"
          >
            Finalizar pedido
          </button>
        </div>
      </form>
    </div>
  );

  useEffect(() => {
    localStorage.getItem('cart')
      ? setMyCart(JSON.parse(localStorage.getItem('cart')))
      : setMyCart([]);

    localStorage.getItem('user') ? setUserIsLogged(true) : setUserIsLogged(false);
  }, []);

  useEffect(() => {
    setTotalValue(myCart.reduce((tot, curr) => tot + curr.quantity * curr.price, 0));
  }, [myCart]);

  const removeProduct = (product) => {
    const cartWithoutProduct = myCart.filter((prod) => prod.id !== product.id);
    setMyCart(cartWithoutProduct);
    localStorage.setItem('cart', JSON.stringify(cartWithoutProduct));
  };

  if (!userIsLogged) return <Redirect to="/login" />;

  console.log(messageSuccess ? 'Compra realizada com sucesso!' : 'não');

  return (
    <div className="m-2">
      <h1 data-testid="top-title">Cliente - Checkout</h1>
      <div className="">
        {myCart.map((product, index) => (
          <div key={ product.name } className="d-flex m-3 justify-content-between border">
            <p data-testid={ `${index}-product-qtd-input` }>{product.quantity}</p>
            <p data-testid={ `${index}-product-name` }>{product.name}</p>
            <p data-testid={ `${index}-product-total-value` }>
              {(product.quantity * product.price).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
            <small data-testid={ `${index}-product-unit-price` }>
              (
              {product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
              {' '}
              un)
            </small>
            <button
              data-testid={ `${index}-removal-button` }
              onClick={ () => removeProduct(product) }
              className="btn btn-danger"
            >
              X
            </button>
          </div>
        ))}
      </div>
      <h3 data-testid="order-total-value">
        {totalValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </h3>
      <h4 className="bg-warning mx-auto text-center w-50">
        {totalValue === 0 ? 'Não há produtos no carrinho' : null}
      </h4>
      {deliverInput()}
      <h4 className="bg-success mx-auto text-center w-50">
        {messageSuccess ? 'Compra realizada com sucesso!' : null}
      </h4>
    </div>
  );
};

export default Checkout;
