import React from 'react'

function CardProduct({ info: { name, price, url_image: img } }) {
  return (
    <div>
      <img src={img} alt={name} />
      <span>{name}</span>
      <span>R${price}</span>
    </div>
  )
}

export default CardProduct;
