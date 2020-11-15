import React from 'react';
import { getLS, setLS } from '../../helpers/index';
import './ProductCard.css';

const addOrSub = (qttPdtsCart, index, pdt, op) => {
  if (op === 'add') pdt.qtt += 1;
  if (op === 'sub') pdt.qtt -= 1;

  pdt.totalPrice = pdt.price * pdt.qtt;
  qttPdtsCart[index] = pdt;

  setLS('qttPdtsCart', qttPdtsCart);
};

const updateLS = (target, op) => {
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

  addOrSub(qttPdtsCart, index, pdt, op);
};

const addQtt = (e) => {
  const elSub = e.target.nextSibling.nextSibling;
  const elQtt = e.target.nextSibling;

  elQtt.innerText = +(elQtt.innerText) + 1;

  updateLS(e.target, 'add')

  elSub.disabled = false;
};

const subQtt = (e) => {
  const elQtt = e.target.previousSibling;
  let qtt = +(elQtt.innerText) - 1;

  if (qtt === 0) {
    elQtt.innerText = qtt;

    updateLS(e.target, 'sub')

    e.target.disabled = true;

    return true;
  }

  elQtt.innerText = qtt;

  updateLS(e.target, 'sub')
};

export default ({ id, img, name, price, qtt }) => {
  console.log('ok')
  return (
    <div id={id} className='card'>
      <img src={img} alt="produto" />
      <p className="card-name">{name}</p>
      <p>{price}</p>
      <div className="qtt-buttons">
        <button
          type="button" className="btn btn-outline-success" onClick={addQtt}
        >
          +
        </button>
        <p id="qtt">{qtt}</p>
        <button
          type="button" className="btn btn-outline-danger" onClick={subQtt}
        >
          -
        </button>
      </div>
    </div>
  );
};
