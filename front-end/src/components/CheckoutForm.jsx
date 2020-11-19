import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadInitCart } from '../store/ducks/productsCart';
import { useHistory } from 'react-router-dom';
import { deleteFromLocalStorage } from '../services/localStorage';

const CheckoutForm = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const cart = useSelector((state) => state.cartReducer.cart);

  const [address, setAddress] = useState({
    street: '',
    number: '',
  });

  const [messageCheckOk, setMessageCheckOk] = useState(false);

  function goToProducts() {
    history.push('/products');
  }

  const handleClick = () => {
    // message ok or nok
    setMessageCheckOk(true);
    // Clear cart
    dispatch(loadInitCart({}));
    deleteFromLocalStorage('cart');
    setTimeout(goToProducts, 1000);
  };

  return (
    <div>
      <div className="form">
        <form>
          <h3>Endereço</h3>
          <label>
            Rua:
            <input
              name="street"
              type="text"
              data-testid="checkout-street-input"
              placeholder="Digit seu rua"
              value={address.street}
              onChange={(event) =>
                setAddress({ ...address, [event.target.name]: event.target.value })
              }
            />
          </label>
          <label>
            Número da casa:
            <input
              name="number"
              type="number"
              data-testid="checkout-house-number-input"
              placeholder="Digit seu rua"
              value={address.number}
              onChange={(event) =>
                setAddress({ ...address, [event.target.name]: event.target.value })
              }
            />
          </label>
        </form>
      </div>
      <button
        data-testid="checkout-finish-btn"
        onClick={handleClick}
        disabled={!props.total > 0 || address.street.length < 1 || address.number.length < 1}
      >
        Finalizar Pedido{' '}
      </button>
      {messageCheckOk && <h2>Compra realizada com sucesso!</h2>}
    </div>
  );
};
export default CheckoutForm;
