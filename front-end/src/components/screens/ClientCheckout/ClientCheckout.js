import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { TrybeerContext } from '../../../context/index';
import CardCheckout from '../../PdtCardCheckout/PdtCardCheckout';
import CheckoutForm from './CheckoutForm';
import { getLS, pdtName } from '../../../helpers';

export default () => {
  const { totalPriceCart: [, setTotalPriceCart] } = useContext(TrybeerContext);

  // Correção lint magic number
  const zero = 0;
  const history = useHistory();
  const qttPdtsCart = getLS('qttPdtsCart');
  const checkout = qttPdtsCart ? qttPdtsCart.filter((pdt) => pdt.qtt > zero) : [];
  const checkPriceCartLs = getLS('totalPriceCart') || zero;
  const totalBr = checkPriceCartLs.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  useEffect(() => {
    if (!getLS('user')) return history.push('/login');

    // Correção lint, arrow com retorno obrigatório de outra função :(
    return () => { };
  }, [history]);

  return (
    <div className="checkout-container">
      <h1 data-testid="top-title">Finalizar Pedido</h1>
      {checkPriceCartLs <= zero
        ? (
          <div>
            <p>Não há produtos no carrinho</p>
            <p data-testid="order-total-value">
              Total:
              {totalBr}
            </p>
          </div>
        )
        : (
          <div>
            <div className="cards-container">
              {checkout.map(({
                id, qtt, price, totalPrice,
              }, i) => {
                const name = pdtName(id);

                return (
                  // Regra sem sentido do lint q obriga a colocar todas as props
                  // em linhas diferentes :(
                  <CardCheckout
                    id={ id }
                    key={ id }
                    i={ i }
                    name={ name }
                    price={ price }
                    totalPrice={ totalPrice }
                    qtt={ qtt }
                  />
                );
              })}
            </div>
            <p data-testid="order-total-value">
              Total:
              {totalBr}
            </p>
          </div>
        )}
      <CheckoutForm
        checkPriceCartLs={ checkPriceCartLs }
        history={ history }
        setTotalPriceCart={ setTotalPriceCart }
      />
    </div>
  );
};
