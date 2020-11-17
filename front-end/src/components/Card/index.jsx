import React, { useContext } from 'react';
import { Context } from '../../context/Provider';
import { getLS, setLS } from '../../utils';
import './index.css';

const Card = ({ img, title, price, index }) => {
  const { cart, setCart } = useContext(Context);

  const IncrementCounterHandler = (title, price) => {
    const itemAdd = { title, price };

    setCart(prevState => [...prevState, itemAdd]);

    const cartStore = getLS('cart');

    return cartStore ? setLS('cart', [...cartStore, itemAdd]) : setLS('cart', [itemAdd]);
  };

  const DecrementCounterHandler = title => {
    if (cart.length < 1) return null;

    const removeItem = cart.findIndex(item => item.title === title);

    if (removeItem >= 0) {
      cart.splice(removeItem, 1);
      setLS('cart', cart);
      setCart(cart);
    }
  };

  return (
    <div key={index} className="card-container">
      <img
        src={img}
        alt={title}
        className="card-img"
        data-testid={`${index}-product-img`}
      />
      <span data-testid={`${index}-product-name`}>{title}</span>
      <span data-testid={`${index}-product-price`}>
        {`${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
      </span>
      <div className="button-container">
        <button
          data-testid={`${index}-product-minus`}
          onClick={() => DecrementCounterHandler(title)}
          type="button"
        >
          -
        </button>
        <span data-testid={`${index}-product-qtd`}>
          {!cart ? 0 : cart.filter(item => item.title === title).length}
        </span>
        <button
          data-testid={`${index}-product-plus`}
          onClick={() => IncrementCounterHandler(title, price)}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
