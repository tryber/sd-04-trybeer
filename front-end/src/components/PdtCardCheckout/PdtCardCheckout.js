import React from 'react';
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

export default ({ id, i, name, price, qtt }) => {
  // const { totalPriceCart: [, setTotalPriceCart] } = useContext(TrybeerContext);

  return (
    <div>
      <div id={id} className='card-checkout'>
        <p>{id}</p>
        <p id="qtt" data-testid={`${i}-product-qtd`}>Quantidade: {qtt}</p>
        <p data-testid={`${i}-product-name`} className="card-name-checkout">{name}</p>
        <p data-testid={`${i}-product-price`} className="card-price-checkout">
          {price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </p>
        <button onClick={delPdt}>Excluir</button>
      </div>
    </div>
  );
};
