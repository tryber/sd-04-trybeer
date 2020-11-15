import React from 'react'

const Card = ({ img, title, price, key }) => {
    return (
        <div key={key}>
            <img src={img} alt={title} data-testid={`${key}-product-img`} />
            <span data-testid={`${key}-product-name`} >{title}</span>
            <span data-testid={`${key}-product-price`} >{`R$ ${price.toFixed(2)}`}</span>
            <button data-testid={`${key}-product-minus`} type="button">-</button>
            <span data-testid={`${key}-product-qtd`} >0</span>
            <button data-testid={`${key}-product-plus`} type="button">+</button>
        </div>
    )
}

export default Card
