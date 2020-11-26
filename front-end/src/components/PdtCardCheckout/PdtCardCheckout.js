import React from 'react';
import propTypes from 'prop-types';
// import { TrybeerContext } from '../../context/index';
import { getLS, setLS } from '../../helpers/index';
import './PdtCardCheckout.css';

const delPdt = (e) => {
  const idPdt = +(e.target.parentNode.id);
  const elDel = document.getElementById(`${idPdt}`);
  const qttPdtsCart = getLS('qttPdtsCart');
  const newQttPdtsCart = qttPdtsCart.map((pdt) => {
    if (pdt.id === idPdt) {
      pdt.qtt = 0;
      pdt.totalPrice = 0;
    }

    return pdt;
  });

  setLS('qttPdtsCart', newQttPdtsCart);
  elDel.parentNode.removeChild(elDel);

  return true;
};

// Lint está obrigando a indentar de um modo muito feio :( bad
const PdtCardCheckout = ({
  id, i, name, price, qtt,
}) => (
  <div id={ id } className="card-checkout">
    <p>{ id }</p>
    <p id="qtt" data-testid={ `${i}-product-qtd` }>
      Quantidade:
      { qtt }
    </p>
    <p data-testid={ `${i}-product-name` } className="card-name-checkout">{ name }</p>
    <p data-testid={ `${i}-product-price` } className="card-price-checkout">
      { price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
    </p>
    <button type="button" onClick={ delPdt }>Excluir</button>
  </div>
);

PdtCardCheckout.propTypes = {
  id: propTypes.number.isRequired,
  i: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  qtt: propTypes.number.isRequired,
};

export default PdtCardCheckout;
