import React from 'react';
import './index.css';

const Card = ({ img, title, price, index }) => {
    return (
        <div key={index} className="card-container">
            <img src={img} alt={title} className="card-img" data-testid={`${index}-product-img`} />
            <span data-testid={`${index}-product-name`} >{title}</span>
            <span data-testid={`${index}-product-price`} >{`R$ ${price.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})}`}</span>
            <div className="button-container">
              <button data-testid={`${index}-product-minus`} type="button">-</button>
              <span data-testid={`${index}-product-qtd`} >0</span>
              <button data-testid={`${index}-product-plus`} type="button">+</button>
            </div>
        </div>
    )
}

export default Card
