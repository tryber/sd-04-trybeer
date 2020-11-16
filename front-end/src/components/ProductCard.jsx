import React from 'react';
import './ProductCard.css';

function ProductCard({ name, price, urlImage }) {
  return (
    <div className='beer-card'>
      <img className="beerImg" src={urlImage} alt="imagem" />
      <p>{name}</p>
      <span>R$ {price}</span>
      <div className="bottom">
        <button>-</button>
        <span>0</span>
        <button>+</button>
      </div>
    </div>
  )
};

export default ProductCard;
