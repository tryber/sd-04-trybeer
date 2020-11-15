import React from 'react'

const Card = ({ img, title, price, index }) => {
    return (
        <div key={index}>
            <img src={img} alt={title} data-testid={`${index}-product-img`} />
            <span data-testid={`${index}-product-name`} >{title}</span>
            <span data-testid={`${index}-product-price`} >{`R$ ${price.toFixed(2)}`}</span>
            <button data-testid={`${index}-product-minus`} type="button">-</button>
            <span data-testid={`${index}-product-qtd`} >0</span>
            <button data-testid={`${index}-product-plus`} type="button">+</button>
        </div>
    )
}

export default Card
