import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { TrybeerContext } from '../../context/index';
import { getLS, setLS } from '../../helpers/index';
import './PdtCardCheckout.css';

const delPdt = (e, setTotalPriceCart) => {
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

  // Recalcula o valor do carrinho após exclusão
  const totalPriceCart = qttPdtsCart.map((pdt) => pdt.totalPrice)
    .reduce((acc, value) => acc + value);

  // Atualiza context e local storage com o preço atual
  setTotalPriceCart(totalPriceCart);
  setLS('totalPriceCart', totalPriceCart);

  elDel.parentNode.removeChild(elDel);

  return true;
};

// Lint está obrigando a indentar de um modo muito feio :( bad
const PdtCardCheckout = ({
  id, i, name, price, qtt, totalPrice,
}) => {
  // const zero = 0;
  const { totalPriceCart: [, setTotalPriceCart] } = useContext(TrybeerContext);

  return (
    <div>
      <div id={ id } className="card-checkout">
        <p>{ id }</p>
        <p id="qtt" data-testid={ `${i}-product-qtd-input` }>
          Quantidade:
          { qtt }
        </p>
        <p data-testid={ `${i}-product-unit-price` }>
          { `(${price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} un)` }
        </p>
        <p data-testid={ `${i}-product-name` } className="card-name-checkout">{ name }</p>
        <p data-testid={ `${i}-product-total-value` } className="card-price-checkout">
          { totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
        </p>
        <button
          type="button"
          data-testid={ `${i}-removal-button` }
          onClick={ (e) => delPdt(e, setTotalPriceCart) }
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

PdtCardCheckout.propTypes = {
  id: propTypes.number.isRequired,
  i: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  qtt: propTypes.number.isRequired,
  totalPrice: propTypes.number.isRequired,
};

export default PdtCardCheckout;
