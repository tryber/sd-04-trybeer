import React from 'react';
import './ProductCard.css';

const addQtt = (e) => {
  const elSub = e.target.nextSibling.nextSibling;
  const elQtt = e.target.nextSibling;

  elQtt.innerText = +(elQtt.innerText) + 1;

  elSub.disabled = false;
};

const subQtt = (e) => {
  const elQtt = e.target.previousSibling;
  let qtt = +(elQtt.innerText) - 1;

  if (qtt === 0) {
    elQtt.innerText = qtt;
    e.target.disabled = true;
    return true;
  }

  elQtt.innerText = qtt;
};

export default ({ id, img, name, price, qtt }) => {
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
