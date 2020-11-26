import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const excludeItem = (cart, setCartState, id) => {
  const newCart = cart.filter((item) => item.id !== parseInt(id));
  setCartState(newCart)
  localStorage.setItem('cart', JSON.stringify([...newCart]))
};

const Products = ({ cartState, setCartState }) => {

  const totalPrice = cartState.reduce((ac, cc) => ac + cc.price * cc.amount, 0)

  const totalCurrency = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="products-container">
      <h2>Produtos</h2>
      {cartState.length > 0 &&
        <ul>
          {cartState.map((item) =>
            <li key={item.id}>
              <p>{item.amount}</p>
              <p>{item.name}</p>
              <p>{(item.price * item.amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              <p>({item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} un)</p>
              <button
                value={item.id}
                onClick={(event) => {
                  excludeItem(cartState, setCartState, event.target.value)
                }}
              >x</button>
            </li>
          )}
        </ul>
      }
      {cartState.length < 1 &&
        <div className="cart-empty">
          <p>Não há produtos no carrinho</p>
        </div>
      }
      <p>Total: {totalCurrency}</p>
    </div>
  )
};

Products.propTypes = {
  cartState: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCartState: PropTypes.func.isRequired,
};

export default Products;
