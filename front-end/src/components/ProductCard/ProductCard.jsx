import React, { useContext } from 'react';
import { TrybeerContext } from '../../context/index';
import { getLS, setLS } from '../../helpers/index';
import './ProductCard.css';

const addOrSub = (qttPdtsCart, index, pdt, setTotalPriceCart, op) => {
  if (op === 'add') pdt.qtt += 1;
  if (op === 'sub') pdt.qtt -= 1;

  pdt.totalPrice = pdt.price * pdt.qtt;
  qttPdtsCart[index] = pdt;

  const totalPriceCart = qttPdtsCart.map((pdt) => pdt.totalPrice)
    .reduce((acc, value) => acc + value);

  // Atualiza context
  setTotalPriceCart(totalPriceCart);
  // Atualiza LS
  setLS('totalPriceCart', totalPriceCart);
  setLS('qttPdtsCart', qttPdtsCart);
};

const updateTotalPriceLS = (target, setTotalPriceCart, op) => {
  const id = +(target.parentNode.parentNode.id);
  const qttPdtsCart = getLS('qttPdtsCart');
  let index;
  const pdt = qttPdtsCart.filter((pdt, i) => {
    if (pdt.id === id) {
      index = i;
      return true;
    }
    return false;
  })[0];

  addOrSub(qttPdtsCart, index, pdt, setTotalPriceCart, op);
};

const addQtt = (e, setTotalPriceCart) => {
  // const elSub = e.target.nextSibling.nextSibling;
  const elQtt = e.target.nextSibling;

  elQtt.innerText = +(elQtt.innerText) + 1;

  updateTotalPriceLS(e.target, setTotalPriceCart, 'add')

  // elSub.disabled = false;
};

// const subQtt = (e, setTotalPriceCart) => {
//   console.log('ok')
//   const elQtt = e.target.previousSibling;
//   let qtt = +(elQtt.innerText) - 1;

//   if (qtt === 0) {
//     elQtt.innerText = qtt;

//     updateTotalPriceLS(e.target, setTotalPriceCart, 'sub')

//     e.target.disabled = true;

//     return true;
//   }

//   elQtt.innerText = qtt;

//   updateTotalPriceLS(e.target, setTotalPriceCart, 'sub')
// };

const subQtt = (e, setTotalPriceCart) => {
  console.log('ok')
  const elQtt = e.target.previousSibling;
  let qtt = +(elQtt.innerText);

  if (qtt === 0) {
    // elQtt.innerText = qtt + 1;

    // updateTotalPriceLS(e.target, setTotalPriceCart, 'sub')

    // e.target.disabled = true;

    return true;
  }

  elQtt.innerText = qtt - 1;

  updateTotalPriceLS(e.target, setTotalPriceCart, 'sub')
};

export default ({ id, i, img, name, price, qtt }) => {
  const { totalPriceCart: [, setTotalPriceCart] } = useContext(TrybeerContext);

  return (
    <div id={id} className='card'>
      <img data-testid={`${i}-product-img`} src={img} alt="produto" />
      <p data-testid={`${i}-product-name`} className="card-name">{name}</p>
      <p data-testid={`${i}-product-price`} className="card-price">
        {price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </p>
      <div className="qtt-btns">
        <button
          type="button" data-testid={`${i}-product-plus`} className="btn btn-outline-success"
          onClick={(e) => addQtt(e, setTotalPriceCart)}
        >
          +
        </button>
        <p id="qtt" data-testid={`${i}-product-qtd`}>{qtt}</p>
        <button
          type="button" data-testid={`${i}-product-minus`} className="btn btn-outline-danger"
          onClick={(e) => subQtt(e, setTotalPriceCart)}
        >
          -
        </button>
      </div>
    </div>
  );
};
