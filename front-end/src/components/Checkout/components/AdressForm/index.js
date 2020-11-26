import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const AdressForm = ({cartState}) => {
   
  const [checkoutBtnDisabled, setCheckoutBtnDisabled] = useState(true);

  useEffect(() => {
    if (cartState.length < 1) {
      setCheckoutBtnDisabled(true)
    } else {
      setCheckoutBtnDisabled(false)
    }
  }, [cartState])


  return (
    <div className="adress-form-container">
      <h2>Endereço</h2>
      <form>
        <label htmlFor="street">
          Rua
        <input type="text" id="street" />
        </label>
        <label htmlFor="number">
          Número da casa
        <input type="text" id="number" />
        </label>
        <button disabled={checkoutBtnDisabled}>Finalizar Pedido</button>
      </form>
    </div>
  )
};

AdressForm.propTypes = {
  cartState: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AdressForm;
