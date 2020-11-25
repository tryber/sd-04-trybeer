import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CardCheckout from '../../PdtCardCheckout/PdtCardCheckout';
import { getLS, pdtName } from '../../../helpers';

export default () => {
  const history = useHistory();
  const qttPdtsCart = getLS('qttPdtsCart');
  const checkout = qttPdtsCart.filter((pdt) => pdt.qtt > 0);
  const totalPriceCart = getLS('totalPriceCart');
  const totalBr = totalPriceCart.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  useEffect(() => {
    if (!getLS('user')) return history.push('/login');

    // CC
    return () => { };
  }, [history]);

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="cards-container">
        {checkout.map(({ id, qtt, totalPrice }, i) => {
          const name = pdtName(id);

          return <CardCheckout
            key={id} id={id} i={i} name={name} price={totalPrice} qtt={qtt}
          />
        })}
      </div>
      <p>Total: {totalBr}</p>
    </div>
  );
};
