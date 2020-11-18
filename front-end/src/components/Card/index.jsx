import React, { useContext } from 'react';
import { Context } from '../../context/Provider';
// import { getLS, setLS } from '../../utils';
import './index.css';

const Card = ({ img, name, price, index, id }) => {
  const { cart, setCart } = useContext(Context);

  const incrementCounterHandler = (name, price, productId) => {
    const itemAdd = { id: productId, name, quantity: 1, price };

    const itemInCart = cart.findIndex((product) => product.id === productId);

    itemInCart !== -1
      ? setCart(
          cart.map((product) =>
            product.id === productId
              ? Object.assign({}, product, (product.quantity += 1))
              : product,
          ),
        )
      : setCart([...cart, itemAdd]);
  };

  const decrementCounterHandler = (productId) => {
    const itemInCart = cart.findIndex((product) => product.id === id);

    if (itemInCart >= 0 && cart[itemInCart].quantity > 0) {
      setCart(
        cart.map((product) =>
          product.id === productId
            ? Object.assign({}, product, (product.quantity -= 1))
            : product,
        ),
      );
    }

    if (itemInCart >= 0 && cart[itemInCart].quantity === 0) {
      setCart(cart.filter((item) => item.quantity > 0));
    }
  };

  return (
    <div className="card-container">
      <img
        src={img}
        alt={name}
        className="card-img"
        data-testid={`${index}-product-img`}
      />
      <span data-testid={`${index}-product-name`}>{name}</span>
      <span data-testid={`${index}-product-price`}>
        {`${price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}`}
      </span>
      <div className="button-container">
        <button
          data-testid={`${index}-product-minus`}
          onClick={() => decrementCounterHandler(id)}
          type="button"
        >
          -
        </button>
        <span data-testid={`${index}-product-qtd`}>
          {!cart.filter((item) => item.id === id)[0]
            ? 0
            : cart.filter((item) => item.id === id)[0].quantity}
        </span>
        <button
          data-testid={`${index}-product-plus`}
          onClick={() => incrementCounterHandler(name, price, id)}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
