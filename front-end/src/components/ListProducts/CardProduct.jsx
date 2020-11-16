import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from '../../redux/actions';

function CardProduct(props) {
  const { name, price, url_image: img, quantity, index } = props;
  const priceArrendodado = price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  const dispatch = useDispatch();
  const handleCart = (number) => {
    if (number < 0 && !quantity) return null;
    if (!quantity) {
      dispatch(addToCart({ ...props, number }));
    } else if (quantity + number <= 0) dispatch(removeFromCart(props));
    else dispatch(updateQuantity({ ...props, number }));
  };
  return (
    <div>
      <button
        data-testid={`${index}-product-plus`}
        onClick={() => handleCart(1)}
      >
        +
      </button>
      <span data-testid={`${index}-product-qtd`}>{quantity || 0}</span>
      <button
        data-testid={`${index}-product-minus`}
        onClick={() => handleCart(-1)}
      >
        -
      </button>
      <img
        data-testid={`${index}-product-img`}
        src={img}
        alt={name}
        width="20"
      />
      <span data-testid={`${index}-product-name`}>{name}</span>
      <span data-testid={`${index}-product-price`}>R$ {priceArrendodado}</span>
    </div>
  );
}

export default CardProduct;
