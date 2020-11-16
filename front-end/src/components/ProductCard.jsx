import React from 'react';
import imgProd from './images/Becks600ml.jpg';
import './ProductCard.css';

function ProductCard({ name, price, imgProduct, quantity }) {
  return (
    <div>
      <img className="beerImg" src={imgProd} alt="imagem" />
      <p>{name}</p>
      <span>{price}</span>
      <div>
        <button>-</button>
        <span>{quantity}</span>
        <button>+</button>
      </div>
    </div>
  )
};

export default ProductCard;
