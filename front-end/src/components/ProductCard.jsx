import React from 'react';
import './ProductCard.css';

function ProductCard({ name, price, imgProduct, quantity }) {
  return (
    <div className='beer-card'>
      <img className="beerImg" src={imgProduct} alt="imagem" />
      {console.log('HERE ', imgProduct)}
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
