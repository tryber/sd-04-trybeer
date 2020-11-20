import React from 'react';
import PropTypes from 'prop-types';

const excludeItem = (cart, setCartState, id) => {
  const newCart = cart.filter((item) => item.id !== parseInt(id));
  setCartState(newCart)
  localStorage.setItem('cart', JSON.stringify([...newCart]))
};

const Products = ({cartState, setCartState}) => {

  const totalPrice = cartState.reduce((ac, cc) => ac + cc.price * cc.amount, 0)

  const totalCurrency = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="products-container">
      <ul>
        {cartState.map((item) =>
          <li key={item.id}>
            <p>{item.amount}</p>
            <p>{item.name}</p>
            <p>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <button
              value={item.id}
              onClick={(event) => {
                console.log(event.target.value)
                excludeItem(cartState, setCartState, event.target.value)
              }}
            >X</button>
          </li>
        )}
      </ul>
      <p>Total: {totalCurrency}</p>
    </div>
  )
};

Products.propTypes = {
  cartState: PropTypes.arrayOf(PropTypes.object),
  setCartState: PropTypes.func,
};

export default Products;
